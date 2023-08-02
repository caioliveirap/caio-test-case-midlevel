/** QUESTION 7: Grade Average
 * Create a program that takes a student's grades in three different subjects
 * and calculates the average of the grades. Then display the calculated average.
 */

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Time complexity: O(n)
//Space complexity: O(1)
/**
 * Display the average grade based on the given grades
 * @param  grades - LIST OF GRADES
 * @returns - NOTHING
 */
function calculateAverage(grades) {
  const totalGrades = grades.reduce((sum, grade) => sum + grade, 0);
  const average = totalGrades / grades.length;
  console.log("Average grade:", average.toFixed(2));
}

//Time complexity: O(n)
//Space complexity: O(n)
/**
 * Return the average grade based on array of grades and number of subjects received
 * @param  index - INDEX OF START
 * @param  arrOfGrades - LIST OF GRADES
 * @param  numberOfSubjects - NUMBER OF SUBJECTS
 * @returns - RETURN AVERAGE OF GRADE
 */
function readGrades(index, arrOfGrades, numberOfSubjects) {
  if (index === numberOfSubjects) {
    readline.close();
    calculateAverage(arrOfGrades);
    return;
  }

  readline.question(`Input the grade for subject ${index + 1}: `, (grade) => {
    arrOfGrades.push(Number(grade));
    readGrades(index + 1, arrOfGrades, numberOfSubjects);
  });
}

const numberOfSubjects = 3;
const arrOfGrades = [];

readGrades(0, arrOfGrades, numberOfSubjects);
