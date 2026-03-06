//foreach
const coding = ["js","python","c++","java"]

// coding.forEach( function (value) {
//     console.log(value);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printme(item) {
//     console.log(item);
// }
// coding.forEach(printme);

coding.forEach( (item,index, arr) => {
    console.log(item,index,arr);
})

const mycoding = [
    {
        languagename: "java",
        languagefile: "java"
    },
     {
        languagename: "ja",
        languagefile: "jva"
    },
     {
        languagename: "jaa",
        languagefile: "ja"
    },
     {
        languagename: "jav",
        languagefile: "ava"
    }
]
mycoding.forEach( (item) => {
    console.log(item.languagefile);
})