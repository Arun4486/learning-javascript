// "use strict" // for engine to treat all code as newer version of js
// // alert(2+3) it can't be directly used in nodejs

// // code should be readable

// //types
// //01 number range= <= 2^53   , bigInt  for larger no
// let num = 1

// //02 string
// let name = "str"

// //03 boolean   true/false
// let isTrue = false

// // null standalone value
// let temp = null; 
// let a = "" //not an example bcz it's string

// //undifined not assigned
// let number;

// // symbol => unique

// // object

// console.log(typeof null); // object

// console.log(typeof undefined); //undifined

// //changed for the description


//*******************== operations ==*******************/

let str1 = "2"
let str2 = "2"
//console.log(str1+str2);   //22

//console.log("1" + 2); //12
//console.log(1 + "2"); //12

//console.log("1" + 2 + 2); //122

//console.log(1 + 2 + "2"); //32

// use more paranthesis for clarity and refer to ecma script for doubts

//console.log(+true); // 1
//console.log(+""); //0

let num1,num2,num3
num1 = num2 = num3 = 2+2

let count = 100
//console.log(count++); //101
//console.log(++count); //101  refer to prefix and suffix js mdn
let x = 3;
const y = x++;
console.log(x,y);

// x is 4; y is 3

let x2 = 3;
const y2 = ++x2;
console.log(x2,y2);
//
// x2 is 4; y2 is 4

