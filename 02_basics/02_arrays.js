const marvel_heros = ["Ironman", "Hulk" , "Thor"]
const dc_heros = ["superman" , "flash" , "batman"]

// marvel_heros.push(dc_heros)  //it doesnot merge the two arryas but it add the dc_heros as an single element thus marvel_heros become nested array

// console.log(marvel_heros); // op:- [ 'Ironman', 'Hulk', 'Thor', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);

// const allheros = marvel_heros.concat(dc_heros) //it retruns a new array and merges the input arrays
// console.log(allheros);

// const all_new_heros = [...marvel_heros,...dc_heros] //"..." takes the elements of the array individually
// console.log(all_new_heros);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_array = another_array.flat(Infinity) //it spread outs the nested values
// console.log(real_array);


// console.log(Array.isArray("aryan"));
// console.log(Array.from("aryann")); // it creates the array out of elments of name
// console.log(Array.from({name: "aryan"})) // interesting case as it will give empty arr as op bcz we have not specified that from which keys or values we should make arrays

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
