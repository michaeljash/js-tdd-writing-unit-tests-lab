// Your tests here
const isPalindrome = require('./isPalindrome');

describe('isPalindrome', () => {
  it('should return true for palindromes', () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("level")).toBe(true);
    expect(isPalindrome("deified")).toBe(true);
  });

  it('should return false for non-palindromes', () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
    expect(isPalindrome("banana")).toBe(false);
  });

  it('should handle empty string', () => {
    expect(isPalindrome("")).toBe(true); 
  });

  it('should handle words with a combination of uppercase and lowercase letters', () => {
    expect(isPalindrome("Madam")).toBe(true);
    expect(isPalindrome("Eve")).toBe(true);
  });
});
