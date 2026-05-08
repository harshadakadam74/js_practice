// CALL

// call() method is used to call a function with a given this value and arguments provided individually.
// It allows you to specify the context (the value of this) for the function being called, and also allows you to pass arguments to the function. The call() method is a powerful tool for controlling the execution context of a function and can be used to borrow methods from other objects or to invoke functions in a specific context.
// The syntax for the call() method is as follows:
// functionName.call(thisArg, arg1, arg2, ...)
// where functionName is the name of the function you want to call, thisArg is the value you want to use as this when calling the function, and arg1, arg2, ... are the arguments you want to pass to the function. The call() method executes the function immediately and returns its result. It is important to note that the call() method does not create a new function; it simply calls an existing function with a specified this value and arguments.

function setUserName(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username,email,password){
    setUserName.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("Chai", "chai@example.com", "password123")
console.log(chai);
