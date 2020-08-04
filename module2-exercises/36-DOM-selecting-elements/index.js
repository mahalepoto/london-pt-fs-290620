/**
 * Exercise 1
 *
 * select p tags with getElementsByTagName and assign it
 * to variable {paragraphs}
 */

let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);


/**
 * Exercise 2
 * select the first p tag with getElementsByTagName and assign it
 * to variable {firstParagraph}
 */
let firstParagraph = document.getElementsByTagName("p")[0];
// console.log(firstParagraph);
/**
 * Exercise 3
 *
 * create a function {logAllParagraphs} and with forEach
 * to log each paragraph from {paragraphs}
 *
 * ATTENTION: check the type of {paragraphs} before doing forEach
 */
// console.log(typeof paragraphs); output = object

let logAllParagraphs = () => {
    let paragraph = [...paragraphs];
      paragraph.forEach((item, index) => {
       console.log(item);
   }) 
}
    logAllParagraphs();


/**
 * Exercise 4
 *
 * select all elements with class "text" with getElementsByClassName
 * and assign it to variable {textElements}
 */
let textElements = document.getElementsByClassName("text");
// console.log(textElements);

/**
 * Exercise 5
 *
 * select all elements that have classes "text" and "green"
 * with getElementsByClassName and assign it to variable {greenText}
 */
let greenText = document.getElementsByClassName("text green");
// console.log(greenText);
/**
 * Exercise 6
 *
 * select element where id is 'textId-3'(use getElementById) and assign it
 * to variable {thirdText}
 */
let thirdText = document.getElementById("kitten");
// console.log(thirdText);

/* ==================================================== */
/*                  querySelector section               */
/* ==================================================== */
// !!! For this section use querySelector or querySelectorAll only !!!
let displayLi = document.querySelectorAll("li");
console.log(displayLi)
/**
 * Exercise 7
 *
 * select the fourth "li" element and save it to {fourthListElement} variable
 */
let fourthListElement = document.querySelector("ul :nth-child(4)");
console.log(fourthListElement);

/**
 * Exercise 8
 *
 * select all "li" elements and save it to {listElements} variable
 */
let listElements = document.querySelectorAll("li");

/**
 * Exercise 8
 *
 * select all "a" elements that are inside "ul" and assign it {listLinks}
 */
let listLinks = document.querySelectorAll("ul > li a");
console.log(listLinks);

/**
 * Exercise 9
 *
 * select elements where the "data-community-name" attribute
 * is "codersinhoods" and assign it {communityElements}
 */
// last of its test failing
let communityElements = document.querySelectorAll("dataset-community-name");
console.log(communityElements);

/**
 * Exercise 10
 *
 * select all elements with class "test" and assign it to a variable
 * {elementsForTesting}
 */
let elementsForTesting = document.querySelectorAll(".test");

/**
 * Exercise 11
 *
 * select the element with id "test-5" and assign it to a variable
 * {fifthTest}
 */
let fifthTest = document.querySelector("#test-5");
console.log(fifthTest);

/**
 * Exercise 12
 *
 * select all the elements which are siblings of an element
 * with the class "links" and assign it to a variable {nextElements}
 */
let nextElements = document.querySelectorAll(".links ~ *");
console.log(nextElements);