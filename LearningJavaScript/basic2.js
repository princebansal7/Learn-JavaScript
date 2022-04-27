"using strict";

/*  using Strict mode (No code except comments is allowed before it else won't activate)
    helps in wrting secure code which prevent bugs
    => 1. forbids us to do certain things in Code.
       2. Creates visible errors in developer's console (very helpful in debugging)
       3. shows error if we use future reserved words (acc to strict mode) as variables eg: interface, private etc
       4. 
*/

// FUNCTIONS---------------------------------------------------------------------------------------------------------------

/*Type-1

function printName() {
  console.log("My Name is Prince Bansal");
}
printName();
printName();
*/

//Type-2

function fruitJuice(apple, orange) {
  console.log(`Apples are ${apple} and Oranges are ${orange}`);
  const juice = `Juice is made of ${apple} Apples and ${orange} Oranges`;
  return juice;
}

// console.log(juice);  error

const gotJuice = fruitJuice(5, 2);
console.log(gotJuice);

console.log(fruitJuice(7, 1));
