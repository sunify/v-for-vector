import { Vector } from '../vector';

describe('construction', () => {
  test('cartesian', () => {
    const v1 = Vector.cartesian(10, 15);
    expect(v1.x).toBe(10);
    expect(v1.y).toBe(15);
  });

  test('polar', () => {
    const v1 = Vector.polar(0, 10);
    expect(v1.x).toBe(10);
    expect(v1.y).toBe(0);
  });
});
