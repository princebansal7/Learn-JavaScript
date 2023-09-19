'use strict';

/*  using Strict mode (No code except comments is allowed before it else won't activate)
    helps in wrting secure code which prevent bugs
    => 1. forbids us to do certain things in Code.
       2. Creates visible errors in developer's console (very helpful in debugging)
       3. Shows error if we use future reserved words (acc to strict mode) as variables
          eg: interface, private etc
*/

// FUNCTIONS---------------------------------------------------------------------------------

/*____Type-1____________

function printName() {
  console.log("My Name is Prince Bansal");
}
printName();
printName();
_____________________*/

/*_____Type-2____________________________________

function fruitJuice(apple, orange) {
  console.log(`Apples are ${apple} and Oranges are ${orange}`);
  const juice = `Juice is made of ${apple} Apples and ${orange} Oranges`;
  return juice;
}

// console.log(juice);  // error, as juice variable is inside the function

const gotJuice = fruitJuice(6, 9);
console.log(gotJuice);

console.log(fruitJuice(7, 1));

__________________________________________________*/

/*_____TYPE-3_____________________________________________________

// Function Declaration (function can be called before declaring)

function getAge(birthYear) {
  return 2022 - birthYear;
}
const age1 = getAge(1998);
console.log(age1);

// Anonymous Function (function without name) or Function Expression (they only can be called after writing function expression)

const getAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = getAge2(2000); // **when calling, have to pass arguments too
console.log(age2);

// (above diffrence we saw between 'function declaration' and 'function expression' happens due to "Hoisting", we'll learn later)

__________________________________________________________________*/

/*_____Type-4 (Arrow Functions, added in ES6)____________________________

//  1. Arrow Function (shorter way to write Function Expression)
//  2. Arrow function do not get 'this' keyword (we'll learn Later)

// below I wrote 'Function Expression' (just to relate with Arrow functions)

const getAge2 = function (birthYear) {
  return 2022 - birthYear;
};

//EXAMPLES:
// eg1: (One liner Arrow function)
// implicitally returns the value for 1 argument , no need to write it in paranthesis on argument when only 1 argument is passed

const getAge3 = birthYear => 2022 - birthYear;   
const age3 = getAge3(1990); // when calling, have to pass arguments too
console.log("Present age is: " + age3);


// eg2: (Multiple liner Arrow function)
// we have to return the value using return => explicitally returns the value, and also have to write function code in curly braces

const yearUntilRetirement1 = (birthYear) => {
  const presenAage = 2022 - birthYear;
  const retireAge = 65 - presenAage;
  return retireAge;                       
};
const retirementYearLeft1 = yearUntilRetirement1(1990);
console.log("Years left till retirement: " + retirementYearLeft1);

// eg3:(Parameterised Arrow function)

const yearUntilRetirement2 = (firstName, lastName, birthYear) => {
  const presenAage = 2022 - birthYear;
  const retireAge = 65 - presenAage;
  return `Hello ${firstName} ${lastName}, years until retirement left: ${retireAge}`;
};

const info = yearUntilRetirement2("Prince", "Bansal", 1998); // when calling, have to pass arguments too
console.log(info);

console.log(yearUntilRetirement2("Wolvrine", "bhaisab", 1980));

_______________________________________________________________________________________*/

/* __Reviewing functions and function calling other functions______________________________

// this 'birthYear' is local to this getAge function and different from next function

const getAge = function (birthYear) {
  return 2022 - birthYear;
};

// this 'birthYear' is local to yearUntilRetirement function

const yearUntilRetirement = function (birthYear) {
  const presentAage = getAge(birthYear);
  const retireAge = 65 - presentAage;

  if (retireAge > 0) {
    return retireAge;
  }
  console.log("Your Are Retired !");
  return -1;
};

console.log(yearUntilRetirement(1949));

_____________________________________________________________________*/

//_________ Challenge-1 (Functions based)________________________________

const calAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins > 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (2 * avgDolphins < avgKoalas) {
    console.log(`Koalas win (${avgDolphins} vs ${avgKoalas})`);
  } else {
    console.log(`No Team Wins... DRAW! (${avgDolphins} vs ${avgKoalas})`);
  }
};

// TEST-1
// let DolphonScore = calAvg(44, 23, 71);
// let KoalaScore = calAvg(65, 54, 49);
// checkWinner(DolphonScore, KoalaScore);

//TEST-2
DolphonScore = calAvg(85, 54, 41);
KoalaScore = calAvg(23, 34, 27);
checkWinner(DolphonScore, KoalaScore);
