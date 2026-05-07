
// Object literal
// object literal is a collection of key value pairs. It is a data structure that allows us to store and organize data in a structured way.
//  It is a fundamental concept in JavaScript and is used to create objects, which are instances of classes. Object literals can contain properties (key-value pairs) and methods (functions that operate on the properties). They are commonly used to represent real-world entities and their attributes in programming.
const user = {
    name: 'John',
    loginCount:7,
    isLoggedIn: true,

    getUserDetails: function(){
        // console.log("got user details for database");
        // console.log(`Name: ${this.name}`);
        console.log(this);
        
    }
}

// console.log(user.name);
// console.log(user.getUserDetails());
// console.log(this);


// ### Constructor function
// constructor function is a special type of function that is used to create objects. It is a blueprint for creating objects and it defines the properties and methods that the objects will have. The constructor function is called when an object is created using the new keyword. The this keyword inside the constructor function refers to the object that is being created.
// The constructor function is a common way to create objects in JavaScript, especially before the introduction of classes in ES6. It allows us to create multiple instances of an object with the same properties and methods, but different values for those properties.
// The constructor function is defined using the function keyword and it is conventionally named with a capital letter to indicate that it is a constructor. When we create an object using the new keyword, the constructor function is called and the properties and methods defined in the constructor are assigned to the new object.

function User(name, loginCount, isLoggedIn){
    this.name = name
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.getUserDetails = function(){
        console.log(this);
    }
}

const user1 = new User('John', 7, true)
const user2 = new User('Jane', 5, false)

console.log(user1.constructor);
console.log(user2);
// console.log(user1.getUserDetails());
// console.log(user2.getUserDetails());


const promiseOne = new Promise()
const date = new Date()
const regex = new RegExp('pattern', 'flags')

function User(username, loginCount, isLoggedIn){
    this.name = name
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.name}`);
    }
    
    return this
}

//new kayword creates an empty object and sets the this keyword to that object. It then calls the constructor function and assigns the properties and methods defined in the constructor to the new object. Finally, it returns the new object.
// When we create an object using the new keyword, the constructor function is called and the properties and methods defined in the constructor are assigned to the new object. The new keyword also creates a new scope for the this keyword, which refers to the new object being created. This allows us to create multiple instances of an object with the same properties and methods, but different values for those properties.
// The new keyword is essential for creating objects using constructor functions in JavaScript. It ensures that the constructor function is called correctly and that the properties and methods are assigned to the new object. Without the new keyword, the constructor function would not work as intended and would not create a new object.
// The new keyword is used to create an instance of a constructor function. It creates a new object and sets the this keyword to that object. It then calls the constructor function and assigns the properties and methods defined in the constructor to the new object. Finally, it returns the new object.









