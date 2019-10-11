// Setting and Swapping Exercise - DOES THIS CHANGE COUNT?
var myNumber = 42;
var myName = "Dewane";
var storeValue = "";
var i;
storeValue = myNumber;
myNumber = myName;
myName = storeValue;

console.log(myName + " " + myNumber);
/*
// END Setting and Swapping Exercise

// Print -52 to 1066 
for ( i=-52; i<=1066; i++ ) {
    console.log(i);
}
// END Print -52 to 1066 

// Don’t Worry, Be Happy 
function beCheerfull () {
    console.log("Good morning!");
}

for (i=1; i<=98; i++) {
    beCheerfull();
}
// END Don’t Worry, Be Happy 

//Multiples of Three – but Not All 
for (i=-300; i <= 0; i++) {
    if ( i % 3 == 0 && i !== -3 && i !== -6) {
        console.log(i);
    }
}
//END Multiples of Three – but Not All 

//Printing Integers with While 
var i = 2000;

while (i<5280) {
    console.log(i);
    i++
}
//END Printing Integers with While 

//You Say It’s Your Birthday 
var numberOne = 1;
var numberTwo = 2;

if (numberOne && numberTwo) {
    console.log("How did you know?");
}else{
    console.log("Just another day.......");
}
//END You Say It’s Your Birthday 

// Leap Year 
var year = 1732;

function LeapYear (year) {
    if ((year % 4 == 0 || year % 400 == 0) && year % 100 != 0) {
        console.log("Leap Year is here");
    } else {
        console.log("It's not a leap year :( ");
    };
}
LeapYear(year);
//END  Leap Year 

// Print and Count
var count = 0;

for ( i=512; i<=4096; i++ ) {
    if (i % 5 == 0) {
        count++;
    console.log(i + " " + count);
    }
}
// END Print and Count

// Multiples of Six 
var i = 0;

while (i <= 60000) {
    if ( i%6 == 0) {
        console.log(i);
    }
    i++;
}
//END  Multiples of Six 

//Counting, the Dojo Way 
for (i=1; i<=100; i++) {
    if (i % 5 == 0 && i % 10 !== 0 ) {
        console.log("Coding");
    }else if (i % 10 == 0) {
        console.log(i + " Dojo");

    } else {
        console.log(i);        
    }
}
//END Counting, the Dojo Way 

//What Do You Know? 
function myFunction (incoming) {
    console.log(incoming);
}
//END What Do You Know? 

// Whoa, That Sucker’s Huge… 
var total = 0;

for ( i=-300000; i <= 300000; i++) {
    if( i%2 !== 0 ) { 
        total += i;
    }
}
console.log("The total is " + total);
//END Whoa, That Sucker’s Huge… 
*/
// Countdown by Fours 

var i = 2016; // Start @ 2016
var lowNum = 0;
var highNum = 10;
var mult = 2;

while ( i >0 ) { // Exclude 0   
    console.log(i); //Log positive #

    i -= 4; //Count down by 4
}
//END  Countdown by Fours 