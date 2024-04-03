import { describe, expect, it } from 'vitest';
import { isAnagram } from '../src/anagram';

describe('isAnagram', () => {
  it('should return false, if length is not equal for given two strings', () => {
    expect(isAnagram('sakthi', 'sam')).toBe(false);
  });

  it('should return false, if given inputs are not anagram', () => {
    expect(isAnagram('Award', 'Reward')).toBe(false);
  });
  it('should return false, if given input strings are not anagram', () => {
    expect(isAnagram('Match', 'Watch')).toBe(false);
  });

  it('should return true, if given inputs are anagram', () => {
    expect(isAnagram('Listen', 'Lensit')).toBe(true);
  });
  it('should return true, if given strings are anagram', () => {
    expect(isAnagram('aaa', 'aaa')).toBe(true);
  });
});
