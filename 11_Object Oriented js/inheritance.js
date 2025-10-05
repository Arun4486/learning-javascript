class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, sub){
        super(username),
        this.sub = sub
    }

    addSub(){
        console.log(`This sub was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "Chemistry")
chai.addSub() //This sub was added by chai
chai.logMe() //Username is chai

console.log(chai instanceof Teacher); //true
