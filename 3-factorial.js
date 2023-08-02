/** QUESTION 3: Factorial
 * Write a function to calculate the factorial of a number. Next, create
 * a program that allows the user to enter a number and displays the
 * corresponding factorial.
 */

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Time complexity: O(n)
//Space complexity: O(1)
/**
 * Return the factorial of the number
 * @param  number - NUMBER
 * @returns - RETURN FACTORIAL
 */
function factorial(n) {
  let factorial = 1;
  for (let i = n; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}

//Time complexity: O(n)
//Space complexity: O(1)
/**
 * Return the factorial of the number (it uses recursion)
 * @param  number - NUMBER
 * @returns - RETURN FACTORIAL
 */
function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

readline.question(
  "Write a number to display its correspondent factorial: ",
  (number) => {
    if (isNaN(number)) {
      console.log("Error: Invalid input type!");
      readline.close();
      return;
    }
    console.log(`Result for ${number}!: ${factorial(number)}`);
    readline.close();
  }
);
