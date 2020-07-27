// install and  import "readline-sync" npm package before you do exercises

const user = {};
/**
 * Exercise 1
 *
 * ask user for a first name and save response to {user.firstName}
 */
var rls = require('readline-sync');
const chalk = require('chalk');

let firstName = rls.question('Whats your first name?');
user.firstName = firstName



/**
 * Exercise 2
 *
 * ask user for a last name and save response to {user.lastName}
 */
let lastName = rls.question('Whats your last name?');
user.lastName = lastName;

console.log(`Hello ${user.firstName} ${user.lastName}!`);



/*
 * Exercise 3
 *
 * ask user for a age and save response to {user.age}
 */
let age = rls.question('How old are you?');
user.age = age



/*
 * Exercise 4
 *
 * ask user for a email and save response to {user.email}
 */
let email = rls.question('Whats your email');
user.email = email;
console.log(user);



/**
 * OPTIONAL:
 *
 * use "chalk" to print out user data with colours :)
 */


console.log(
  `Here what we have, your full name is ${chalk.redBright(user.firstName)} ${chalk.redBright(user.lastName)}. 
    You are ${chalk.blueBright(user.age)} and if we need to contact with you we can send 
    a letter to ${chalk.greenBright(user.email)} `
);
