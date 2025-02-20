// singleton -->  if initialized as constructor

// object literals

const user = {
    name : "Arun",
    "full name" : "Arun Katiyar",
    age : 21,
    location : "Ghaziabad",
    email : "test.com"
}
// console.log(user.email); //test.com , this method is used for normal cases, this can't access the 2nd property
// console.log(user["email"]); //test.com , but is a key is defined as a string this method is used
// console.log(user["full name"]); // Arun Katiyar

// symbols(datatype) can also be used inside an object  
const mysym = Symbol("key1");
const user2 = {
[mysym] : "mykey1"
}
// console.log(user2); //{ [Symbol(key1)]: 'mykey1' }

// console.log(user2[mysym]); //mykey1

// to update or chage values
user.email = "test1.com";
// console.log(user.email); // test1.com

// to lock a value so no one can chage them
// freeze
// Object.freeze(user);
user.email = "test.com";
// console.log(user); //email: 'test1.com' it's not changed in output

// finctions inside objects

user.greeting = function(){
    console.log("hello user");
}
// console.log(user.greeting); // [Function (anonymous)]
// console.log(user.greeting()); // hello user

user.greetingTwo = function(){
    console.log(`hello, ${this.name} `);
}
// console.log(user.greetingTwo()); //hello, Arun 
