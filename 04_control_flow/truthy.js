// const userEmail = "aryan@gmail"

// if (userEmail) {
//     console.log("Got user email");
// }else{
//     console.log("Dont have user email");
// }



// falsy values:-
// false , 0 , -0 , BigInt 0n ,"", null , undefined , NaN


// truthy values:-
// "0", 'false', " ", [] , {}, function(){} (empty function)

// if (userEmail.length == 0){
//     console.log("array is empty");
// }

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("object is empty");
}


// (false==0,false=='',0=='') => true


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

// console.log(val1);

// ternary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80"): console.log("more than 80");