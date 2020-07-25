/**
 * Exercise 1
 *
 * create a function {noStrings} that takes an array
 * as a parameter and return an array but without strings
 */
// let test = ["kitten", 2, "puppy", ["pet"]];

let noStrings = mixArray => {
   return  mixArray.filter((el) => {
        if (typeof el !== 'string') {
            return el;
        }
    })
}
// console.log(noStrings(test));

/**
 * Exercise 2
 *
 * create a function {justStrings} that takes an array
 * as a parameter and return an array of strings by removing
 * every other type
 */
let justStrings = mixArray => {
    return mixArray.filter(el => {
        if (typeof el === 'string') {
            return el;
        }
    })
}
// console.log(justStrings(test));

/**
 * Exercise 3
 *
 * create a function {justStringsLongerThan5} that takes
 * an array as a parameter and return an array of strings
 * that are longer than 5 characters
 */
// let test = ["kitten", 2, "cat", ["pet"], "Coders In Hoods", 26]; testing

let justStringsLongerThan5 = mixArray => {
    return mixArray.filter(el => {
        if (typeof el == 'string' && el.length > 5) {
            return el;
        }
    })
}
// console.log(justStringsLongerThan5(test)); testing

/**
 * Exercise 4
 *
 * create a function {numbersMoreThan13} that takes
 * an array as a parameter and return an array of numbers
 * that are more than 13
 */
// let test = ["kitten", 2, { name: "Alex" }, 15, ["pet"], 26]

let numbersMoreThan13 = numbersArray => {
    return numbersArray.filter(el => {
        if (el > 13) {
            return el
        }
    })
}
// console.log(numbersMoreThan13(test)); testing

/**
 * Exercise 5
 *
 * create a function {objectsOnly} that takes
 * an array as a parameter and return an array of objects
 */

let objectsOnly = mixArray => {
   return  mixArray.filter(el => {
        if (typeof el === 'object') {
            return el
        }
     })
}
// console.log(objectsOnly(test)); testing

/**
 * Exercise 6
 *
 * create a function {truthyOnly} that takes
 * an array as a parameter and return an array of truthy values.
 * IMPORTANT: You still need to keep number 0.
 */
// let test = [
//     "kitten",
//     {},
//     0,
//     { name: "Alex" },
//     undefined,
//     NaN,
//     ["pet"],
//     "",
//     26,
//     false
// ];

let truthyOnly = mixArray => {
   return  mixArray.filter(el => {
        return el;
    })
}
// console.log(truthyOnly(test));
