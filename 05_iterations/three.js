// for of loop
// it is an array specific loop

//["", "" ,""]
// [{} ,{} ,{}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr){
    // console.log(num);
}

const greetings = "Hello World"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map()  //map are the objects in js that stores the values as key value pairs
map.set('IN',"India")
map.set('Fr',"France")
map.set('USA',"United States Of America")
map.set('IN',"India") //map only take unique values

// console.log(map);

for (const [key, value] of map){
    // console.log(key ,':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for(const [key, value] of myObject){
//     console.log(key, ':-', value);
// }

//for of loop doesnot work in 'for of' loop

