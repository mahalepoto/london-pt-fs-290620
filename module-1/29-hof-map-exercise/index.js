// ============================================
// ALL IMPLEMENTATIONS SHOULD BE WITH {map} METHOD
// ============================================

/**
 * Exercise 1
 *
 * create an arrow function {convertToPositive} which takes
 * array of numbers, convert all negatives to positives and return
 * a new array.
 */
// let testArray = [1, 2, -5, 8, -4];
let convertToPositive = arrayOfNumbers => {

    return arrayOfNumbers.map(element => {
        if (element < 0) {
            element = (element -element) - element;
        } return element;
    })

}
// console.log(convertToPositive(testArray));

/**
 * Exercise 2
 *
 * create an arrow function {getAllNames} which will take
 * an array of users(objects) as parameter and return an
 * array on names
 *
 * Ex: getAllNames([
 *   {name: 'Alex', age: 26},
 *   {name: 'John', age: 25}
 * ]) will return ['Alex', 'John']
 */
// let testObj = [
//       {name: 'Alex', age: 26},
//       {name: 'John', age: 25}
//     ] testing

let getAllNames = users => {
    return users.map((el) => {
        return el.name;
    })
}
// console.log(getAllNames(testObj)); testing


/**
 * Exercise 3
 *
 * create a function {greetAll} that takes array of names as a parameter
 * and return a new array of greetings "Hi, {name}!"
 */
// let testArray = ["Alex", "John", "Mimi"]; testing 

let greetAll = arrayOfNames => {
    return arrayOfNames.map(element => {
        return `Hi, ${element}!` // OR return 'Hi, ' + element + '!';
    })    
}
// console.log(greetAll(testArray)); testing

/**
 * Exercise 4
 *
 * create a function {multiplyAllNumbers} that takes an array as a param
 * and multiply all numbers inside array by 5 and return the whole array
 * with multiplied numbers
 */
// let testing = ["Alex", "John", 5, "Mimi", 3]; testing

let multiplyAllNumbers = numbers => {
   return numbers.map(el => {
       if (typeof el !== 'string') {
        return el * 5;
       } return el;
    })
}
// console.log(multiplyAllNumbers(testing)); testing