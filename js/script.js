// 1.- Age check

let age = Number(prompt("Enter your age"));

if (age >= 18) {
    console.log("You are old enough to drive")
    alert("You are old enough to drive")
} else {
    age = 18 - age
    console.log("You are left with " + age + " to drive")
    alert("You are left with " + age + " to drive")
}

// 2.- Compare ages

let myAge = 19;
let yourAge = Number(prompt("Enter your age"));

if (yourAge < myAge) {
    myAge = myAge - yourAge;
    console.log("I am " + myAge + " years older than you")
} else if (yourAge == myAge) {
    console.log("You are as old as me")
} else {
    yourAge = yourAge - myAge;
    console.log("You are " + yourAge + " years older than me")
}

// 3.- a vs b

//IF ELSE
let a = 4;
let b = 3;

if (a < b) {
    console.log(a + " is less than " + b)
} else if (a > b) {
        console.log(a + " is bigger than " + b)
} else {
    console.log("Values are the same")
}

//Ternary Operators
let condition = a > b;
condition
? console.log(a + " is bigger than " + b)
: console.log(a + " is smaller than " + b)


// 4.- Check season

let autumn = ["september", "october", "november"];
let winter = ["december", "january", "february"];
let spring = ["march", "april", "may"];
let summer = ["june", "july", "august"]

let season = prompt("What season is it?", "Enter a month");
season = season.toLowerCase();

//IFS
if (autumn.includes(season)) {
    console.log("The season is Autumn")
} else if (winter.includes(season)) {
    console.log("The season is Winter")
} else if (spring.includes(season)) {
    console.log("The season is Spring")
} else if (summer.includes(season))  {
    console.log("The season is Summer")
}

//TERNARIO
autumn.includes(season) 
? console.log("The season is Autumn")
: winter.includes(season)
? console.log("The season is Winter")
: spring.includes(season)
? console.log("The season is Spring")
: summer.includes(season)
? console.log("The season is Summer")
: console.log("Enter a correct month")

// 5.- Grades

let calificacion  = Number(prompt("What is your grade?", "Write your grade"));

calificacion >= 80 && calificacion <= 100
? console.log("Your grade is A")
: calificacion >= 70 && calificacion <= 89
? console.log("Your grade is B")
: calificacion >= 60 && calificacion <= 69
? console.log("Your grade is C")
: calificacion >= 50 && calificacion <= 59
? console.log("Your grade is D")
: calificacion >= 0 && calificacion <= 49
? console.log("Your grade is F")
: console.log("Insert a correct grade");

