/*_____________________________________________________________________


var:   1. function scoped => available everywhere in which function it is defined 
       2. if not defined in function => becomes global scoped &
          var varibles can be redefined with the same name again.
       3. we can use 'var' defined variables before defining them.
          example:
                  console.log(x);
                  var x;
                (above program lines won't generate error, and shows x as undefined)
      4. var is old way to declare variables, before ES6

let, const: (block scoped, available only the blocks they are defined, like c,c++ variables) introduced
            in ES6.
        NOTE:
             const doesn't let us change the value of variable. But it allows to let us change the
             different properties
             of const value.
             eg: const obj = {name: "Prince"};
                 obj.name = "Bansal"; // allowed 

                 but 

                 obj = 29; or obj = {val:"69"}; // ERROR
                 
Some other key Points:-

 === Strict equality operator(doesn't do Type Coercion / Conversion)
 == loose quality operator (do Type Coercion / Conversion)

prompt() -> takes input from user, and input type is string

*/

/*___________Challege 1_________________________________

// let markMass = 95;
// let johnMass = 85;
// let markHeight = 1.88;
// let johnHeight = 1.76;

let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;


let markBmi = markMass / (markHeight ** 2);
let johnBmi = johnMass / (johnHeight * johnHeight);

let heigherBmi = markBmi > johnBmi;

console.log(markBmi, johnBmi, heigherBmi);

_________________________________________________________*/

/*________________________________________________________________________
//            Template Strings

let myName = 'Prince';
let job = 'Student';
const YEAR = 2022;
let birthYear = 1998;

// Template Strings
let newVar = `Myself ${myName}, I'm a ${job} and I'm ${YEAR - birthYear} old!`;
console.log(newVar);
console.log(`Normal Template Ola's String....`);

console.log("Multiple Lines\nstrings\nbefore ES6 !");

console.log(`Multiple
line strings
after ES6`);

//-------------Challenge-2------------------------------------------

let markMass = 78;
let johnMass = 62;
let markHeight = 1.69;
let johnHeight = 1.25;


let markBmi = markMass / (markHeight ** 2);
let johnBmi = johnMass / (johnHeight * johnHeight);

let ans;
if (markBmi > johnBmi) {
    ans = `Marks's (${markBmi}) is higher than John's (${johnBmi}) !`;
    console.log(ans);
}
else {
    ans = `John's (${johnBmi}) is higher than Mark's (${markBmi}) !`;
    console.log(ans);
}

________________________________________________________________________*/

/*------------Challenge-3----------------------------------------

const Dm1 = 97;
const Dm2 = 112;
const Dm3 = 101;

const Km1 = 109;
const Km2 = 95;
const Km3 = 106;

const score = 100;
let AvgD = (Dm1 + Dm2 + Dm3) / 3;
let AvgK = (Km1 + Km2 + Km3) / 3;

console.log(`Average of Dolphins: ${AvgD}`)
console.log(`Average of Koalas: ${AvgK}`);

if (AvgD > AvgK && AvgD >= score)
    console.log("Dolphins Won!");
else if (AvgK > AvgD && AvgK >= score)
    console.log('Koalas Won!');
else if (AvgD === AvgK && AvgD >= score && AvgK >= score)
    console.log('Match Draw!!');
else
    console.log("No Winner!!");

*/
//---------------Challenge-4--------------------------------------------------------

// const bill = 275;
const bill = 40;
// const bill = 430;
let tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
