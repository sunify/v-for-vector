export class Vector {
  constructor(
    public x: number,
    public y: number,
  ) {

  }

  static cartesian(x: number, y: number) {
    return new Vector(x, y);
  }

  static polar(angle: number, magnitude: number) {
    return new Vector(
      magnitude * Math.cos(angle),
      magnitude * Math.sin(angle),
    );
  }
}