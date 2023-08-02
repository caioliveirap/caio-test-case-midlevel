/** QUESTION 2: Prime Numbers
 * Write a function that checks whether a number is prime or not.
 * Then create a program that prints the first 10 prime numbers.
 */

//Time complexity: O(n)
//Space complexity: O(1)
/**
 * Divide the number received from parameter from each one, if the rest of the division
 * is zero, it means the number is not prime
 * @param  number - NUMBER TO BE CHECKED
 * @returns - RETURN TRUE OR FALSE
 */
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(5)); // true
console.log(isPrime(6)); // false
console.log(isPrime(13)); // true

//Time complexity: O(n²)
//Space complexity: O(1)
function first10PrimeNumbers() {
  let count = 0;
  let iterations = 0;
  while (iterations != 10) {
    if (isPrime(count)) {
      console.log(count);
      iterations++;
    }
    count++;
  }
}
first10PrimeNumbers();

//BONUS
//Time complexity: O(sqrt(n))
//Space complexity: O(1)
/**
 * Numbers greater than sqrt(n) do not need to be checked because when n = a*b,
 * one of the two factors is smaller than sqrt(n).
 * @param  number - NUMBER TO BE CHECKED
 * @returns - RETURN TRUE OR FALSE
 */
function isPrimeOptimized(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < Math.ceil(Math.sqrt(number)); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
