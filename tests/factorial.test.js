import { it, describe, expect } from 'vitest';
import factorial from '../src/factorial';

describe('factorial', () => {
  it('should return 1, for factorial of 0 or 1', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
  });

  it('should return 2 for factorial of 2', () => {
    expect(factorial(2)).toBe(2);
  });

  it('should return 6 for factorial of 3', () => {
    expect(factorial(3)).toBe(6);
  });

  it('should return 120 for factorial of 5', () => {
    expect(factorial(5)).toBe(120);
  });
});
