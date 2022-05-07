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
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean('John'));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 0;
if (money){
    console.log(("Don't spend it all ;"));
}
else{
    console.log("You Should get a Job!")
}

let height;
if(height){
    console.log("Height is defined!")
}
else{
    console.log("Height is not defined!")
}
*/

//EQUALITY OPERATOR == VS ===
/*
const age = 18;
if(age===18)
console.log("You just became an adult:D (strict)")

    if(age==18)
    console.log("You just became an adult:D (loose)")


    const favourite = Number (prompt("What is your favourite number?"));
    console.log(favourite)
    console.log(typeof favourite)

    if (favourite===23){console.log("cool! 23 is a favorite number.")}
    else if(favourite===7){
        console.log("7 is a cool number!")
    }
    else if(favourite===14){
        console.log("14 is a cool number!")
    }
    else{
        console.log("23,7,14 are not cool!")
    }

    if(favourite !== 23)console.log("Why not 23!")*/

//   //LOGICAL OPERATORS 
//     const hasDriverLicense = true;
//     const hasGoodVision = true;
    // console.log(hasDriverLicense && hasGoodVision)
    // console.log(hasDriverLicense || hasGoodVision)
    // console.log (!hasGoodVision)

    // if(hasDriverLicense && hasGoodVision){
    //     console.log('Sana is able to drive')
    // }
    // else{
    //     console.log("Someone else will drive.")
    // }

    // const iTired = true;
    // console.log(hasDriverLicense && hasGoodVision && !iTired)

    //CHALLENGE 3   

       /* const dolphinScore1 = 96
        const dolphinScore2 = 108
        const dolphinScore3 = 89
        const averageAgeScoreDolphin  = (dolphinScore1+dolphinScore2+dolphinScore3)/3;
        console.log(averageAgeScoreDolphin)

        const koalasScore1 = 88
        const koalasScore2 = 91
        const koalasScore3 = 110
        const averageAgeScoreKoalas = ((koalasScore1+koalasScore2+koalasScore3)/3)
        console.log(averageAgeScoreKoalas)

        if(averageAgeScoreDolphin>averageAgeScoreKoalas){
            console.log("Winner is Dolphin.")
        }
         else if(averageAgeScoreDolphin===averageAgeScoreKoalas)
         {
             console.log("The match is Draw")
         }
         else if (averageAgeScoreDolphin<averageAgeScoreKoalas){
             console.log("Winner is Koalas")
         }
         */

       /* const dolphinScore1 = 97
        const dolphinScore2 = 112
        const dolphinScore3 = 101
        const averageAgeScoreDolphin  = (dolphinScore1+dolphinScore2+dolphinScore3)/3;
        console.log(averageAgeScoreDolphin)

        
        const koalasScore1 = 109
        const koalasScore2 = 95
        const koalasScore3 = 106
        const averageAgeScoreKoalas = ((koalasScore1+koalasScore2+koalasScore3)/3)
        console.log(averageAgeScoreKoalas)
        
        if(averageAgeScoreDolphin>averageAgeScoreKoalas && averageAgeScoreDolphin>=100){
            console.log("Winner is Dolphin.")
        }
         else if(averageAgeScoreDolphin===averageAgeScoreKoalas && averageAgeScoreDolphin>=100 && averageAgeScoreKoalas>=100)
         {
             console.log("The match is Draw")
         }
         else if (averageAgeScoreDolphin<averageAgeScoreKoalas && averageAgeScoreKoalas>=100)
             console.log("Winner is Koalas")

         }
         else{console.log("No one Wins The Trophy")}*/


         //SWITCH STATEMENT
        /*
         const day = "Wednesday"
         switch(day){
             case "Monday":
                 console.log("Hello its Monday");
                 console.log("Hey! Monday...");
                 break;
             case "Tuesday":
                    console.log("Hello its Tuesday");
                    console.log("Hey! Tuesday...");
                  break;    
            case "Wednesday":
                   
            case "Thursday":
                    console.log("Hello its Thursday");
                    console.log("Hey! Thursday...");
                    break;
            case "Friday":
                    console.log("Hello its Friday");
                    console.log("Hey! Friday...");
                    break;
            case "Saturday":
                    console.log("Hello its Saturday");
                    console.log("Hey! Saturday...");
                    break;
            case "Sunday":
                    console.log("Hello its Sunday");
                    console.log("Hey! Sunday...");
                    break;  
            default:
                    console.log("Not a valid day")   
         }
         */

         // CONDITIONAL(TERNARY) OPERATOR

         // const age = 18;
        //  age>=18?console.log("I'like to drink.."):console.log("I'like to eat")

        // const drink = age>=18?"Wine":"Water";
        // console.log(drink) 

        // console.log(`I'll like to drink ${age>=18?"Wine":"Water"}`)

        //Challenge 4
        
        //const bill =275
        // const tip = .15 * 275
        // console.log(tip)
        // if (bill>=50 && bill<=300){bill*0.15 }
        // else{bill * 0.20}
        // const tip = (bill>=50 && bill<=300)?bill *0.15:bill*0.20
        // console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}   `)

        //ASSIGNMENT :

        // 1 values and variables:

       /* let country = "India";
        let continent = "Asia";
        let population = 13;
        console.log(country)
        console.log(continent)
        console.log(population)*/

        // 2 Data types:
       // let language ;
        //let isIsland = false;
        /*let language ;
        console.log(typeof (isIsland));
        console.log(typeof(language));
        console.log(typeof(population));
        console.log(typeof(country));*/
     
        //3 let const and var :
       // language = 'Hindi';
       /* language = 'Hindi';
        const country = "India";
        const continent = "Asia";
        const isIsland = false;
        isIsland = true; */

        //4 Basic operatos:

      /* console.log(population / 2);
       population++;
       console.log(population)
       console.log(population > 6);
       console.log(population < 33);*/

      //const description =  country + "is in " + continent + " and its " + population + " million people speak " + language; 
         
            //5 string and template

     /*   const description = `${country} is in ${continent} and its ${population} million people speak ${language} `
      
        console.log(description)*/

        //6 Taking decision if else statement:
/*
        if (population>33){
            console.log("India's population is above average")
        }
        else{
            console.log(`${country}'s population is ${33-population} million below average`)
        }*/
        //7 Type Conversion and Coercion:

       /* console.log('9'-'5')
        console.log('19' - '13' + '17')
        console.log('123' < 57)
        console.log(5 + 6 + '4' + 9 - 4 - 2)*/

        //8 Equality Operators: == vs. === :
          
        // Number to prompt helps to prevent bugs
        /*
        const numNeighbours = Number(prompt('How many neighbour countries does your country have ?'));
        if (numNeighbours === 1){
            console.log("Only 1 border!")
        }
        else if(numNeighbours>1){
            console.log('More than 1 border')
        }
        else{
            console.log('No borders')
        }
*/

// 9 Logicsl operators:
    //let language = 'english';
   /* let isIland = true;
    let population = 13;
    if(language === 'English' && population < 50 && !isIland ){
         console.log(`you should live in Callifornia`)
    }
    else{
        console.log(`you should not live in callifornia`)}*/
    
// 10 Switch statement :
/*
switch(language){
    case 'chinese':
    case 'mandarin':    
        console.log('MOST number of native speakers!')
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers')
        break;
    case 'english':
        console.log('3rd place in number of native speakers')
        break;
    case 'hindi':
        console.log('4th place in number of native speakers')
        break;
    case 'arabic':
        console.log('5th place in number of native speakers')
        break;
    default:
        console.log('Great language too :D')
}
*/

// 11 Conditional or Ternary operator:

/*let population = 138;
population>33 ? console.log(`India's population is above average'`) : console.log(`India's population is below average'`)
  

  */      
       
     
        









       
