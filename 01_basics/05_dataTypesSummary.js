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