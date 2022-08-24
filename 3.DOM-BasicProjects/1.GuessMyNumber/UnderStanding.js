// 'use strict';

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

//------- Manipulating and practicing "Guess my Number project":-----------------

// document.querySelector(); // gives the whole element which have the class/id passed in argument

// document.querySelector('#message'); // for id
// document.querySelector('.message'); // for class

// eg:
// console.log(document.querySelector('.message'));

// => Getting the text of element (More useful in projects)

// document.querySelector('.message').textContent; (Multiple . operator are excuted from left to right)

// console.log(document.querySelector('.message').textContent);

//---------DOM Manipulation------------------------------------------------

// (Selecting and Manipulating Elements using DOM)

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Hello';

// document.querySelector('.score').textContent = 69;
// document.querySelector('.number').textContent = 7;

// // from <input> element we expect 'value' property because it is provided later by user
// console.log(document.querySelector('.guess').value);

// // Manipulating the value
// document.querySelector('.guess').value = 14; // => Js wrote the value 14 for us in input field
// console.log(document.querySelector('.guess').value);

//----Now we'll see Handling the Click of Button--------------------------------

// We need to use EventListner => event is something which happens on page
// eg: key press, mouse click, mouse moving etc
// So, with event listner we can we wait for a event to happen then react to it.
// There are multiple ways for listening an event but
// using addEventListener() method: Most used and good practice

// 1. addEventListener(arg1,arg2)
//      arg1 = type_of_the_event or event name eg: click is the event name
//      arg2 = telling event listener what to do => sepcify reaction to the click event => function
//             this function will be called event handler (eventListner() function expects this in it's
//             argument)
//  => In below is example where we just displays the value of input field on console when we click
//     check button

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
});

// NOTE: We just defined the function in there and we didn't call it anywhere it's the
//       javascript engine who calls the function as soon as the event happens.
// => these functions would not be called as when js script is executed rather
//    they are called as soon as the event happens

// similarly with this function we can do some DOM manipulation too. eg:

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
//   document.querySelector('.message').textContent =
//     'Changing content when check clicked and click event happens';
// });

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);

  //   const guess = document.querySelector('.guess').value;
  //   console.log(guess); // value from <input> element is of type 'string'
  //   console.log(typeof guess);

  // Converting into number
  const guess = Number(document.querySelector('.guess').value);

  // if user checks without entring a number
  if (!guess) {
    document.querySelector('.message').textContent = '❌ No number entered';
  }
});

// Implementing game logic now => see script file of this folder now (you'll understand the code)

//---------Now Changing Styles with DOM Manipulations-------------------------------

// - Using document.querySelector() => grab and element or class or id you want to style
//   then using .style apply any style you wish
// - In CSS: background-color
// - In JavaScript: backgroundColor => (adapts camelcasing naming rule)
// - When manipulating style: always specify values in "string"
// - These styles we apply using DOM becomes inline styles as we are not applying using
//   any CSS file and instead directly in HTML elements

document.querySelector('body').style.backgroundColor = '#06b337';
document.querySelector('.number').style.width = '30rem';
