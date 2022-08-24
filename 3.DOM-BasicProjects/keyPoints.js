'use strict';

/*
 AUTHOR: @princebansal_

  1. This file contains various DOM (Document Object Model) methods sequentially as used along with the projects
     to understand the DOM Manipulation.
  2. DOM != JavaScript 
     => DOM methods and properties are not part of JavaScript (so, don't confuse DOM as JavaScript)
     => In Actual,
        DOM methods and properties are part of Web APIs (Application programming Interface)

*/

//------------1.Getting HTML elements using JS--------------------------------------------------------

// document.querySelector(); // gives the whole element which have the class passed in argument

document.querySelector('.message'); // for class: Gives the Whole element containing that class/id

// document.querySelector('#message'); // for id

console.log(document.querySelector('.message'));

// Getting the text of element
document.querySelector('.message').textContent;

console.log(document.querySelector('.message').textContent);

//---------DOM Manipulation------------------------------------------------

// Modifying content using DOM

document.querySelector('.message').textContent = 'Hello';
