const name = "aryan"
const repoCount = 50

// console.log(name + repoCount + " Value"); //dont use this bcz it is outdated
// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);  //it is industry level method

const gameName = new String ('ary-an-vats')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf());

const newStirng = gameName.substring(0,6)
// console.log(newStirng);

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne = "  aryan  "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));  //it converts the string into array
