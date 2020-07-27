// install and  import "readline-sync" npm package before you do exercises

/**
 * Exercise 1
 *
 * ask user for a name and assign a response to variable {name}
 */
const readLineSync = require('readline-sync');
let name = readLineSync.question('Enter your name');
// console.log(`Hi, ${userName}!`); testing



//===== DO NOT TOUCH THIS BLOCK =====
console.log(`Hi ${name}!`);
console.log("=====================");
console.log(`Let me do math for you!`);
console.log("=====================");
//===================================

/**
 * Exercise 2
 *
 * offer user to do some math, ask to provide a math symbol and
 * offer a few options: +, -, * or /
 * Save response to {selectedSymbol} variable.
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get correct symbol
 */


let doMaths = ['+', '-', '*', '/']   
    for (i = 0; i < doMaths.length; i++) {
        console.log((i+1) + ': ' + doMaths[i]);
    }


let letsDoMath = readLineSync.question('Choose a Math operation? ');
let selectedSymbol = 0;
for (i = 0; i < 100; i++) {
    if (typeof letsDoMath !== 'number' && letsDoMath > 4) {
        letsDoMath = readLineSync.question('Choose a Math operation? ');
    } else if (typeof letsDoMath === 'number' && letsDoMath < 4) {
            selectedSymbol = readLineSync.question('Choose a Math operation? ');
    }
}
let operation = selectedSymbol +1;
// console.log(operation); testing only


// taking input from user and doing maths accordingly

// math functions
let addition = (num1, num2) => num1 + num2;
let subtraction = (num1, num2) => num1 - num2;
let multiplication = (num1, num2) => num1 * num2;
let division = (num1, num2) => num1 / num2;

let number1 = parseInt(readLineSync.question('Pick a number for maths operation'));
let number2 = parseInt(readLineSync.question('Pick 2nd number for maths operation'));
// console.log(number1, number2); for testing only

// Calculation
let calculate = (num1, num2, operation) => {
    if (operation === 1) {
        return addition(num1, num2);
    } else if (operation === 2) {
        return subtraction(num1, num2);
    } else if (operation === 3) {
        return multiplication(num1, num2);
    } else {
        return division(num1, num2);
    }
}
let calculation = calculate(number1, number2, operation);
console.log('Result: ' + calculation);
console.log('number 1 is ' + number1);
console.log('number 2 is ' + number2);
console.log('operation is ' + operation);


    
/**
 * Exercise 3
 *
 * ask user for the first number and assign response to a variable {number1}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */

/**
 * Exercise 4
 *
 * ask user for the second number and assign response to a variable {number2}
 *
 * NOTE: if the user will respond with wrong value, ask again, until
 * you get a number
 */

/**
 * Exercise 5
 *
 * take numbers that user provided to you and do math based on user
 * selected symbol.
 *
 * show the result to the user
 */

// console.log("=====================");
// console.log(`Here you go, the result is ${result}`);
