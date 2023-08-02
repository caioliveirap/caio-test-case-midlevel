/** QUESTION 4: Palindrome
 * Create a function that checks whether a word is a palindrome (that is,
 * whether it reads the same backwards and forwards). The program must ask
 * the user for a word and inform whether or not it is a palindrome.
 */

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Time complexity: O(n)
//Space complexity: O(1)
/**
 * Return if the word is a palindrome ("It works exclusively with words")
 * @param  word - WORD TO CHECK
 * @returns - RETURN TRUE OR FALSE
 */
function isPalindrome(word) {
  return word === word.split("").reverse().join("");
}

readline.question("Write a word and check if it is a palindrome: ", (word) => {
  if (isPalindrome(word)) {
    console.log(`Palindrome!`);
    readline.close();
    return;
  }
  console.log(`Not a palindrome!`);
  readline.close();
});
