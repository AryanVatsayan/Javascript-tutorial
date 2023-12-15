const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname : "aryan",
            lastname : "vatsayan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3:"a",4: "b"}

// const obj3 = {obj1, obj2}//it also op the nested object 
// const obj3 = Object.assign(obj1,obj2) // it gives correct op
//const obj3 = Object.assign({},obj1,obj2)  // right operation

const obj3 = {...obj1,...obj2} //most used
//console.log(obj3);

const users = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
    },
    {
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //output is generated in form of array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//object destructuring

const course ={ 
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

//ourse.courseInstructor

const {courseInstructor: instructor} = course //object destructored into instructor
console.log(instructor);

//apis concept:-

// 1. apis in form of json file:
// {
//     "name":"aryan",
//     "coursename":"js in hindi",
//     "price": "free"
// }

// 2. apis in form of array:
// [
//     {},
//     {},
//     {}
// ]