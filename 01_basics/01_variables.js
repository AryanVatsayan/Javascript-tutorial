const accountId = 144553        //const variables values cannot be changed
let accountEmail = "abcd@gmail.com"     //changeable is solves the problem of var
var accountPassword = "1234578"         //changeable and has scope problem
accountCity = "Jaipur"                  //changeable but not use this method to define a variable
let accountState;                       //js saves the variable without any value as undefined

// accountId = 2

accountEmail = "hdfc@gmail.com"
accountPassword = "3456"
accountCity = "hisar"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountCity,accountPassword,accountState])