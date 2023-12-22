
function sayMyName() {
    console.log("A");
    console.log("R");
    console.log("Y");
    console.log("A");
    console.log("N");
}

//sayMyName()

// function addTwoNumbers(number1 , number2) {//parameters
//     console.log(number1+number2);
// }

// addTwoNumbers(3,5)   //arugments
// addTwoNumbers(3,"5")
// addTwoNumbers(3,"a")

function addTwoNumbers(number1 , number2) {
    // let result = number1 + number2
    // return result
    // console.log("aryan");   //ignored bcz after return statement

    return number1 + number2
}


const result = addTwoNumbers(3,5)
// console.log("Result : ",result);   //this gives op as undefined 

function loginUserMessage(username) {
    // if (username === undefined) { //checking if true then we will not go into the code
    if (!username){         //it is used more
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Aryan"));
// console.log(loginUserMessage()); // it doesnot give null value but it gives undefined as output

// function calculateCarPrice(num1) {
//     return num1
// }

// function calculateCarPrice(...num1) {  //this "..." operator here is called rest operator and it op the values in form of an array
//     return num1
// }

function calculateCarPrice(val1,val2,...num1) {  //in this val1 = 100 and val2 = 200 and rest values goes to num
    return num1
}
// console.log(calculateCarPrice(100,200,500));

const user = {
    username: "aryan",
    price: 200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({   //here we have declared the object inside the fuction call
    username: "Sam",
    price: 199
})

const myNewArray = [200,400,1000,600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,400]));