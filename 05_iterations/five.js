// for each loop

const coding = ["js","py","ruby","python","cpp"]
//it is a callback function
// coding.forEach( function (item) {
//     console.log(item);
// } )

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe) //passing the fn name when fn is already declared

// coding.forEach( (item, index , arr) => {
//     console.log(item , index , arr);
// })

const myCoding = [
    {
        languagName:"javascript",
        languageFileName: "js"
    },
    {
        languagName:"java",
        languageFileName: "java"
    },
    {
        languagName:"python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    // console.log(item.languagName);
})

// const values = coding.forEach((item) => {
//     // console.log(item);  //undefined
//     return item
// })
// console.log(values);

// for each loop doesnot return any values