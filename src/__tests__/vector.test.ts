import { Vector } from '../vector';

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

describe('polar', () => {
  test('magnitude', () => {
    const v1 = Vector.cartesian(0, 100);
    expect(Vector.magnitude(v1)).toBe(100);
  });
});
