/*
let country = "United States";

let continent = "North America";

let population = "329 million";

console.log(country);
console.log(continent);
console.log(population);


let isIsland = false;

// let language
/*
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


language = "khmer";
const country = "United States";
const continent = "North America"
const isIsland = false;

*/


// BASIC OPERATORS ---------

let country = "United States";
let continent = "North America"
let language = "English";

// population of country I live in
let population = 329000000
//question 1 - divided into two ^
console.log(population / 2)

//question 2
population++;
console.log(population);

const finlandPop = 6000000
// question 3
console.log(population > finlandPop);

// question 4 average population of a country - more or less or my country?
const averagePop = 33000000
console.log(averagePop > population);

let description =
    country +
    " is in " +
    continent +
    " and its " +
    population +
    " people speak " +
    language;


console.log(description);

// CODING CHALLENGE #1
// next time use const bc you are not going to change value through out
let heightMark = 1.69;
let massMark = 78;
let heightJohn = 1.95;
let massJohn = 92;

let markBMI = (massMark / heightMark ** 2);
let johnBMI = (massJohn / (heightJohn * heightJohn));

markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);


let heightMark2 = 1.88;
let massMark2 = 95;
let heightJohn2 = 1.76;
let massJohn2 = 85;

let markBMI2 = (massMark2 / heightMark2 ** 2);
let johnBMI2 = (massJohn2 / (heightJohn2 * heightJohn2));

markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markBMI2, johnBMI2, markHigherBMI2);



console.log(`${country} is in ${continent} and its ${population} people speak ${language}!`)














