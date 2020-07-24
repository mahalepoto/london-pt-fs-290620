/* ================ */
/* INLINE FUNCTIONS */
/* ================ */

/**
 * Exercise 1
 *
 * create an inline function {reverseArray} that takes array as a param
 * and return reversed array. If you don't pass any param,
 * use default value "[]", is you pass any other type than array
 * return a string "Please, pass correct type".
 */
let reverseArray = function (array=[]) { 
    if (Array.isArray(array)) {
        return array.reverse();
    }
    return 'Please, pass correct type';
}

/**
 * Exercise 2
 *
 * create an inline function {nextOddNum} that takes number as a param
 * and return next odd number.
 */
let nextOddNum = function(number) {
    if (number % 2 === 0) {
        return number +1;
    }
    return number + 2;
}
    // console.log(nextOddNum(7)); testing


/**
 * Exercise 3
 * 
 * create an inline function {isLessThan100} which should take 
 * 2 numbers as a param.
 * Given two numbers, return true if the sum of both numbers is 
 * less than 100. Otherwise return false.
 */
let isLessThan100 = function(num1, num2) {
    if (num1 + num2 < 100) {
        return true;
    }
    return false;
}
// console.log(isLessThan100(50,50)); testing

/**
 * Exercise 4
 * create an inline function {incrementBy5} which takes
 * a number as a param, add 5 and return the result.
 */
let incrementBy5 = function(number) { 
    return number += 5;
}
// console.log(incrementBy5(10)); testing


/**
 * Exercise 5
 * create a function {incrementAllBy5} which takes array
 * of numbers as a first param and a incrementor function as a second param.
 * Then apply incrementor function to each element in your array and 
 * return the result
 */


let incrementAllBy5 = function (array, incrementBy5) {
     let results = [];
    for (let element of array) {
        results.push (incrementBy5(element));
    }
     return results;
}

console.log(incrementAllBy5([1, 2,3,4], incrementBy5));
