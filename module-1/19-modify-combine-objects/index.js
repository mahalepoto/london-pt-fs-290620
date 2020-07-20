/**
 * Exercise 1
 *
 * Create an object {user} and add properties "firstName" and "lastName".
 */
let user = {
  firstName: "Jasey",
  lastName: "Ahmed",
};

/**
 * Exercise 2
 *
 * Create an object {userRead} and add properties "books" and "newspapers".
 * Both should be arrays with strings.
 */
let userRead = {
  books: [],
  newspapers: [],
};

/**
 * Exercise 3
 *
 * extend {user} object with all properties from {userRead} object
 *
 * Note: if I modify {userRead} it shouldn't change {user} object
 *
 * Result should be:
 * user = {
 *   firstName: '',
 *   lastName: '',
 *   books: [],
 *   newspapers: []
 * }
 *
 */

// function to combine to objects together.
// function copyObjects(obj1, obj2) {

//     return  {
//       ...obj1,
//       ...obj2
//     }
//   }
// copyObjects(user, userRead);

let userReadCopy = userRead;
// console.log(userReadCopy);

user = {
  ...user,
  ...userReadCopy,
};
// test- modifying userRead object
userRead.books[0] = "book1";
// console.log(user);

/**
 * Exercise 4
 *
 * Create an object {userWatch} and add properties "tvShows" and "movies".
 * Both should be arrays with strings.
 */
let userWatch = {
  tvShows: ["show1", "show2"],
  movies: ["movie1", "movie2"],
};

/**
 * Exercise 5
 *
 * extend {user} object with new property "userWatch" and assign {userWatch} object
 * as a value.
 *
 * Note: if I modify {userWatch} it should change {user} object
 *
 * Result should be:
 * user = {
 *   firstName: '',
 *   lastName: '',
 *   books: [],
 *   newspapers: [],
 *   userWatch: {
 *     tvShows: [],
 *     movies: []
 *   }
 * }
 */
user = {
  ...user,
  userWatch,
};
// console.log(user);
