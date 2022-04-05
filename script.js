/* // DATA TYPES
let javaScriptIsFun = true;  //Boolean 
console.log(javaScriptIsFun)

//typeof Operator

console.log(typeof javaScriptIsFun );
console.log(typeof 23);
javaScriptIsFun = "Yes!"
console.log( typeof javaScriptIsFun)

let year;
console.log(year);
console.log(typeof year);   //undefined 


year = 1999;
console.log(typeof year);

*/

// BASIC OPERATORS 

//Arithematic 
/*
const now = 2022;
const currentAge = now - 1999;
const nandiniCurrent = now - 2000;
console.log(currentAge, nandiniCurrent);

console.log(currentAge*2, nandiniCurrent/2);


const firstName = "Tanya";
const lastName = "Panchal";
console.log(firstName + ' ' +lastName);
*/

// Assignment

/* let x = 10+5;
 x+= 10;
 x*= 4;
 x++;
 x--;
 x--;
console.log(x);
*/

// Comparosion operator

/*const now = 2022;
const currentAge = now - 1999;
const nandiniCurrent = now - 2000;
console.log(currentAge, nandiniCurrent);
console.log(currentAge > nandiniCurrent); // <,>,<=,>=
console.log(nandiniCurrent<=18);

const averageAge = (currentAge + nandiniCurrent)/2;
console.log(currentAge, nandiniCurrent, averageAge)*/
/*
// CHALLENGE 1

let marksWeight = 78;
let marksHeight = 1.69;
let markBmi = marksWeight/marksHeight**2
console.log(markBmi)

let johnWeight = 92;
let johnHeight = 1.95;
let johnBmi = johnWeight/johnHeight**2;
console.log(johnBmi)

let markHeigherBMI = johnBmi < markBmi;
console.log(markHeigherBMI)

marksWeight = 90;
marksHeight = 1.88;
markBmi = marksWeight/marksHeight**2;
console.log(markBmi);

johnWeight = 85;
johnHeight = 1.76;
johnBmi = johnWeight/johnHeight**2;
console.log(johnBmi);

markHeigherBMI = johnBmi < markBmi;
console.log(markHeigherBMI)*/

// STRINGS AND TEMPLATE LITERALS
/*
const firstName = 'Tanya'
const job = 'Software Engineer'
const birthDate = 1999
const year = 2022

const tanya = "I'm "+ firstName + ", a "+ (year - birthDate)+ " years old " + job + "!";
console.log(tanya)


const tanyanew = `I'm ${firstName}, a ${year - birthDate} years old ${job}!` // Template literals
console.log(tanyanew)

console.log(`This is \n\ a multiple\n\ line\n\ String`)*/

// IF ELSE SATEMENT

/*const age = 19;
const isOldEnough = age >= 18;
if (isOldEnough){
    console.log(`Sana can Start driving License ✌ `)
}*/
/*
const age = 14;
 
if (age >= 18){
    console.log(`Sana can Start driving License ✌ `)
}

else{
    const yearsLeft = 18 - age;
    console.log(`Sana is too young wait another ${yearsLeft} years !`)
}

const birthYear = 2001;
let centuary;
if(birthYear <= 2000) {
    
    centuary = 20;
}
else {
    centuary = 21;
}
console.log(centuary)*/

//Challenge 2
/*
let marksWeight = 78;
let marksHeight = 1.69;
let markBmi = marksWeight/marksHeight**2
console.log(markBmi)

let johnWeight = 92;
let johnHeight = 1.95;
let johnBmi = johnWeight/johnHeight**2;
console.log(johnBmi)

let markHeigherBMI = johnBmi < markBmi;

if (markHeigherBMI){
    console.log(`Mark's BMI is higher than John's!`)
}
else{
    console.log(`John's BMI is higher than Mark's!`)
}

console.log(`Marks's BMI(${markBmi}) is higher than john's(${johnBmi})`)*/
/*
// TYPE CONVERSION AND TYPE COERCION


//Type conversion

const inputYear = "1999";
console.log(Number(inputYear) + 18)
console.log(Number("john"))
console.log(typeof NaN)

console.log(String(30))

//Type coercion

console.log("I'm" + 23 +"years old")
console.log ('23'-'10'-3);
console.log ('23'+'13'+3);
console.log('2'*'2')
console.log('22'/'2')


let n = '10'+1
n = n -1
console.log(n)
*/

// TRUTHY AND FALSY 

// 5 Falsy values: 0,'',undefined,null,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean('John'));
console.log(Boolean(null));
console.log(Boolean(NaN));





 





