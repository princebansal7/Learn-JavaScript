"using strict";

/*
------Array Example-----------------------

const infoArray = [
  "Prince",
  "Bansal",
  2022 - 1998,
  "Student",
  ["Moon Knight", "John", "Rick", "Morty"],
];
// we can just array elememts by index number and not by some name.



//-----Objects---------------------------------

// 1. It have Key-Value pairs
// 2. Keys are also called properties
// 3. Order of values doesn't matter when we are retrieving them unlike arrays

// infoObj have 5 properties or keys
const infoObj = {
  fName: "Prince",
  lName: "Bansal",
  age: 2022 - 1998,
  Job: "Student",
  friends: ["Moon Knight", "John", "Rick", "Morty"],
};
console.log(infoObj);

console.log();

// Retrieving data from object using .
console.log(infoObj.fName);
console.log(infoObj.lName);
console.log(infoObj.age);
console.log(infoObj.Job);
console.log(infoObj.friends);

console.log();

// Retrieving data from object using [] : here in [], we can use expressions too, which eventaully equals to keys

console.log(infoObj["fName"]);
console.log(infoObj["lName"]);
console.log(infoObj["age"]);
console.log(infoObj["Job"]);
console.log(infoObj["friends"]);

// Expression in [], Doesn't work with .

const nameKey = "Name";
console.log(infoObj["f" + nameKey]);
console.log(infoObj["l" + nameKey]);

// console.log(infoObj."l" + nameKey);  ERROR
//=> when we have to compute propertie name , use [], else use .

// Used Case Example:

const interest = prompt(
  "What to know about PRINCE ? Type from: fName,lName,age,Job,friends"
);
console.log(interest);

// if we access invalid key or value => undefined value
alert(infoObj[interest]);

if (infoObj[interest]) {
  console.log(infoObj[interest]);
} else {
  console.log("Accessing Invalid key or value => undefined value");
}


//-----Adding values to Object----------------------------------------------

const info = {
  fName: "Prince",
  lName: "Bansal",
  age: 2022 - 1998,
  Job: "Student",
  friends: ["Moon Knight", "John", "Rick", "Morty"],
};
console.log(info);

//Using .
info.location = "India";

//Using []
info["Insta"] = "@princebansal_";

console.log(info);

// CHALLENGE
// print: Prince has 4 friends, But his best friend is Rick.
//    PS: Prince,4,Rick , you have to extract from info object !

// WAY-1
const frnd = info["friends"];
console.log(
  `${info.fName} has ${frnd.length}, But his Best Friend is ${frnd[2]}`
);

// WAY-2 (. and [] => member access and computed member access have left to right associativity and both have very high (20) precedence)
console.log(
  `${info.fName} has ${info.friends.length}, But his Best Friend is ${info.friends[2]}`
);

*/

//--------Object Methods------------------------------------------------------
