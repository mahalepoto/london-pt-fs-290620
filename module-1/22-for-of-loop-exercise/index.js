/* ===================================== */
/* For these exercises use "for of" loop */
/* ===================================== */

/**
 * Exercise 1
 *
 * create a function {getIntegersOnly} which takes an array
 * as a param, get all integers from this array and return
 * a new array with these integers. If there is no integers it should return
 * empty array.
 */
// const array = ["kitten", "panda"];
function getIntegersOnly(array) {
    let integerArray = [];
    for (let integer of array) {
            if (Number.isInteger(integer)) {
                // console.log(integer);
                integerArray.push(integer);
            }  
    } return integerArray;
}

// console.log(getIntegersOnly(array));
/**
 * Exercise 2
 * create a function {getEvenNumbers}, which takes an array of integers
 * and returns a new array with even numbers only, if there is no even
 * integers it should return an empty array
 */
// testing
// let param = [1, 7, 3, 13];
function getEvenNumbers(arrayTwo){
    let evenArray = [];
    for (let e of arrayTwo) {
        if (e % 2 === 0) {
            evenArray.push(e);
        }
    } return evenArray;
}
// console.log (getEvenNumbers(param)); testing

/**
 * Exercise 3
 *
 * create a function {getEvenNumbersFromMixedArray},
 * which takes an array of values with different types and returns
 * a new array with even numbers only, if there is no even integers it
 * should return an empty array
 */
 // for testing
//  const param = ["kitten", 34, "puppy", 12, "24", 64, 1, 5, 2, 8, "panda"];

function getEvenNumbersFromMixedArray(mixArray) {
    let elementsExtractedFromMixArray = [];
    for (let element of mixArray) {
        if (Number.isInteger(element) && element % 2 === 0) { 
            // element = element % 2 === 0;
            elementsExtractedFromMixArray.push(element);
        }
    } return elementsExtractedFromMixArray;
}
// console.log(getEvenNumbersFromMixedArray(param));
/**
 * Exercise 4
 * create a function {getOddNumbers}, which takes an array of integers
 * and returns a new array with odd numbers only, if there is no odd
 * integers it should return an empty array
 */
function getOddNumbers(array) {
    oddNumbersArray = [];
    for (let elements of array) {
        if (elements % 2 === 1) {
            oddNumbersArray.push(elements);
        }
    } return oddNumbersArray;
}

/**
 * Exercise 5
 * create a function {evenOddTransform} which takes
 * array of integers as a param. Take each integer
 * and if it's odd add 1, if it's even subtract 1
 *
 * If your param is [1,2,3,4,5] the result should be
 * [2,1,4,3,6]
 */
function evenOddTransform(array) {
    let evenOddArray = [];
    for (let elements of array) {
        if (elements % 2 === 1) {
            elements = elements + 1; 
        } else {
            elements = elements - 1;
        } evenOddArray.push(elements);
    } return evenOddArray;
}
