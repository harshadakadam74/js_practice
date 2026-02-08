// Immediately Invoked Function Expressions (IIFE)

( function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
}) ();

( (name) => {
    //uname IIFE
    console.log(`DB CONNEDTED TWO ${name}`);
}) ('hitesh')