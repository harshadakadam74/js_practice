// if
// const isUserLoggedIn = true;
// const temperature = 41;

// if ( temperature === 41 ) {
//   console.log("less than 50");
// } else {
//   console.log("temperature us greater than 50");
// }

// console.log("Execute");
// //temoerature is greater than 50
// // Execute

// // <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if ( score > 100 ) {
//     const power = "fly"
//     console.log(` User power: ${power} `);    
// }
// console.log(`user power: ${power}`);
//Error
// becouse this is the block scope variable

const balance = 1000
// if (balance > 500 ) console.log("test"),console.log("test2"); this type of code is not use

if ( balance < 500 ) {
    console.log("less than 500");   
} else if (balance < 750) {
    console.log("less than 750");
}else if (balance < 900 ) {
    console.log("less than 900");
}else ( balance < 1200 ) {
    console.log("less than 1200");
} // less than 1200

const UserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if ( UserLoggedIn && debitCard && 2==3 ) {
    console.log("Allow to buy course");   
}

if ( loggedInFromGoogle || loggedInFromEmail ) {
    console.log("User logged in");
}


