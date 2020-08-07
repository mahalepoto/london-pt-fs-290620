// OPEN index.html IN YOUR BROWSER
// OPEN DEV TOOLS, OPEN THE CONSOLE TAB
// CALL YOUR FUNCTIONS IN THE CONSOLE TO
// TEST YOUR CHANGES

/**
 * Exercise 1
 * create a function {setTitle} which takes a string as an argument
 * and displays it in the h1
 */
let h1 = document.querySelector("h1");
console.log(h1);
let setTitle = (title) => {
    let h1 = document.querySelector("h1");
    h1.innerText = title;
    console.log(title);
}
// setTitle("Ahmed");

/**
 * Exercise 2
 * create a function {appendToTitle} which takes a string as an argument
 * and appends it to existing h1 text
 */
let appendToTitle = (title) => {
    let h1Text = document.createTextNode(title);

    h1.append(title);
}
// appendToTitle(" Sindhi");

/**
 * Exercise 3
 * create a function {prependToTitle} which takes a string as an argument
 * and prepends it to existing h1 element text
 */
let prependToTitle = (text) => {
    let prependText = document.createTextNode(text);
    h1.prepend(text)
}
// prependToTitle('Mushtaq ');

/**
 * Exercise 4
 * create a function {setInnerHTMLForDiv} which takes a tag name and text as
 * arguments and uses innerHTML to create an element inside the div, and the
 * text is displayed inside that element. The element should be tag name
 * passed into the function
 */
let grabDiv = document.querySelector("div");
// let setInnerHTMLForDiv = (tagName, text) => {
//     let subTag = document.createElement(tagName);
//     subTag.innerText = text;
//     grabDiv.append(subTag);
// } 
// setInnerHTMLForDiv("span", "Hello"); // One way to get dynamically creating tag and its text 

// required way
let setInnerHTMLForDiv = (tagName, text) => {
    grabDiv.innerHTML = `<${tagName}>${text}</${tagName}>`
}
setInnerHTMLForDiv('span', "I am a new tag");

/**
 * Exercise 5
 * create a function {pushPtoDivWithText} which takes a string as an argument
 * and uses innerHTML to add a p tag containing the text into the div
 */
let pushPtoDivWithText = (str) => {
    
    grabDiv.innerHTML += `<p>${str}</p>`;
     
} 
pushPtoDivWithText("Hi again");
/**
 * Exercise 6
 *
 * create a function {setSrcToImage} which takes a url and image description
 * as arguments and set it as a src and alt attributes values
 * for existing img
 */
let setSrcToImage = (url, alt) => {
    let image = document.querySelector("img");
    image.src = `${url}`;
    image.alt = `${alt}`;
}
setSrcToImage();


/**
 * Exercise 7
 *
 * create a function {setCodersInHoodsLink} which takes 2 arguments, a URL
 * and some text
 *
 * Find the a tag in the page, set the href to the URL and display the text
 *
 * Also add an attribute that opens your page in a new tab
 */
let aTag = document.querySelector("a");
let setCodersInHoodsLink = (url, text) => {
    aTag.href = `${url}`;
    aTag += " target = '_blank'";
    aTag.innerText = text;
    

     
}
setCodersInHoodsLink("www.google.co.uk", "Search your heart-out");
/**
 * Exercise 8
 *
 * create a function {disableResetBtn} which will disable button
 * with class "reset"
 */
let disableResetBtn = () => {
    let disableButton = document.querySelector(".reset").disabled = true;
    
}
// disableResetBtn();

/**
 * Exercise 9
 *
 * create a function {disableBtns} which takes class name as an argument
 * and disable all buttons with this class name
 */
let disableBtns = document.querySelectorAll(".submit").disabled = true;
// let disableBtns = (className) => {
    //`${className}`
// }
// disableBtns("submit");

/**
 * Exercise 10
 *
 * create a function {addClassToLi} which adds the class
 * "list_item_$" (where $ is a position in a list) to each li
 * that is inside the ul with the class "list"
 *
 * NOTE: We've added some CSS so when your classes are added,
 * you will see a difference
 */

/**
 * Exercise 11
 *
 *  create a function {removeListItemClass} which removes the class
 * "list_item" from all li elements with this class
 */

/**
 * Exercise 12
 *
 *  create a function {addId} which takes 2 arguments: an id and
 * a CSS selector. Use to selector to find an element, then add
 * the id to the element
 */

/**
 * Exercise 13
 *
 *  create a function {setStyles} which takes 3 arguments
 * 1 - a CSS property name,
 * 2 - property value,
 * 3 - a CSS selector
 *
 * use the selector to find all the elements which match, then
 * set the CSS property to the value
 */
