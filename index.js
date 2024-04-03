const { consoleLog } = require("mocha/lib/reporters/base");

function isPalindrome(word) {
  word = word.toLowerCase();

  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]){
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/* 
  create a function that takes 1 string as an argument
    make sure the string consists of lowercase letters only

    create two variables that compares the characters at the start of the
    string to the characters at the end of the string

    compare the characters
      if they don't match(not a palindrome), return false

      if they do match(are a palindrome), return true

*/

/*
  The function isPalindrome takes one string that is meant to be a word. 
  It immediately converts all of the characters in the string to be lowercase
  for simplicity's sake, it makes it easier for comparing the characters against
  each other. Then i created two variables, left and right, to help look at the characters
  in front of the function as well as the end. Then i write a while statement that comapres
  the characters from the outside of the word, inward until it reaches the middle. Inside
  of the while statement there is an if statement. It compares the characters, and if it does
  not return a palindrome, it will return false. If it does return a palindrome, it will return 
  true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("hannah"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("civic"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("chase"));


}

module.exports = isPalindrome;
