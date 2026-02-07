// Dates & Time
//date is a object

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

// let myCreatedDate = new Date(2026,0,23);
// let myCreatedDate = new Date(2026,0,23,5,3);
// let myCreatedDate = new Date("2026-01-14") // not follow in india
let myCreatedDate = new Date("01-14-2026")

// console.log(myCreatedDate.toDateString);

let mtTimeStamp = Date.now()

console.log(mtTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay);

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long"   //ctrl+space
})