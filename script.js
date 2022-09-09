/* VALUES AND VARIABLES

let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log("23");

let firstName = "Kimbo";
// let first = "Kimbo"
// let firstNamePerson
// let first_name_person


console.log(firstName);
console.log(firstName);
console.log(firstName);

// let 3years = 3; (illegal character) (Can only contain numbers, letters, underscores or $)

let Kimbo_Cinny = "27";
let _$function = "27";
// let new = "kim"; (error due to bc of reserved keyword "new")

//let name = "kimbo"
// never call variables "name" - still a legal keyword but don't do

//let Person = "kimboooo"
// don't do - we use uppercase for specific use

let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "teacher";

//make variables descriptive

console.log(myFirstJob);
*/


/* DATA TYPES

let javascriptIsFun = true;
console.log(javascriptIsFun)

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Kimbo");

javascriptIsFun = "Yes!"
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1994;
console.log(typeof year);

console.log(typeof null);



let age = 30;
age = 31;

const birthYear = 2002;
// birthYear = 2004;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Heng";
console.log(lastName);


// Math Operators
const now = 2037;
const ageJonas = now - 1991
const ageKimbo = now - 2002
console.log(ageJonas, ageKimbo);

console.log(ageKimbo * 2, ageKimbo / 2, 2 ** 3);
// 2** 3 means 2 to tthe power of 3 = 2 * 2 * 2

const firstName = "Kimbo";
const lastName = "Cinny";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 + 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison Operators
console.log(ageJonas > ageKimbo); // >, <, >=, <=
console.log(ageKimbo >= 18);

const isFullAge = ageKimbo >= 20;


console.log(now - 1991 > now - 2002)



const now = 2037;
const ageJonas = now - 1991
const ageKimbo = now - 2002

console.log(now - 1991 > now - 2002);

//console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);
const averageAge = (ageJonas + ageKimbo) / 2
console.log(ageJonas, ageKimbo, averageAge);



*/

const firstName = "Kimbo"
const job = "Senior Ops Rep"
const birthYear = 2002;
const year = 2022

const kimbo = "I'm " + firstName + ', a ' + (year - birthYear) + " years old " + job + "!"
console.log(kimbo);

const kimboNew = `I'm ${firstName}, a ${year - birthYear}, year old ${job}!`;
console.log(kimboNew);

console.log(`Just a regular string`);

console.log(`String with \n\
multiple \n\
lines`)

console.log(`String
multiple
lines`);
















