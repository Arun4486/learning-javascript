// object literal ---> key:value pair wrapped in {}
const user = {
    username: "arun",
    signCount: 8,
    isLogged: true

}
// console.log(user);

// constructor funciton --> constructor is refence to itself

function User(username, isLogged, signCount){
    this.username = username,
    this.isLogged = isLogged,
    this.signCount = signCount
    return this;
}

const userOne = User("Arun", true, 4); 
// console.log(userOne); // username: 'Arun', isLogged: true, signCount: 4

const userTwo = User("abc", false, 12);
console.log(userOne); //  username: 'abc', isLogged: false, signCount: 12

// the userOne got changed when using the same litral with different variable,  so we use constructor function

const userThree = new User("Arjun", true, 34)
console.log(userOne); // username: 'abc', isLogged: false, signCount: 12
// steps 
    // 1. new keyword create new instance/copy of object
    // 2. new calls a constructor function
    // 3. the empty object gets filled with the current context in this 
// new keyword calls a constructor function, it creates a new copy/ instance of the same object everytime its used