//for in loop

//this loop is used to iterate threw the object which cannot be done by for of loop

const myObject = {
    js:'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}                              // when we apply for in loop on the array then it outputs the keys of the array rather than the data


const map = new Map()  
map.set('IN',"India")
map.set('Fr',"France")
map.set('USA',"United States Of America")
map.set('IN',"India")          // map are not iterateable

for (const key in map) {
    // console.log(key);
}
