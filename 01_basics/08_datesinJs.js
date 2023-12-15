//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023,0,23) //In js months starts from 0=>jan
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023,0,23,5,3)
let myCreatedDate = new Date("2023-12-15")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);             //gives value in miliseconds
// console.log(myCreatedDate.getTime()); //gives value in miliseconds
// console.log(Date.now());  //gives value in miliseconds
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// ${newDate.getDay()} and the time

newDate.toLocaleString('default',{
    weekday:"long",
})

// console.log('hello world');
