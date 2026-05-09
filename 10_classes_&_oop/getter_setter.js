class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value.toUpperCase()
    }

    get password(){
        return `${this._password}john`
    }

    set password(value){
        this._password = value
    }
}

const hello = new User("h@hello.ai", "abc")
console.log(hello.password);

// OUTPUT
// 123
// ABC
//abcJohn