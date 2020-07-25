// Examples
/**
 * with Inline function callback
 *
 * const callback = () => {}
 * array.foreach(callback)
 */


/**
 * with anonymous function callback
 *
 * array.foreach(arrayItem => {})
 */

/* ======================== */
/* external callback version */
/* ======================== */

/**
 * Exercise 1
 * create an arrow function {forEachCallback} that takes
 * param and logout it.
 *
 * create a function {logAllWithExternalCallback} that will take an array
 * and with forEach log every element from your array
 * use {forEachCallback} as a callback function for forEach
 */
// let anArray = [1, 2,3,4, 'Mushtaq']; testing

let forEachCallback = (param) => console.log(param);
let logAllWithExternalCallback = function (array) {
    array.forEach(forEachCallback);
}
// console.log(logAllWithExternalCallback(anArray));


/* =========================== */
/* anonymous callbacks version */
/* =========================== */
/**
 * Exercise 1(a)
 * create a function {logAllWithAnonymousCallback} which will
 * do same thing as {logAllWithExternalCallback} but with
 * anonymous callback
 */

let logAllWithAnonymousCallback = (data) => {
    data.forEach(el => console.log(el))
}    
// logAllWithAnonymousCallback([2, 4]); testing

/**
 * 
 *
 * Exercise 2
 *
 * create a arrow function {dividableBy3} that takes an array
 * of numbers as a param. With forEach, filter it and return a new
 * filtered array what will contain only numbers that dividable by 3
 * without remainder
 *
 * Ex: dividableBy3([3,7,9,11]) => return [3,9]
 */
// let arrayOfNumbers = [3,7,9,11];
let dividableBy3 = arrayOfNumbers => {
    let result = [];
    arrayOfNumbers.forEach((element) => {
        if (element % 3 === 0) {
            result.push(element);
        } 
       
    }) 
    return result;
}
// console.log(dividableBy3(arrayOfNumbers)); testing

/**
 * Exercise 3
 * create an arrow function {oddNumbersSum} which takes an array
 * of numbers and return sum of all odd numbers.
 *
 * Use forEach to loop through the array.
 */
// let testArray = [3, 11, 28, 4, 9];

let oddNumbersSum = arrayOfNumbers => {
    let oddNumbers = 0;
    arrayOfNumbers.forEach((element) => {
        if (element % 2 === 1) {
            
            oddNumbers += element;
        }
    })
    return oddNumbers;
}
// console.log(oddNumbersSum(testArray));

/**
 * Exercise 4
 * create an arrow function {totalLength} which takes an array
 * with different types. You need to get only strings and return
 * total of their lengths.
 *
 * Use forEach to loop through the array.
 *
 * Ex: ["cat", 5, "dog"] => 6
 */
// let testArray = ['dog', 2, 'cat', {name: 'Alex'}];

let totalLength = mixTypeArray => {
    let stringsLength = 0;
    mixTypeArray.forEach(elementsMixTypeArray => {
        if (typeof elementsMixTypeArray === "string") {
            stringsLength += elementsMixTypeArray.length;
        }
    })
    return stringsLength;
}
// console.log(totalLength(testArray));