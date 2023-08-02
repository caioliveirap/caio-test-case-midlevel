/** QUESTION 1: Simple calculator
 * Create a calculator that takes two numbers and an operator (+, -, *, /)
 * and returns the result of the operation.
 */

//Time complexity: O(1)
//Space complexity: O(1)
/**
 * Receives two numbers and a specific operation, then returns the corresponding result.
 * @param  number1 - FIRST NUMBER
 * @param  number2 - SECOND NUMBER
 * @param  operator - CAN BE -, +, *, or /
 * @returns - RETURN TRUE OR FALSE
 */
function calculator(number1, number2, operator) {
  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      if (number2 !== 0) {
        return number1 / number2;
      } else {
        return "Error: Cannot divide by zero";
      }
    default:
      return "Operation not allowed!";
  }
}

console.log("5 * 2 = ", calculator(5, 2, "*"));
console.log("7 + 9 = ", calculator(7, 9, "+"));
console.log("16 / 4 = ", calculator(16, 4, "/"));
console.log("15 - 3 = ", calculator(5, 2, "-"));
