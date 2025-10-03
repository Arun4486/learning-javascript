// ES 6

class User {
    constructor(username , email, password){
        this.username = username,
        this.email = email,
        this.password = password
    }
    encryptPassword(){
        return `abc${this.password}xyz`
    }
}

const chai = new User('haha', 'haha@gmail.com', 12345 )

console.log(chai.encryptPassword()); //abc12345xyz


// functional approach

function Users(username, email, password){
    this.username = username,
    this.email = email,
    this.password = password
}

Users.prototype.encryptPassword = function(){
    return `abc${this.password}xyz`
}

const pani = new Users('hihi', 'hihi@gmail.com', 456)
console.log(pani.encryptPassword()); //abc456xyz
