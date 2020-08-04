// // Experiments
// console.dir(document);

// console.log(document.url);
// console.log(document.domain);
// console.log(document.doctype); // doctype [object DocumentType] ? 
// console.log(document.head); // head [object HTMLHeadElement] ?
// console.log(document.body); // grab body [object HTMLBodyElement] ?
// console.log(document.all); // grab all HTML collection [object HTMLAllCollection] ? this should show HTML collection of DOM by its index
// // // then you can grab it accordingly eg:- console.log(document.all[5])
// console.log(document.all[15]);

// // console.log('grab all forms/form tags ' + document.forms); // logs all form tags (if any) 
// // console.log('grab all links ' + document.links); // logs all links (if any)
// // console.log('grab all images ' + document.images); // logs all images (if any)

// // SELECTORS 
// //Example:- "getElementById", getElementsByTagName, getElementByClassName
// // getElementById
// document.getElementById('textId-1');
// // grabbing the text content of an element
// let textOne = document.getElementById('textId-1'); 
// //setting it to 'Hello'
// textOne.textContent = 'Hello'
// // also we can do. The difference bt textContent and innerText is that "innerText" pays attention to style. 
// textOne.innerText = 'Hello'