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
  // filling typesArray
  //   typesArray[i] = typeof info[i]; // WAY-1
  typesArray.push(typeof info[i]); // WAY-2
}

console.log(typesArray);

*/

// EXERCISE

const years = [1998, 1999, 2005, 2015];
const ages = [];

for (let i = 0; i < years.length; i++) {
  let age = 2022 - years[i];
  ages.push(age);
  //   ages.push(2022 - years[i]);
}
console.log(ages);
