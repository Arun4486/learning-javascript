let myHeros = ["thor", "iromman"]

let heroPowers = {
    thor : "Hammer",
    ironman: "Intalligent",

    getThorPower : function(){
        console.log(`Thor power is ${this.thor}`);
        
    }
}

// if we want to add methods in prototype , then add it in to the top most parent so that it is accessible to all children.


Object.prototype.sayChicken = function(){
    // console.log(`I miss eating Chicken very much`);
    
}

// now we can use this method anywhere, as every thing in js is js

heroPowers.sayChicken();

// similarly if i want to add a method that can be used by all the arrays only in this file

Array.prototype.arr = function(){
    console.log(`I am array prototype`);
    
}


String.prototype.trueLength = function(){
    console.log(`True length is ${this.trim().length}`);
    
}
const username1 = "arun      ";
const user2 = "asdkasvd y uhawjd ad ";

username1.trueLength() // 4
user2.trueLength() // 20

// Inheritance

const User = {
    username : "arun"
}

const Student = {
    study : true
}

const student2 = {
    name : "abc",
    score : "average",
    __proto__ : User //inherited 
}

// or 

student2.__proto__ = Student;

// mordern syntax

// student2.setPrototypeOf(User, Student); // direct inheritance


