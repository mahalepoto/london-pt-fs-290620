/**
 * Exercise #1
 *
 * forEach(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is
 * passed each element and the index.
 *
 */ 
// let test1 = ["London", "Manchester", "Chicago", "Detroit", "Mumbai", 'Karachi'];  testing

let forEach = (array, callback) => {
    for(i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

// const myCallback = (el, i) => console.log(el, i) 
// forEach(test1, (el, i, arr) => console.log(el, i)); calling/invoking a callback function

/**
 * Exercise #2
 *
 * map(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * whatever was returned from each
 * time the callback was invoked.
 *
 */
let map = (array, callback) => {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        let newElementsAndIndex =  callback(array[i], i);
        newArray.push(newElementsAndIndex);
    }
    return newArray;
}
// map(test1, (el, i) => {
//     console.log(el, i);
// }) invoking call back on function of map

/**
 * Exercise #3
 *
 * filter(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * _only_ the elements for which the
 * callback returned a truthy value.
 *
 */
let test2 = [
        "kitten",
        {},
        0,
        { name: "Alex" },
        undefined,
        NaN,
        ["pet"],
        "",
        26,
        false
    ]; //testing 

let filter = (array, callback) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback (array[i], i)) {
            newArray.push (array[i]);
        }
    }
    return newArray;
}
// filter(test2, (el, i) => console.log(el, i)); invoking callback


/**
 * Exercise #4
 *
 * find(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _first element_
 * for which the callback returns a
 * truthy value.
 *
 */
let find = (arr, callback) => {
    
    for (i = 0; i < arr.length; i++) {
        if (callback(arr[i], i)) {
            return arr[i];
        }
    }
}
// find(test1, (el, i) => console.log(el)); testing

/**
 * Exercise #5
 *
 * findIndex(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _index of
 * the first element_ for which the
 * callback returns a truthy value.
 *
 */
let findIndex = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) {
            return i;
        }
    } 
}

/**
 * Exercise #6
 *
 * every(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if every time the
 * callback was invoked it returned
 * a truthy value.
 *
 */
let every = (array, callback) => {
    for (i = 0; i < array.length; i++) {
       if (!callback(array[i], i)) {
            return false;
       } 
    } return true;
}

// every(test1, (element, index) => console.log(element));

// version one
// let every = (array, callback) => {
//     let counter = 0;
//     for (i = 0; i < array.length; i++) {
//        if (callback(array[i], i)) {
//           counter += 1;
//        } 
//     } 

//     return counter === array.length;
// }

// version two
// let every = (array, callback) => {
//     for (i = 0; i < array.length; i++) {
//        if (!callback(array[i], i)) {
//           return false;
//        } 
//     } 

//     return true;
//}

/**
 * Exercise #7
 *
 * some(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if _any_ time the
 * callback was invoked it returned
 * a truthy value.
 *
 */
let some = (arr, callback) => {
    for (i = 0; i < arr.length; i++) {
        if (callback(arr[i], i)) {
            return true;
        }
    } return false;
}

/**
 * Exercise #8
 *
 * reduce(array, callback, initialValue)
 *
 * Reduce is often used for combining
 * values together.
 *
 * `reduce` should take 3 arguments:
 * `array`, `callback` and `initialValue`.
 *
 * The callback is invoked for every
 * element in the array and is passed
 * **the current cumulative value**,
 * each element and the index. Whatever
 * the callback returns is the new
 * cumulative value. The function
 * should return the final cumulative
 * value.
 *
 */
// let testArr = [2, 3, 4, 5]; testing

let reduce = (array, callback, initialValue) => {
    let accum = initialValue === undefined ? 0 : initialValue;
    for (i = 0; i < array.length; i++) {
        accum = callback(accum, array[i], i, array)
        
    } return accum;
}
// let result = reduce(testArr, (accumulator, currentValue) => accumulator + currentValue);
// console.log(result); testing