import { Vector } from '../vector';

const radians = (deg: number) => (deg * Math.PI) / 180;

describe('construction', () => {
  test('cartesian', () => {
    const v1 = Vector.cartesian(10, 0);
    expect(v1.x).toBe(10);
    expect(v1.y).toBe(0);
    expect(v1.angle).toBe(0);
    expect(v1.magnitude).toBe(10);
  });

  test('polar', () => {
    const v1 = Vector.polar(0, 10);
    expect(v1.angle).toBe(0);
    expect(v1.magnitude).toBe(10);
    expect(v1.x).toBe(10);
    expect(v1.y).toBe(0);
  });
});

describe('statics', () => {
  test('magnitude', () => {
    const v1 = Vector.cartesian(0, 100);
    expect(Vector.magnitude(v1)).toBe(100);
  });

  test('angle', () => {
    const v1 = Vector.cartesian(0, 100);
    expect(Vector.angle(v1)).toBe(radians(90));
    const v2 = Vector.cartesian(100, 100);
    expect(Vector.angle(v2)).toBe(radians(45));
  });

  test('dist', () => {
    const v1 = Vector.cartesian(10, 10);
    const v2 = Vector.cartesian(100, 10);
    expect(Vector.dist(v1, v2)).toBe(90);
  });

  test('dot', () => {
    expect(
      Vector.dot(Vector.cartesian(10, 10), Vector.cartesian(100, 10))
    ).toBe(1100);
  });

  test('clone', () => {
    const v1 = Vector.cartesian(10, 10);
    const v2 = Vector.clone(v1);
    expect(v2.x).toBe(10);
    expect(v2.y).toBe(10);
    expect(v2).not.toBe(v1);
    v2.x = 100;
    expect(v2.x).toBe(100);
    expect(v1.x).toBe(10);
  });

  test('x', () => {
    expect(Vector.x(radians(0), 10)).toBe(10);
    expect(Math.round(Vector.x(Math.PI / 2, 10))).toBe(0);
  });

  test('y', () => {
    expect(Vector.y(radians(0), 10)).toBe(0);
    expect(Math.round(Vector.y(Math.PI / 2, 10))).toBe(10);
  });
});

describe('algebra', () => {
  test('add', () => {
    const v1 = Vector.cartesian(0, 10);
    const v2 = v1.add(Vector.cartesian(10, 0));
    expect(v2.x).toBe(10);
    expect(v2.y).toBe(10);
  });
  test('addS', () => {
    const v1 = Vector.cartesian(0, 10);
    const v2 = v1.addS(100);
    expect(v2.x).toBe(100);
    expect(v2.y).toBe(110);
  });

  test('mult', () => {
    const v1 = Vector.cartesian(5, 10);
    const v2 = v1.mult(Vector.cartesian(10, 4));
    expect(v2.x).toBe(50);
    expect(v2.y).toBe(40);
  });
  test('multS', () => {
    const v1 = Vector.cartesian(0, 10);
    const v2 = v1.multS(100);
    expect(v2.x).toBe(0);
    expect(v2.y).toBe(1000);
  });

  test('sub', () => {
    const v1 = Vector.cartesian(0, 10);
    const v2 = v1.sub(Vector.cartesian(10, 0));
    expect(v2.x).toBe(-10);
    expect(v2.y).toBe(10);
  });
  test('subS', () => {
    const v1 = Vector.cartesian(0, 10);
    const v2 = v1.subS(100);
    expect(v2.x).toBe(-100);
    expect(v2.y).toBe(-90);
  });

  test('div', () => {
    const v1 = Vector.cartesian(4, 10);
    const v2 = v1.div(Vector.cartesian(2, 5));
    expect(v2.x).toBe(2);
    expect(v2.y).toBe(2);
  });
  test('divS', () => {
    const v1 = Vector.cartesian(0, 10);
    const v2 = v1.divS(100);
    expect(v2.x).toBe(0);
    expect(v2.y).toBe(0.1);
  });
});
