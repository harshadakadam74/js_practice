// Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a new class (called a child or subclass) to inherit properties and behaviors (methods) from an existing class (called a parent or superclass). This promotes code reusability and establishes a natural hierarchical relationship between classes.
// In JavaScript, inheritance is typically achieved through prototypes. When a new object is created, it can inherit properties and methods from its prototype, which is an object itself. This allows for a chain of inheritance, where objects can access properties and methods defined in their prototype and the prototypes of their prototypes, and so on.

// In ES6, JavaScript introduced a more formal syntax for creating classes and handling inheritance using the class and extends keywords. The class syntax provides a clearer and more concise way to define classes and their relationships, making it easier to understand and work with inheritance in JavaScript.

// In the example above, we have a User class with a constructor that initializes the username property and a logMe method that logs the username. The Teacher class extends the User class, which means it inherits the properties and methods of the User class. The Teacher class has its own constructor that calls the super() function to invoke the constructor of the User class, allowing it to initialize the username property. The Teacher class can also have its own properties and methods, such as email and password in this case.
// The super() function is used to call the constructor of the parent class (User) from the child class (Teacher). This allows the Teacher class to inherit the properties and methods of the User class while also adding its own properties and methods.


class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCource(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123" )
chai.addCource() // A new course was added by chai
chai.logMe() // USERNAME is chai

const masalaChai = new User("masalaChai") // creating an instance of User class
masalaChai.logMe() // USERNAME is masalaChai

console.log(chai === masalaChai); // false, because they are different objects in memory
console.log(chai instanceof Teacher); // true, because chai is an instance of the Teacher class
console.log(chai instanceof User); // true, because Teacher extends User, so chai is also an instance of the User class
console.log(masalaChai instanceof User); // true, because masalaChai is an instance of the User class


 
