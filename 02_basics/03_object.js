//singleton
// constracture se singleton banta hai

//object.create
//object literals

const mySym = Symbol("key1")

const jsUser = {
    name:"Amol",
    "full name":"amol kadam",
    [mySym]:"mykey1",
    age:19,
    location:"jaipur",
    email:"kdaha@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "hitesh@gmail.com"
// Object.freeze(jsUser)
jsUser.email="hitesh123@gmail.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());








