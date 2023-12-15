// Primitive data types :-

// 7 types : String , Number , Boolean , null , undefined , symbol , BigInt

//how to define symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 34343532533534533n

// Reference data types  (Non primitive):-

// Array , Objects , Functions

const heros = ["Shaktiman","naagraj","doga"];   //array

let myObj = {
    name : "aryan",  //abjects
    age : "18",
}

const myFunction = function(){         // function
    console.log("hello world");
}

//*********************************************************************** */

// memory in js
// two types :- stack (for primitive datatypes) and heap (for non primitive datatypes)
// stack always gives a copy of data to work up on where as heap gives us the memory reference of the original data

let myName = "aryan vatasayan"

let anotherName = myName;
anotherName = "chaiurcode"

console.log(myName);
console.log(anotherName);

let userone = {
    email : "aryan@google.com",
    upi : "user@ybl",
}

let usertwo = userone

usertwo.email = "vatsayan@google.com"

console.log(userone.email);
console.log(usertwo.email);