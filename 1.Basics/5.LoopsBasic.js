'use strict';
//----------JavaSrcipt Loops---------------------------------------------------

/*          for Loop

for (let i = 1; i <= 10; i++) {
  console.log("Milk Glass " + i);
}

console.log();

for (let i = 1; i <= 10; i++) {
  console.log(`Milk Glass ${i}`);
}


// Loops and Array

const info = [
  true,
  "Prince",
  "Bansal",
  2022 - 1998,
  1690000.069,
  [1, "69 is My College Roll number"],
];

for (let i = 0; i < info.length; i++) {
  console.log(info[i], "=>", typeof info[i]);
}

console.log();

// Creating new array from given array

const typesArray = [];
for (let i = 0; i < info.length; i++) {
  //   filling typesArray
  //   typesArray[i] = typeof info[i]; // WAY-1
  typesArray.push(typeof info[i]);     // WAY-2
}

console.log(typesArray);


// EXERCISE

const years = [1998, 1999, 2005, 2015];
const ages = [];

for (let i = 0; i < years.length; i++) {
  let age = 2022 - years[i];
  ages.push(age);
  //   ages.push(2022 - years[i]);
}
console.log(ages);



//-------CONTINUE & BREAK Statement----------------------------

const info1 = [
  69,
  true,
  "Prince",
  2022 - 1998,
  1690000.069,
  "Bansal",
  [1, "69 is My College Roll number"],
];

console.log("-----ONLY Strings--------");

for (let i = 0; i < info1.length; i++) {
  if (typeof info1[i] != "string") {
    continue; // skips iteration if other than string type encountered
  }
  console.log(info1[i], "=>", typeof info1[i]);
}

console.log("-----Break when Number found--------");

for (let i = 0; i < info1.length; i++) {
  if (typeof info1[i] != "number") {
    break; // terminates the loop if other than number type encountered
  }
  console.log(info1[i], "=>", typeof info1[i]);
}



//------Looping Backwards--------------------------------

const info2 = [
  "Prince",
  "Bansal",
  2022 - 1998,
  1690000.069,
  [1, "69 is My College Roll number"],
];

for (let i = info2.length - 1; i >= 0; i--) {
  console.log(i, info2[i]);
}


//------Loop inside Loop (Nested Loops)--------------------

for (let out = 1; out < 4; out++) {
  console.log(`Outside ${out}`);
  for (let inside = 1; inside < 6; inside++) {
    console.log(`----Inside ${inside}`);
  }
}


//----------WHILE Loop-----------------------------------------

let i = 1;
while (i <= 10) {
  console.log(`value of ${i}`);
  i++;
}


// EXAMPLE (when loop doesn't depend counter value)

let dice = Math.floor(Math.random() * 6) + 1; // Generates random value from 1 to 6

console.log(`Number on Dice is ${dice}`);

while (dice !== 6) {
  dice = Math.floor(Math.random() * 6) + 1;
  console.log(`Number on Dice is ${dice}`);
}

*/

//---------CHALLANGE----------------------------

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calTip = bill =>
  bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

for (let i = 0; i < bills.length; i++) {
  tips.push(calTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log('Bills: ' + bills);
console.log('Tips: ' + tips);
console.log('Totals: ' + totals);

// ---BONUS EXERCISE-----------------------

// const num = [1, 2, 3, 4, 5.5];

const calAvg = function (totals) {
  let sum = 0;
  for (let i = 0; i < totals.length; i++) {
    sum += totals[i];
  }
  return sum / totals.length;
};

console.log(`Average of Total array: ${calAvg(totals)}`);
