// install and  import "readline-sync" npm package before you do exercises
const readlineSync = require("readline-sync");
const chalk = require("chalk");
// const log = console.log();

let selectedItems = {
  book: "",
  movie: "",
  nextTrip: "",
};

const movies = [
  "The Invisible Man",
  "Never Rarely Sometimes Always",
  "Gretel & Hansel",
  "No time to die",
  "Bloodshot",
  "Onward",
  "Sonic",
];

const books = [
  "My Dark Vanessa",
  "Uncanny Valley",
  "Weather",
  "The night watchman",
  "All adults here",
  "Dear Edward",
  "Grown ups",
];

const countries = [
  "Italy",
  "France",
  "Germany",
  "Spain",
  "Portugal",
  "Denmark",
  "Netherland",
  "United Kingdom",
  "Pakistan",
];
// console.log('1: ' + Object.keys({movies})[0])
// console.log('2: ' + Object.keys({books})[0])
// console.log('3: ' + Object.keys({countries})[0])
// let userPicked = readlineSync.question("Please select a option");
// console.log(userPicked); test

const displayOptions = (option) => {
  let list = 0;
  let optionKeys = 0;
  while (optionKeys < option.length) {
    list = optionKeys + 1 + ": " + option[optionKeys];
    console.log(list);
    optionKeys++;
  }
};
// Function calls for user options
// let subBooks = displayOptions(books);
// let subMovies = displayOptions(movies);
// let subCountries = displayOptions(countries);

/**
 * Exercise 1
 *
 * create a sub menu "Books" where you need to render a list of {books}.
 * User should be able to select one. On selection store the response
 * to {user.book}.
 *
 * NOTE: You need to add option to go back, to main menu
 */


let subBooks = displayOptions(books);
// console.log(subBooks);
let userPicked = readlineSync.question("Please select a Book by its number");
let userResponse = 0;
// function to validate the response

let validation = (userInput) => {
  //   console.log("userInput " + userInput + " type is " + typeof userInput); test
  for (i = 0; i < books.length; i++) {
    if (typeof userInput === "number" && userInput <= books.length) {
      userResponse = userInput;
    } else if (userInput !== "number" && userInput > books.length) {
      userInput = readlineSync.question("Please select a Book by its number");
      // console.log("inside else if " + userInput); test
    }
    userResponse = userInput;
  }
};

validation(userPicked);
// console.log('userResponse: ',userResponse);
//test logs
// console.log("user picked " + userPicked + ' type is ' + typeof userPicked);
// console.log("user response " + userResponse + ' type is ' + typeof userResponse);
// console.log('books length ' + books.length);
// function selection
let userChoose = books[userResponse - 1];
selectedItems.book = userChoose;
// let selection = (userResponse) => {
//   for (let i = 0; i < books.length; i++) {
//     userChoose = books[userResponse - 1];
//   }
// };
// selection(userResponse);
console.log(chalk.blue("user choose " + userChoose));
/**
 * Exercise 2
 *
 * create a sub menu "Movies" where you need to render a list of {movies}.
 * User should be able to select one. On selection store the response
 * to {user.movie}.
 *
 * NOTE: You need to add option to "go back", to main menu
 */
// calling function to show movie list
let subMovies = displayOptions(movies);
// asking user to select movie
userPicked = readlineSync.question("Please select a Movie by its number");
// validating user input
validation(userPicked);

// saving user input
userChoose = movies[userResponse - 1];
selectedItems.movie = userChoose;
// logging user selection of movies;
console.log(chalk.red("user choose " + userChoose));

/**
 * Exercise 3
 *
 * create a sub menu "Next destination" where you need to render a list
 * of {countries}. User should be able to select one. On selection store
 * the response to {user.nextTrip}.
 *
 * NOTE: You need to add option to go back, to main menu
 */
// calling function to show countries list
let subCountries = displayOptions(countries);
// asking user to select country
userPicked = readlineSync.question("Please select a Country by its number");
// validating user input
let validationCountries = (userInput) => {
  // console.log("userInput " + userInput + " type is " + typeof userInput); test
  for (i = 0; i < countries.length; i++) {
    if (typeof userInput === "number" && userInput <= countries.length) {
      userResponse = userInput;
    } else if (userInput !== "number" && userInput > countries.length) {
      userInput = readlineSync.question(
        "Please select a country by its number"
      );
      // console.log("inside else if " + userInput); test
    }
    userResponse = userInput;
  }
};
validationCountries(userPicked);
// saving user input
userChoose = countries[userResponse - 1];
selectedItems.nextTrip = userChoose;
// logging user selection of countries;
console.log(chalk.green("user choose " + userChoose));

/**
 * Exercise 4
 *
 * create a top menu with categories: "Books", "Movies", "Next destination"
 * so user can pick one. User also should have the option "Exit".
 * When the user pick "Exit", log selected items.
 */

const topMenu = () => {
  const categories = ["Books", "Movies", "Next destination"];
  let categoryIndex = readlineSync.keyInSelect(
    categories,
    "Choose your option"
  );
  let toMatchIndex = categoryIndex + 1;
  console.log("categories index " + toMatchIndex); // for testing only

};

topMenu();
// displaying books
const renderBooksList = () => {
	const selectedBookIndex = readlineSync.keyInSelect(
	  [...books, "Go to main menu"],
	  "Please select a Book by its number"
	);
	console.log('selected book index ' + selectedBookIndex);	
	if (selectedBookIndex !== books.length) {
	  selectedItems.book = books[selectedBookIndex - 1];
	} else {
	  topMenu();
	}
  };
console.log(renderBooksList());

// displaying movies
const renderMoviesList = () => {
	const selectedMoviesIndex = readlineSync.keyInSelect(
	  [...movies, "Go to main menu"],
	  "Please select a Book by its number"
	);
	console.log('selected movies index ' + selectedMoviesIndex);	
	if (selectedMoviesIndex !== books.length) {
	  selectedItems.movies = movies[selectedMoviesIndex - 1];
	} else {
	  topMenu();
	}
  };
console.log(renderMoviesList());

// displaying countries
const renderCountriesList = () => {
	const selectedCountriesIndex = readlineSync.keyInSelect(
	  [...countries, "Go to main menu"],
	  "Please select a Book by its number"
	);
	console.log('selected movies index ' + selectedCountriesIndex);	
	if (selectedCountriesIndex !== countries.length) {
	  selectedItems.countries = countries[selectedCountriesIndex - 1];
	} else {
	  topMenu();
	}
  };
console.log(renderCountriesList());





// My old too much code lol 
//   if (toMatchIndex == 1) {
//     console.log("exit is " + exit);
//     displayOptions(books);
//     userPicked = readlineSync.question("Please select a Book by its number");
//     validation(userPicked);
//     userChoose = books[userResponse - 1];
//     console.log("user choose index " + userChoose);
//     exit == userChoose ? topMenu() : console.log(chalk.greenBright(userChoose));
//   } else if (toMatchIndex == 2) {
//     displayOptions(movies);
//     userPicked = readlineSync.question("Please select a movie by its number");
//     validation(userPicked);
//     userChoose = movies[userResponse - 1];
//     console.log(chalk.greenBright(userChoose));
//   } else if (toMatchIndex == 3) {
//     displayOptions(countries);
//     userPicked = readlineSync.question("Please select a country by its number");
//     validationCountries(userPicked);
//     userChoose = countries[userResponse - 1];
//     console.log(chalk.greenBright(userChoose));
//   } else {
//     topMenu();
//   }