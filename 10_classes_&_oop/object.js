function multipleBy5(num) {
    return num*5;
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

//this means that the createUser function is a constructor function and it can be used to create new objects. The this keyword inside the createUser function refers to the object that is being created. 
// When we create a new object using the new keyword, the createUser function is called and the properties defined in the function are assigned to the new object. The prototype property of the createUser function can be used to add methods to all instances of the createUser object. In this case, we are adding an increment method to the prototype, which will be available to all instances of createUser.

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("Chai",15)
const tea =  createUser("Tea", 200)

chai.printMe()
tea.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
