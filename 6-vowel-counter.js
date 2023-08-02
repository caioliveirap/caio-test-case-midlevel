/** QUESTION 6: Vowel Counter
 * Create a function that counts the number of vowels in a string.
 * The program should ask the user for a sentence and display how many vowels it has.
 */

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Time complexity: O(n)
//Space complexity: O(1)
/**
 * Return the corresponding amount of vowels in a string
 * @param  sentence - SENTENCE TO BE COUNTED
 * @returns - RETURN NUMBER OF VOWElS
 */
function countVowels(sentence) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of sentence) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

readline.question("Input a sentence to count it's vowels: ", (sentence) => {
  console.log("Number of vowels: ", countVowels(sentence));
  readline.close();
});
