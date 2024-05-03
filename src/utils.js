function isPalindrome(word) {
    const lowercaseWord = word.toLowerCase();
    
    return lowercaseWord === lowercaseWord.split('').reverse().join('');
  }
  
  module.exports = isPalindrome;
  