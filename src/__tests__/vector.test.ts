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
  test('add', () => {
    const v1 = Vector.polar(Math.PI, 65);
    const v2 = v1.add(Vector.cartesian(300, 300));
    expect(v2.x).toBe(235);
    expect(v2.y).toBe(300);
  });
  test('add scalar', () => {
    const v1 = Vector.cartesian(0, 10);
    const v2 = v1.add(100);
    expect(v2.x).toBe(100);
    expect(v2.y).toBe(110);
  });

  test('mult', () => {
    const v1 = Vector.cartesian(0, 10);
    const v2 = v1.mult(100);
    expect(v2.x).toBe(0);
    expect(v2.y).toBe(1000);
  });

  test('sub', () => {
    const v1 = Vector.cartesian(0, 10);
    const v2 = v1.sub(Vector.cartesian(10, 0));
    expect(v2.x).toBe(-10);
    expect(v2.y).toBe(10);
  });
  test('sub scalar', () => {
    const v1 = Vector.cartesian(0, 10);
    const v2 = v1.sub(100);
    expect(v2.x).toBe(-100);
    expect(v2.y).toBe(-90);
  });

  test('div', () => {
    const v1 = Vector.cartesian(0, 10);
    const v2 = v1.div(100);
    expect(v2.x).toBe(0);
    expect(v2.y).toBe(0.1);
  });
});
