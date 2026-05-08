// ES6

// ### Classes
// Classes are a new feature in ES6 that provide a more elegant and concise way to create objects and deal with inheritance. They are syntactical sugar over the existing prototype-based inheritance in JavaScript. Classes allow us to define a blueprint for creating objects, which can have properties and methods. They also provide a way to create subclasses that can inherit properties and methods from a parent class.
// The class syntax is more intuitive and easier to read than the traditional constructor function syntax. It also provides a clear separation between the class definition and the instance creation. Classes can have a constructor method that is called when a new instance of the class is created, and they can also have other methods that can be called on instances of the class. Overall, classes in ES6 provide a more structured and organized way to create objects and deal with inheritance in JavaScript.
// The class syntax in JavaScript is a more concise and elegant way to create objects and deal with inheritance. It provides a clear structure for defining classes, constructors, and methods. The class syntax is syntactic sugar over the existing prototype-based inheritance in JavaScript, which means that it does not introduce new functionality but rather provides a more convenient way to achieve the same results. With classes, you can easily create instances of objects, define methods, and implement inheritance, making your code more organized and easier to read.


class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return`${this.password}abc`
    }

    changeUserName(){
        return`${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gamil.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUserName());

// behind the scenes

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return`${this.password}abc`
}

User.prototype.changeUserName = function(){
    return`${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@example.com", "456")

console.log(tea.encryptPassword());
console.log(tea.changeUserName());

