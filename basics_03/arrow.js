const user = {
    username:"Arun",
    price:999,
    wecomeMessage: function (){
        // console.log(`${this.username},  welcome to website`); // refers to current context
         console.log(this); // current context { username: 'Arun', price: 999, wecomeMessage: [Function: wecomeMessage] }
          
    }
}

// user.wecomeMessage() //Arun,  welcome to website , // current context { username: 'Arun', price: 999, wecomeMessage: [Function: wecomeMessage] }

user.username = "Katiyar";
// user.wecomeMessage();  //Katiyar,  welcome to website, 'this' refers to current context only, { username: 'Katiyar', price: 999, wecomeMessage: [Function: wecomeMessage] }

// console.log(this); // {}
// here it gives empty object but on inspection in browser it return a window object(global obj) with all events
// initially the js (execution) engine was inbuilt in browser only, but now node, deno, bun etc  

// function one(){
//     // console.log(this);// all the global obj
//     let usernam = "arun";
//     console.log(this.usernam); // undefined
    
// }
// one()

// const chai = function (){
//     let usernam = "arun";
//     console.log(this.usernam); //undefined
    
// }
// chai()

//==============arrow function ==========

// const func = () => {
//     let usernam = "arun"
//     // console.log(this.usernam); //{}
//     // console.log(this.usernam); // undefined
    
// }
// func()
//= basic syntax for arrow function
/* 
() => {
    }
*/

// we can store it in any variable

// const addTwo = (num1,num2) => {
//     return  num1 + num2;
// }
// console.log(addTwo(4,5)); // 9

//============ implicit return ==========
// if wrapped in curly braces then return is mendatory , else we can use '()'
// const addNums = (num1,num2) => (num1+num2)
// console.log(addNums(3,4)); //7

// const giveName = (name) => {username:"arun"}
// console.log(giveName("arun")); //undefined

// const give = (name) => ({username: "arun"})
// console.log(give()); //{ username: 'arun' }

