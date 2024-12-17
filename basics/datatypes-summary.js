// Premitive (call by value) 
//----------------------------
// string, number, Boolean, null, undefind, symbol, bigInt

// Js is dynamically typed language 
const a = 100 // no datatype declared

// symbol
const id = Symbol('123')

const id2 = Symbol('123')

//console.log(id === id2);  //false

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
    //console.log("hello world");
}
//=============MEMORY MANAGEMENT IN JS============================

// for Primitive datatypes (STACK)  memory is used, we get a copy of declared variable

// for Non-Peimitive (HEAP) is  used , we get reference of the original value

let myName = "Arun";
let anotherName = myName; // it gives another name a copy of myName

// example for primitive stack memory
//console.log(anotherName); // Arun

anotherName = "Varun";
//console.log(anotherName); //varun
//console.log(myName); //Arun , no change in its original value

//example for non-primitive heap memory

let userOne = {
    email:"user@gmail.com",
    id:"user@ybl"
}
let userTwo = userOne
//console.log(userOne.email); //user@gmail.com
//console.log(userTwo.email); //user@gmail.com

userTwo.email = "arun@gmail.com"
console.log(userOne.email); //arun@gmail.com , it gets changed in both of them bcoz of referencing
console.log(userTwo.email); //arun@gmail.com

