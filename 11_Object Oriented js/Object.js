function createUser (username, score){
    this.username = username,
    this.score = score
}

// we can create more userdefined methods similarly as we get inbuilt in prototype 
createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`${this.username}'s score is ${this.score}`);
    
}
const kohli = new createUser("kohli", 100)

kohli.printMe();

/* when this keyword is used 
    --> A new object is created
    --> A prototype is linked, the newly created object has acces to properties of the conctructor funciton
    --> The constructor function is called with the specified arguments, and this is bound to newly created object.
*/