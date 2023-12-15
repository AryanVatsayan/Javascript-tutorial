// array

//declaration methods:
const arr = [1,2,3,4,5] //their size can ke changed
const myHeros = ["aryan","vatsayan"] 
const arr2 = new Array (1,2,3,4,5)


// console.log(arr[0]);


// arrays methods:

// arr.push(7)
// arr.push(1)
// //arr.pop()
// console.log(arr);

// arr.unshift(9)
// arr.shift(9)

// console.log(arr.includes(9));
// console.log(arr.indexOf(9));

// const newArr = arr.join()  //it binds the array and converts into string format 
// console.log(arr);
// console.log(newArr);

//slice , splice

console.log("A ",arr);

const myn1 = arr.slice(1,3)

console.log(myn1);
console.log("B ",arr);

const myn2 = arr.splice(1,3) //main difference bw the slice and splice is that splice manipulates the original array where as slice doesnot
console.log("C ",arr);
console.log(myn2);