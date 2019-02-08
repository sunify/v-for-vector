export class Vector {
  private _x: number | undefined;
  private _y: number | undefined;
  private _angle: number | undefined;
  private _magnitude: number | undefined;

  static clone(v: Vector) {
    const clone = new Vector(0, 0);
    clone._x = v._x;
    clone._y = v._y;
    clone._angle = v._angle;
    clone._magnitude = v._magnitude;
    return clone;
  }

  static cartesian(x: number, y: number) {
    return new Vector(x, y);
  }

  static polar(angle: number, magnitude: number) {
    return new Vector(angle, magnitude, true);
  }

  static magnitude(v: Vector) {
    return Vector.dist(v, origin);
  }

  static angle(v: Vector) {
    return Math.atan2(v.y, v.x);
  }

  static dist(v1: Vector, v2: Vector) {
    return Math.hypot(v1.x - v2.x, v1.y - v2.y);
  }

  static x(angle: number, magnitude: number) {
    return magnitude * Math.cos(angle);
  }

  static y(angle: number, magnitude: number) {
    return magnitude * Math.sin(angle);
  }

  static dot(v1: Vector, v2: Vector) {
    return v1.x * v1.y + v2.x * v2.y;
  }

  public add(v: Vector) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  public addS(n: number) {
    this.x += n;
    this.y += n;
    return this;
  }

  public mult(v: Vector) {
    this.x *= v.x;
    this.y *= v.y;
    return this;
  }

  public multS(n: number) {
    this.x *= n;
    this.y *= n;

    return this;
  }

  public sub(v: Vector) {
    return this.add(Vector.clone(v).multS(-1));
  }

  public subS(n: number) {
    return this.addS(-n);
  }

  public div(v: Vector) {
    this.x /= v.x;
    this.y /= v.y;
    return this;
  }

  public divS(n: number) {
    this.x /= n;
    this.y /= n;
    return this;
  }

  public clone(v: Vector) {
    return Vector.clone(v);
  }

  public dot(v: Vector) {
    return Vector.dot(this, v);
  }

  public normalize() {
    if (this.magnitude > 0) {
      this.divS(this.magnitude);
    }

    return this;
  }

  public get x() {
    if (
      this._x === undefined &&
      this._magnitude !== undefined &&
      this._angle !== undefined
    ) {
      this._x = Vector.x(this._angle, this._magnitude);
    }
    return this._x as number;
  }

  public set x(x: number) {
    this._x = x;
    this.resetPolar();
  }

  public get y() {
    if (
      this._y === undefined &&
      this._magnitude !== undefined &&
      this._angle !== undefined
    ) {
      this._y = Vector.y(this._angle, this._magnitude);
    }
    return this._y as number;
  }

  public set y(y: number) {
    this._y = y;
    this.resetPolar();
  }

  public get angle() {
    if (this._angle === undefined) {
      this._angle = Vector.angle(this);
    }
    return this._angle as number;
  }

  public set angle(angle: number) {
    this._angle = angle;
    this.resetCartesian();
  }

  public get magnitude() {
    if (this._magnitude === undefined) {
      this._magnitude = Vector.magnitude(this);
    }
    return this._magnitude as number;
  }

  public set magnitude(magnitude: number) {
    this._magnitude = magnitude;
    this.resetCartesian();
  }

  private resetCartesian() {
    this._x = undefined;
    this._y = undefined;
  }

  private resetPolar() {
    this._angle = undefined;
    this._magnitude = undefined;
  }

  constructor(xOrAngle: number, yOrMagnitude: number, polar?: boolean) {
    if (polar) {
      this._angle = xOrAngle;
      this._magnitude = yOrMagnitude;
    } else {
      this._x = xOrAngle;
      this._y = yOrMagnitude;
    }
  }
}

const origin = new Vector(0, 0);
