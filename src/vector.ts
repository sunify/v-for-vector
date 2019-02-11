export class Vector {
  private _x: number;
  private _y: number;

  static clone(v: Vector) {
    const clone = new Vector(0, 0);
    clone._x = v._x;
    clone._y = v._y;
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

  static zero() {
    return Vector.cartesian(0, 0);
  }

  public add(v: Vector) {
    this.x = this.x + v.x;
    this.y = this.y + v.y;
    return this;
  }

  public addS(n: number) {
    this.x += n;
    this.y += n;
    return this;
  }

  public mult(n: number) {
    this.x *= n;
    this.y *= n;

    return this;
  }

  public sub(v: Vector) {
    return this.add(Vector.clone(v).mult(-1));
  }

  public subS(n: number) {
    return this.addS(-n);
  }

  public div(n: number) {
    this.x /= n;
    this.y /= n;
    return this;
  }

  public clone() {
    return Vector.clone(this);
  }

  public copyFrom(v: Vector) {
    this._x = v._x;
    this._y = v._y;

    return this;
  }

  public dot(v: Vector) {
    return Vector.dot(this, v);
  }

  public normalize() {
    if (this.magnitude > 0) {
      this.div(this.magnitude);
    }

    return this;
  }

  public get x() {
    return this._x;
  }

  public setX(x: number) {
    this._x = x;
    return this;
  }

  public set x(x: number) {
    this.setX(x);
  }

  public get y() {
    return this._y;
  }

  public setY(y: number) {
    this._y = y;
    return this;
  }

  public set y(y: number) {
    this.setY(y);
  }

  public setCartesian(x: number, y: number) {
    this.setX(x);
    this.setY(y);

    return this;
  }

  public get angle() {
    return Vector.angle(this);
  }

  public setAngle(angle: number) {
    const magnitude = this.magnitude;
    this._x = Vector.x(angle, magnitude);
    this._y = Vector.y(angle, magnitude);

    return this;
  }

  public set angle(angle: number) {
    this.setAngle(angle);
  }

  public get magnitude() {
    return Vector.magnitude(this);
  }

  public setMagnitude(magnitude: number) {
    const angle = this.angle;
    this._x = Vector.x(angle, magnitude);
    this._y = Vector.y(angle, magnitude);

    return this;
  }

  public set magnitude(magnitude: number) {
    this.setMagnitude(magnitude);
  }

  public setPolar(angle: number, magnitude: number) {
    this._x = Vector.x(angle, magnitude);
    this._y = Vector.y(angle, magnitude);

    return this;
  }

  constructor(xOrAngle: number, yOrMagnitude: number, polar?: boolean) {
    if (polar) {
      this._x = Vector.x(xOrAngle, yOrMagnitude);
      this._y = Vector.y(xOrAngle, yOrMagnitude);
    } else {
      this._x = xOrAngle;
      this._y = yOrMagnitude;
    }
  }
}

const origin = new Vector(0, 0);
