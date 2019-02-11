# V is for Vector

Simple 2d vector implementation. Made for learning and for personal projects.

## Install

`yarn add v-for-vector` or `npm install v-for-vector`

## Usage

```ts
import { Vector } from 'v-for-vector';

const v1 = Vector.cartesian(10, 10);
const v2 = Vector.polar(10, 0);

v1.add(v2).div(2);

v1.x; // 20
v1.y; // 10
```

## API

```ts
export class Vector {
  constructor(xOrAngle: number, yOrMagnitude: number, polar?: boolean);

  static cartesian(x: number, y: number): Vector;
  static polar(angle: number, magnitude: number): Vector;
  static zero(): Vector;

  x: number;
  y: number;
  angle: number;
  magnitude: number;

  setX(x: number): this;
  setY(y: number): this;
  setCartesian(x: number, y: number): this;
  setAngle(angle: number): this;
  setMagnitude(magnitude: number): this;
  setPolar(angle: number, magnitude: number): this;

  add(b: Vector | number): this;
  sub(b: Vector | number): this;
  mult(n: number): this;
  div(n: number): this;
  dot(v: Vector): number;
  normalize(): this;

  clone(): Vector;
  copyFrom(v: Vector): this;

  static clone(v: Vector): Vector;
  static dist(v1: Vector, v2: Vector): number;
  static x(angle: number, magnitude: number): number;
  static y(angle: number, magnitude: number): number;
  static dot(v1: Vector, v2: Vector): number;
}
```
