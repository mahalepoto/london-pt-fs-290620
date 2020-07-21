/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 */
function logProperties(object) {
    for (let key in object) {
        console.log('Property name: ' + key);
    }
}   
/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */
function getAllValues(object) {
    let allValuesArray = [];
    for (let keys in object) {
        allValuesArray.push(object[keys]);
    } return allValuesArray;
}

/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */
function getAllValuesAsString(object) {
    let keyValuesAsString ='';
    for (let keys in object) {
        keyValuesAsString += ' ' + object[keys];
    } return keyValuesAsString.trim();
}
/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * 'PROPERTY: VALUE'
 */
// const obj = {
//     firstName: "Alex",
//     lastName: "Smith",
//     age: 25
// };

function propertyValueString(object) {
    
    for (let key in object) {
        let stringfying = key + ':' + ' '+ object[key];
        console.log(JSON.stringify(stringfying));
    }
}

// propertyValueString(obj);