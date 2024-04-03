import { describe, it, expect } from 'vitest';
import {
  isBalanced,
  isPalindrome,
  isValidParanthesis,
} from '../src/js_strings';

describe('isPalindrome', () => {
  it('should return null, if empty string | no input', () => {
    expect(isPalindrome('')).toBe(null);
    expect(isPalindrome()).toBe(null);
  });
  it('should return false, if non palindrome string', () => {
    expect(isPalindrome('Hello')).toBe(false);
  });

  it('should return null, if other types value provided as input', () => {
    expect(isPalindrome(123242)).toBe(null);
  });

  it('should return true, if given string is palindrome', () => {
    expect(isPalindrome('Madam')).toBe(true);
  });
});

describe('isValidParanthesis', () => {
  it('should return true, for string input', () => {
    expect(isValidParanthesis('a')).toBe(true);
  });

  it('should return false, if numbers given to the function', () => {
    expect(isValidParanthesis(12321)).toBe(false);
  });

  it('should return false, if given input is invalid', () => {
    expect(isValidParanthesis('asdlfka{0)')).toBe(false);
  });

  it('should return false, for invalid paranthesis or brackets', () => {
    expect(isValidParanthesis('{')).toBe(false);
    expect(isValidParanthesis(')')).toBe(false);
    expect(isValidParanthesis(']')).toBe(false);
  });

  it('should return true, if valid parenthesis', () => {
    expect(isValidParanthesis('{([])}')).toBe(true);
  });
});

describe('isBalanced', () => {
  it('should return false, for invalid brackets', () => {
    expect(isBalanced('{}{}{')).toBe(false);
    expect(isBalanced('}')).toBe(false);
    expect(isBalanced('}}')).toBe(false);
    expect(isBalanced('{{{}}}}')).toBe(false);
  });
  it('should return false, for invalid square brackets', () => {
    expect(isBalanced('[]]')).toBe(false);
    expect(isBalanced('[')).toBe(false);
    expect(isBalanced(']')).toBe(false);
    expect(isBalanced('[[[]]]]')).toBe(false);
    expect(isBalanced('[]][[]')).toBe(false);
  });
  it('should return false, for invalid square paranthesis', () => {
    expect(isBalanced('()(')).toBe(false);
    expect(isBalanced('(')).toBe(false);
    expect(isBalanced(')')).toBe(false);
    expect(isBalanced('()()()(')).toBe(false);
    expect(isBalanced(')()(')).toBe(false);
  });
});
