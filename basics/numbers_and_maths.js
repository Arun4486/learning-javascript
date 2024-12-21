const score = 200;
//console.log(score); //200

const score1 = new Number(100); //specifying the datatype
//console.log(score1); //[Number: 100]

//console.log(score1.toString().length); //3

const sc = 100.00000000000;
//console.log(sc.toFixed(2)); //100.00

const sc1 = 23.45678;
//console.log(sc1.toPrecision(3)); //23.5 , /*Number of significant digits. Must be in the range 1 - 21, inclusive Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.*/

const sc2 = 123.5678;
//console.log(sc2.toPrecision(3)); //124

const sc3 = 1000000000;
//console.log(sc3.toLocaleString()); //1,000,000,000 according to us standards
//console.log(sc3.toLocaleString('en-IN')); // 1,00,00,00,000 according to indian standards


//================= MATHS ============

// console.log(Math); //Object [Math] {}

// console.log(Math.abs(-4)); //4
// console.log(Math.round(3.7)); // 4
// console.log(Math.ceil(4.7));// 5
// console.log(Math.floor(4.7));// 4

const arr = [2,4,6,3,6,8];
//console.log(Math.min(3,4,2,6,2,1)); //1 it takes individual arguments only
//console.log(Math.min(...arr)); //2, (...) is used to expands the numbers array into individual arguments
//similarly max

//console.log(Math.random()); // values bw 0-1

//console.log(Math.floor(Math.random()*10) +1); // values (1-10)


// to get values between boundaries
const min = 10;
const max = 20;
console.log(Math.floor(Math.random()* (max - min +1)) +min); //values (10-20)

