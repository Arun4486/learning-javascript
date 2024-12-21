//====String primitives and string objects 
const name = "arun " // primitive
const age = 21;
//console.log(name+age);

//string interpolation
//console.log(`my name is ${name} and my age is ${age}`);//similar to using %d in c

//console.log(`my name is ${name.toUpperCase()}`); // can apply things on the go
//console.log(`my name is ${name.length}`);

// string declaration

const myName = new String("ArunKatiyar"); // string object

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4,   Primitives passed to eval are treated as source code; 
console.log(eval(s2)); // returns the string "2 + 2", String objects are treated as all other objects are, by returning the object
console.log(eval(s2.valueOf())); // returns the number 4, converted to primitive


// console.log(myName.charAt(4)); // K
// console.log(name.charAt(3));// n, works on both methods of declaration

// console.log(myName.indexOf('K')); //4

//console.log(myName.substring(2,5)); //first inclusive, second exclusive

//console.log(myName.substring(-2,6)); // doesn't consider -ve value starts from 0

//console.log(myName.slice(-9,7)); // vlaues are always considered from left to right only

const newString = "      Arun     ";
// console.log(newString); //      Arun     
// console.log(newString.trim());//Arun , removes extra leading and trailing spaces

const url = "https://Arun.com/Arun Katiyar"; //brouser changes the white spaces sometimmes

//console.log(url.replace(' ','-')); //https://Arun.com/Arun-Katiyar
// console.log(url.includes('Katiyar')); //true
// console.log(url.includes('arjun')); //false

//=to convert string into array based on a seperator

const str = "arun-katiyar-is-a-student";

console.log(str.split('-')); //[ 'arun', 'katiyar', 'is', 'a', 'student' ]
