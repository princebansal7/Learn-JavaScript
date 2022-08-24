'use strict';
/*
const friend1 = "Steven Grant";
const friend2 = "Marc";
const friend3 = "Jake";

// 1.Array Data Structure in JavaScript

const friends = ["Steven Grant", "Marc", "Jake", "Khonshu", "Moon Knight"];
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);
console.log(friends[4]);
console.log(friends);

// Way-1
const years = [1998, 1999, 2008, 2022];
console.log(years[0]);
console.log(years[1]);
console.log(years[2]);
console.log(years[3]);
console.log(years);


//WAY-2
const year = new Array(1998, 1999, 2008, 2022);
console.log(year[0]);
console.log(year[1]);
console.log(year[2]);
console.log(year[3]);

console.log(year);
year[1] = 1969; // modifying Array => Arrays are mutable
year[3] = "Prince";

// year = ["prince", "bansal"]; ERROR, because const Array, if it was let or var, then would've worked

console.log(year);
console.log(year.length); // gives length of Array
console.log(year.length - 1); // gives last index
console.log(year[year.length - 1]);



// 2.Array can Store different type of values-------------------------------------------

const info = ["Prince", "Bansal", 24, 1690000.069, true, false];

const fName = info[0];
const lName = info[1];
const age = info[2];
const salary = info[3];
const sarcastic = info[4];
const married = info[5];

console.log(info);
console.log(typeof fName);
console.log(typeof age);
console.log(typeof salary);
console.log(typeof sarcastic);

// Array of Array-------------------------------------

const arrayMix = ["hello", info, 69 + 0];
console.log(arrayMix);
console.log(arrayMix.length);


// Excersice--------------------------------------------------

const getAge = function (birthYear) {
  return 2022 - birthYear;
};

const year = [1990, 1995, 1996, 1998, 2000, 2008, 2015, 2020];

console.log(getAge(year)); // won't work, NaN (Not a Valid Number)

console.log(getAge(year[0]));
console.log(getAge(year[1]));
console.log(getAge(year[2]));
console.log(getAge(year[3]));
console.log(getAge(year[4]));
console.log(getAge(year[5]));
console.log(getAge(year[6]));
console.log(getAge(year[7]));

console.log();

// cretaing new ages array
const ages = [
  getAge(year[0]),
  getAge(year[1]),
  getAge(year[2]),
  getAge(year[year.length - 1]),
];

for (let i = 0; i < ages.length; i++) {
  console.log(ages[i]);
}



// Basic Array Operations:-------------------------------------------------

const friends = ["Steven Grant", "Marc", "Moon Knight"];

// 1.push(arg) : inserts value at the end, and also returns length

friends.push("Elon Musk");

// can push multiple items too.
friends.push('Jai','ho','pinku');

let newLength = friends.push("Sherlock");
console.log(friends);
console.log(newLength);

// 2.unshift(arg) : inserts value at the beginning, and also returns length

newLength = friends.unshift("Ratan Tata");
console.log(friends);
console.log(newLength);

//3.pop() : removes element from the end, and it returns the removed element

friends.pop();
console.log(friends);
newLength = friends.pop();
console.log(friends);
console.log(newLength);

// 4. shift() :  removes element from the beginning, and it returns the removed element

friends.shift();
console.log(friends);
newLength = friends.shift();
console.log(friends);
console.log(newLength);

// 5. indexOf(arg) : returns the index of passed argument if present in array, else returns
//   -1 if not present

let index = friends.indexOf("Moon Knight"); // present at index 1 (as 0 based indexing)
console.log(index);

index = friends.indexOf("Prince"); // Not present => returns -1
console.log(index);

//6.includes(arg): ES6 , simply returns true if present, else returns false

console.log(friends.includes("Marc"));
console.log(friends.includes("Prince"));

// it checks with strict equality =>
friends.push(23); // array have 23 of type number
console.log(friends);
console.log(friends.indexOf("23")); // -1
console.log(friends.includes(23)); // true
console.log(friends.includes("23")); // we are searching 23 of type string => return false

// => helful in conditional statements

//eg:

if (friends.includes("Moon Knight")) {
  console.log("You are protector of Night Travelers");
} else {
  console.log("Call Avengers");
}

*/

// CHALLENGE (Based on Arrays)------------------------------------------------

const calTip1 = function (bill) {
  let tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
  return tip;
};

//                or

const calTip2 = bill =>
  bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

const bill = [125, 555, 44];
console.log(bill);

const tip = [calTip2(bill[0]), calTip2(bill[1]), calTip2(bill[2])];
console.log(tip);

// const total = bill + tip;  Useless, as treats as strings and concatenates

const total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];
console.log(total);
