//Prototype
// In JavaScript, a prototype is an object that serves as a template for other objects. It allows you to add properties and methods to all instances of a particular type of object. When you create a new object, it inherits properties and methods from its prototype. This is a fundamental concept in JavaScript's object-oriented programming model and is used to achieve inheritance and code reuse.
// Object literals
// Constructor functions

// Prototypes and prototype chaining
// In JavaScript, prototypes are used to implement inheritance and allow objects to share properties and methods. When you create a new object using a constructor function, it inherits properties and methods from the constructor's prototype. This is known as prototype chaining. If a property or method is not found on the object itself, JavaScript will look for it on the object's prototype, and if it's not found there, it will continue up the prototype chain until it reaches the end (null). This allows for efficient memory usage and code reuse, as multiple objects can share the same properties and methods defined on their prototype.
// In JavaScript, the prototype property is a special property that is automatically added to every function. It is an object that contains properties and methods that can be shared among all instances of that function. When you create a new object using a constructor function, it inherits properties and methods from the constructor's prototype. This allows for efficient memory usage and code reuse, as multiple objects can share the same properties and methods defined on their prototype. The prototype property is also used to implement inheritance in JavaScript, allowing one constructor function to inherit properties and methods from another constructor function.
// The prototype property is a powerful feature in JavaScript that allows for efficient memory usage and code reuse, as well as enabling inheritance and the creation of complex object hierarchies.
// It is important to understand how prototypes work in JavaScript in order to effectively use the language and create efficient and maintainable code.


// let myName = "John    ";
// let myCharacter = "Student     "/;

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);   
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all obj`);
    
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance
// Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a new class (called a child or subclass) to inherit properties and behaviors (methods) from an existing class (called a parent or superclass). This promotes code reusability and establishes a natural hierarchical relationship between classes. Inheritance enables the child class to extend or modify the functionality of the parent class while still retaining its core features. It is a key mechanism for creating more complex and specialized classes based on simpler, more general ones. 
// In JavaScript, inheritance is typically achieved through prototypes. When a new object is created, it can inherit properties and methods from its prototype, which is an object itself. This allows for a chain of inheritance, where objects can access properties and methods defined in their prototype and the prototypes of their prototypes, and so on.


const User = {
    name: "Chai",
    email: "chai@email.com"
} 

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    inAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,

    __proto__: TeachingSupport 
}

Teacher.__proto__ = User
// TeachingSupport.__proto__ = Teacher

// modern way of setting prototype is using Object.create() method
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object. This allows you to create a new object that inherits properties and methods from the existing object, without modifying the existing object itself. It is a more modern and cleaner way to set up prototype chains compared to directly assigning to the __proto__ property.
// Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "ChaiAurCode     "

String.prototype.trueLength = function(){
    // console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);   
}

anotherUserName.trueLength();
"hitesh".trueLength()
"iceTea".trueLength()