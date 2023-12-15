//singleton (when object is created threw constructors then it is singleton , but not singleton when created threw literals)

//object constructor method:-
// Object.create

//object literals method:-

const mySym = Symbol("key1")

const JsUser = {
    name:"aryan",
    "full name": "Aryan Vatsayan",
    [mySym] : "myKey1",
    age: 18,
    location: "jaipur",
    email:"aryan@google.com",
    isLoggedIn: false,
    lastLoginDays : ["monday","saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser.mySym); //when we see the typeof of symbol then it shows that it is a string type
// //thus we use the symbol in following manner in console command
// and for using symbol as key always put it in []
// console.log(JsUser[mySym]);

JsUser.email = "vats@google.com"
//Object.freeze(JsUser) // it freezes the value of the object
JsUser.email = "vats@gmail.com"
// console.log(JsUser);

JsUser.greeting =  function(){
    console.log("hello js user");
}

JsUser.greetingtwo =  function(){
         console.log(`hello js user, ${this.name}`);
}
console.log((JsUser.greeting()));
console.log((JsUser.greetingtwo()));