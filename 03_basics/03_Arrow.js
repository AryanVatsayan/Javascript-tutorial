const user={
    username: "aryan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);  //this keyword is used to refer the current context
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "hitesh"
// user.welcomeMessage() //here new value is printed because the value of userrname is not fixed 

// console.log(this);


// function chai(){
//     console.log(this);
// }
//chai()


// const chai = function(){
//     let username = "aryan"
//     console.log(this);
// }

// const chai = () => {  //this fn is called arrow function 
//     let username = "aryan"
//     console.log(this);
// }

// chai()

//--------- simple arrow function -------------
// const addTwo = (num1, num2) => {
//     return num1+num2
// }


//--------- implicit return ---------------------

// const addTwo = (num1 , num2) => num1+num2
// const addTwo = (num1 , num2) => ( num1 + num2)    //no return stmt req for implicit return 

const addTwo = (num1, num2) => ({username: "aryan"})  // to return an object we should but it in () in implicit return

console.log(addTwo(3,4));

