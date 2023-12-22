let a = 500  //it is called global scope 
if (true){ //it is called local scope
    let a = 10
    const b = 20
    //console.log("INNER :",a);
}


// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "aryan"

    function two() {
        const website ="youtube"
        console.log(username);
    }
    // console.log(website);    //it gives error bcz it tries to use the value of child fn
    
    two()
}
//one()


if (true){
    const username = "aryan"
    if (username === "aryan"){
        const website = "youtube"
        //console.log(username+website);
    }
    //console.log(website);
}
//console.log(username);


//++++++++++++++++++++++++++++++++++ intersting +++++++++++++++++++++++++++++++++++++++++


addone(5)     //no error and we can write it before
function addone(num) {
    return num + 1
}
// addone(5)

addTwo(5)  //error occurs bcz we have declared the function inside a variable so we cant acess before declaration
const addTwo = function(num){
    return num + 2
}
// addTwo(5)