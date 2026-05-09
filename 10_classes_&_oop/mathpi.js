const descriptor =  Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor);

console.log(Math.PI);
Math.PI = 5 //this will not change the value of Math.PI because it is a read-only property
console.log(Math.PI);

//OUTPUT
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }


const student = {
    name: "john",
    class: BSc (CS),
    AvailableStud: true,

    workFrom: function(){
        console.log("Available nahi hai");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(student,"name"));

// Change the properties but limited format

Object.defineProperty(student, 'name', {
    // writable: false,
    enumerable: false // this will make the name property non-enumerable, so it will not show up in for...in loops or Object.keys()
})

// console.log(Object.getOwnPropertyDescriptor(student,"name"));

for (const [key, value] of Object.entries(student)) {
    if (typeof value !== 'function') {
         console.log(`${key} : ${value}`);
    }
}