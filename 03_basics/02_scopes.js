// var c = 300
let a = 300

if(true) {  //block scope
    let a = 10
    const b = 20
    var c = 30
    console.log("inner:",a);
    
}

console.log(a);
console.log(b);
console.log(c); //globale 

function one(){
    const username = "Harshada"

    function two(){
        const website = "Youtube"
        console.log(username);
        console.log(website);
        
    }
    // console.log(website); //not access

    two();
}
one();

if(true){
    const username = "Harshada"
    if(username === "Harshada"){
        const website = "Youtube"
        console.log(username + website);
    }
    // console.log(website); //not access
} 
// console.log(website); //not access

// ++++++++++++++++++ interesting +++++++++++++++
console.log (addOne(5)) //not problem
function addOne(num){
    return num + 1
}

ddTwo(5) //this is the problem is not access
const addTwo = function(num){
    return num + 2
}




