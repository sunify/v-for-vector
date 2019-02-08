type CartesianParams = {
  x: number;
  y: number;
};

type PolarParams = {
  angle: number;
  magnitude: number;
};

export class Vector {
  private _x: number | undefined;
  private _y: number | undefined;
  private _angle: number | undefined;
  private _magnitude: number | undefined;

  static cartesian(x: number, y: number) {
    return new Vector({ x, y });
  }

  static polar(angle: number, magnitude: number) {
    return new Vector({ angle, magnitude });
  }

  static magnitude(v: Vector) {
    return Math.hypot(v.y, v.x);
  }

  static angle(v: Vector) {
    return Math.atan2(v.y, v.x);
  }

  static dist(v1: Vector, v2: Vector) {
    return Math.hypot(v1.x + v2.x, v1.y + v2.y);
  }

  static x(angle: number, magnitude: number) {
    return magnitude * Math.cos(angle);
  }

  static y(angle: number, magnitude: number) {
    return magnitude * Math.sin(angle);
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
    this._angle = undefined;
    this._magnitude = undefined;
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
    this._angle = undefined;
    this._magnitude = undefined;
  }

  public get angle() {
    if (this._angle === undefined) {
      this._angle = Vector.angle(this);
    }
    return this._angle as number;
  }

  public set angle(angle: number) {
    this._angle = angle;
    this._x = undefined;
    this._y = undefined;
  }

  public get magnitude() {
    if (this._magnitude === undefined) {
      this._magnitude = Vector.magnitude(this);
    }
    return this._magnitude as number;
  }

  public set magnitude(magnitude: number) {
    this._magnitude = magnitude;
    this._x = undefined;
    this._y = undefined;
  }

  private constructor(params: CartesianParams | PolarParams) {
    if ((params as PolarParams).angle !== undefined) {
      this._angle = (params as PolarParams).angle;
      this._magnitude = (params as PolarParams).magnitude;
    } else {
      this._x = (params as CartesianParams).x;
      this._y = (params as CartesianParams).y;
    }
  }
}
