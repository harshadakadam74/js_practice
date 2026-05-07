// promises
// 1. promise is a object which is used to handle asynchronous operations in JavaScript.
// 2. A promise is in one of three states: pending, fulfilled, or rejected.
// 3. A promise is created using the Promise constructor, which takes a function as an argument.
//  This function is called the executor function, and it is executed immediately when the promise is created. The executor function takes two arguments: resolve and reject.
//  These are functions that are used to change the state of the promise from pending to fulfilled or rejected, respectively.
// 4. A promise can be consumed using the then and catch methods. The then method is used to handle the fulfilled state of the promise, while the catch method is used to handle the rejected state of the promise.

// Example of a promise

// Create a new promise that simulates an asynchronous operation

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true; // change this to false to see the rejected case
        if (success) {
            resolve("Promise fulfilled!");
        } else {
            reject("Promise rejected!");
        }   }, 2000);       
});

myPromise
    .then((message) => {
        console.log(message); // "Promise fulfilled!"
    })
    .catch((error) => {
        console.error(error); // "Promise rejected!"
    });

// Another example of a promise that simulates an asynchronous task
const promise1 = new Promise((resolve, reject) => {
   //Do  an async task
   //DB calls, cryptography, network calls
    setTimeout(  () => {
        console.log('async task is complete');
        resolve();
    }, 1000);
})

promise1.then(() => {
    console.log("promise consumed");
})

// Another example of a promise that simulates an asynchronous task
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('async task 2');
        resolve();
    },1000)
}).then(() => {
    console.log("Async 2 resolves");
})

// Promise 3 example
const promise3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({username: 'john', email: 'john@example.com'});
    },1000)
})

promise3.then((user) => {
    console.log(user);
})

// Promise 4 examople
const promise4 = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true // change this to false to see the resolved case
        if (!error){
            resolve({username:"xyz", password:"123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promise4.then((user) => {
    console.log(user);
    return user.username; // this will be passed to the next then block
}).then((username) => { // this will receive the username from the previous then block
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {   // this block will be executed regardless of the promise being resolved or rejected
    console.log("This will always be executed");
})


//Example  5
const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false; // change this to true to see the rejected case
        if (!error) {
            resolve({username: 'abc', password: '123'})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// handle the promise using async/await
async function handlePromise() {
    try {
        const response = await promise5; // wait for the promise to resolve
        console.log(response);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("This will always be executed");
    }
}
handlePromise();


// async function getAllUsers() {
//    try {
//      const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//      const data = await response.json();
//      console.log(data);
//    } catch (error) {
//      console.error( "E:",error);
//    }
// }
// getAllUsers();


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})


// Fetch

// The fetch function is a modern way to make network requests in JavaScript. It is built on top of promises and provides a more powerful and flexible API for making HTTP requests.
// first argument is the URL of the resource you want to fetch, and the second argument is an optional options object that can be used to specify the method, headers, body, etc. of the request.
// fetch is a built-in function in JavaScript that is used to make network requests. It returns a promise that resolves to the response of the request.
//  The fetch function takes two arguments: the URL of the resource you want to fetch, and an optional options object that can be used to specify the method, headers, body, etc. of the request.
// The fetch function is commonly used to make API calls and retrieve data from a server. It can be used with async/await or with then/catch to handle the response and any errors that may occur during the request.

// Example of using fetch to get data from an API
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json(); // parse the response as JSON
})
.then((data) => {
    console.log(data); // log the data to the console
})
.catch((error) => {
    console.error(error); // log any errors to the console
})




 

