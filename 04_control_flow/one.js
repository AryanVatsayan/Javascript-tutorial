//if statment

const isUserloggedIn = true
const temprature = 11

// if (temprature<50) {
//     console.log("less than 50");
// }
// else{
//     console.log("temprature is greater than 50");
// }

// <,>,<=,>=,==,===,!==,!=

// const score = 200

// if(score > 100){
//     const power = "fly" //we should not use var to define a variable bcz it has only global scope so it can be easily executed outside the scope also
//     console.log(`User power: ${power}`);
// }


// const balance =1000

// if (balance>500) console.log("test1"),console.log("test2");
//we should not use the above syntax it is bad practice

// if (balance < 500) {
//     console.log("less than 500");
// }
// else if (balance < 750){
//     console.log("less than 750");
// }
// else{
//     console.log("less than 1200");
// }


const UserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if (UserloggedIn && debitCard) {
//     console.log("allow ti buy course");
// }

if (loggedInFromEmail || loggedInFromGoogle ) {
    console.log("User logged in ");
}