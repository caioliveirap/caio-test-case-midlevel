/** QUESTION 5
 * Create a program that receives a number from the user and displays
 * the table of that number, from 1 to 10.
 */

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Time complexity: O(n)
//Space complexity: O(1)
/**
 * Return the corresponding table from 1 to 10 of the given number
 * @param  number - NUMBER
 * @returns - RETURN TRUE OR FALSE
 */
function displayNumberTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
  }
}

readline.question("Input to display it's table: ", (number) => {
  displayNumberTable(number);
  readline.close();
});
