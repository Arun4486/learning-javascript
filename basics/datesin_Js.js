// Dates

let myDate = new Date()

// console.log(myDate); //2025-02-16T08:30:46.085Z

// console.log(myDate.toString()); //Sun Feb 16 2025 08:32:05 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString()); // Sun Feb 16 2025

// console.log(myDate.toISOString()); //2025-02-16T08:34:01.411Z

// console.log(myDate.toJSON()); //2025-02-16T08:35:31.337Z

// console.log(myDate.toLocaleDateString()); //  2/16/2025

// console.log(myDate.toLocaleString()); //   2/16/2025, 8:35:31 AM

// console.log(typeof myDate); //object

let myCreatedDate = new Date (2023, 0 , 23); // months starts from 0 in js

// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

let createdDate = new Date (2023, 0 ,23 ,6 , 7);
//console.log(createdDate.toLocaleString());

let date = new Date ("2023-1-13"); // this formate takes months as usual
//console.log(date.toDateString()); //Fri Jan 13 2023

//==========timestamps ===========

let myTimeStamp =  Date.now();
// console.log(myTimeStamp); //1739695816990 mmilisecond value since 1 jan 1970

// console.log(date.getTime()); // 1673568000000

// console.log(Math.floor(Date.now()/1000)); // 1739696147 in seconds

let newDate = new Date();
// console.log(newDate.getDay()); // 0 (sun) 

// console.log(`${newDate.toLocaleString()} " and day is" ${newDate.getDay()}`);  //  2/16/2025, 9:03:06 AM " and day is" 0

console.log(newDate.toLocaleString('default', { weekday: "long"}));   // sunday  , first argument is local 2nd is formate

