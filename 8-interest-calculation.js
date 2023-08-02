/** QUESTION 8: Interest Calculation
 * Create a function that calculates the final value of an investment based
 * on initial capital, interest rate, and investment time (in months).
 * The program must prompt the user for these values and display the final value.
 */

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Time complexity: O(n)
//Space complexity: O(1)
/**
 * Display the average grade based on the given grades
 * @param  initialCapital - INITIAL CAPITAL OF INVESTIMENT
 * @param  interestRate - PERCENTAGE FROM 1 TO 100 YEARLY
 * @param  investmentTimeMonths - INVESTIMENT TIME IN MONTHS
 * @returns - FINAL VALUE
 */
function interestRateCalculation(
  initialCapital,
  interestRate,
  investmentTimeMonths
) {
  const monthlyInterestRate = interestRate / 100 / 12;
  const finalValue =
    initialCapital * Math.pow(1 + monthlyInterestRate, investmentTimeMonths);
  return finalValue.toFixed(2);
}

function getUserInput() {
  readline.question("Enter the initial capital: ", (initialCapital) => {
    readline.question(
      "Enter the yearly interest rate (as a percentage): ",
      (interestRate) => {
        readline.question(
          "Enter the investment time (in months): ",
          (investmentTimeMonths) => {
            const finalValue = interestRateCalculation(
              parseFloat(initialCapital),
              parseFloat(interestRate),
              parseInt(investmentTimeMonths, 10)
            );
            console.log("The final value of the investment is:", finalValue);
            readline.close();
          }
        );
      }
    );
  });
}

getUserInput();
