// Premitive (call by value) 
//----------------------------
// string, number, Boolean, null, undefind, symbol, bigInt

// Js is dynamically typed language 
const a = 100 // no datatype declared

// symbol
const id = Symbol('123')

const id2 = Symbol('123')

console.log(id === id2);  //false

const BigNum = 12345678n; // to store larger numbers adding n in the last makes it BigInt 

// Non-Premitive (call by reference)
//-----------------------------
// array, objects, functions(object function return type) ( return type is object for all)

const heros = ["a","b","c"];

let myObj = {
    name: "Arun",
    age:21,
}

const myFunction = function(){
    console.log("hello world");
}