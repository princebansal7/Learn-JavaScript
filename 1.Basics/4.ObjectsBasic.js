'use strict';

/*
------Array Example-----------------------

const infoArray = [
  "Prince",
  "Bansal",
  2022 - 1998,
  "Student",
  ["Moon Knight", "John", "Rick", "Morty"],
];

// we can identify array elememts by index number and not by some name.



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
console.table(infoObj); // nicely formatted table of object

console.log();

// Retrieving data from object using dot .
console.log(infoObj.fName);
console.log(infoObj.lName);
console.log(infoObj.age);
console.log(infoObj.Job);
console.log(infoObj.friends);

console.log();

// Retrieving data from object using [] : here in [], we can use expressions too, 
// which eventaully equals to keys

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

//-----------CHALLENGE-1--------------------------------------------------------

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



//--------Object Methods------------------------------------------------------

// We can use function expressions in Objects and they are called Methods
// We can use function declaraion in Objects as they give error

//EXAMPLE 1:

const info1 = {
  fName: "Prince",
  lName: "Bansal",
  birthYear: 1998,
  Job: "Student",
  friends: ["Moon Knight", "John", "Rick", "Morty"],
  isDriven: true,
  calAge: function (birthYear) {
    // function's 'birthYear' is diffrent from object's birthyear property
    return 2022 - birthYear;
  },

  // function calAge2(birthYear) { // ERROR
  //   return 2022 - birthYear;
  // },
};

// Accessing Objects Methods

console.log(info1.calAge()); // gives NaN, as we have to pass a value too (because we are not accessing the object's birthYear property)
console.log(info1.calAge(1991)); // using . (object info1 is calling the calAge method)
console.log(info1["calAge"](2002)); // using []


// EXAMPLE 2:
// How to use Object's property inside Object method ?
// JavaScript provides 'this', this is a keyword which points to that object itself

const info2 = {
  fName: "Prince",
  lName: "Bansal",
  birthYear: 1998,
  Job: "Student",
  friends: ["Moon Knight", "John", "Rick", "Morty"],
  isDriven: true,
  calAge: function () {
    // console.log(this); // will print info2 object, because info2 object is calling calAge() method
    return 2022 - this.birthYear;
  },
};

console.log(info2.calAge());


// EXAMPLE 3:
// We can Store age after calling calAge() once, so that we don't have to excute function again and again

const info3 = {
  fName: "Prince",
  lName: "Bansal",
  birthYear: 1998,
  Job: "Student",
  friends: ["Moon Knight", "Morty"],
  isDriven: true,
  calAge: function () {
    this.age = 2022 - this.birthYear; // we made new property age
    return this.age;
  },
};

console.log(info3.calAge());

console.log(info3.age); // now we directly call that age property
console.log(info3.age);
console.log(info3.age);

console.log(info3);


//-----EXERCISE-------------------

const info4 = {
  fName: "Prince",
  lName: "Bansal",
  birthYear: 1998,
  job: "Student",
  friends: ["Moon Knight", "Morty"],
  isDriven: true,
  calAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    const summary = `
    first name: ${this.fName},
    last name: ${this.lName},
    friends list: ${this.friends},
    Birth year: ${this.birthYear},
    Job Status: ${this.job},
    Age: ${this.calAge()},
    Knows How to Drive: ${this.isDriven}`;

    return summary;
  },
};

console.log(info4.getSummary());

*/

//-------CHALLANGE-2------------------------------------

const marcInfo = {
  name: 'Marc Spectre',
  mass: 78,
  height: 1.69,
  calBmi: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const jackInfo = {
  name: 'Jack Lockley',
  mass: 92,
  height: 1.95,
  calBmi: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

let ans;
if (marcInfo.calBmi() > jackInfo.calBmi()) {
  ans = `${marcInfo.name}'s (${marcInfo.BMI}) is higher than  ${jackInfo.name}'s (${jackInfo.BMI}) !`;
} else {
  ans = `${jackInfo.name}'s (${jackInfo.BMI}) is higher than  ${marcInfo.name}'s (${marcInfo.BMI}) !`;
}

console.log(ans);
