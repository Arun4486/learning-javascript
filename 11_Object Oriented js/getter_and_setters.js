class User  {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value.toUpperCase()
    }

    get password(){
        return `${this._password.toUpperCase()}haha`
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const u1 = new User("a@gmail.com", "abc1234")
console.log(u1); //User { _email: 'A@GMAIL.COM', _password: 'ABC1234' }
