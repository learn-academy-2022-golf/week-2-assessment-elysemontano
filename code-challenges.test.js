// ASSESSMENT 2: Coding Practical Questions with Jest

// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

describe("multByThree", () => {
  it("takes in an array of numbers and returns an array with all the numbers multiplied by 3.", () => {
    const numbersArray1 = [6, 7, 8, 9, 10]
    const numbers1Output = [18, 21, 24, 27, 30]
    const numbersArray2 = [24, 27, 30, 33, 36]
    const numbers2Output = [72, 81, 90, 99, 108]
    expect(multByThree(numbersArray1)).toEqual(numbers1Output)
    expect(multByThree(numbersArray2)).toEqual(numbers2Output)
  })
})

// ReferenceError: multByThree is not defined

// b) Create the function that makes the test pass.

// Pseudocode 
// Create a function called multByThree that takes in an array
// One parameter - array
// Iterate over array using .map so that we can modify each value in the array
  // Multiply each value by three
// Return mapped array

const multByThree = (array) => {
  return array.map(value => value * 3)
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.
