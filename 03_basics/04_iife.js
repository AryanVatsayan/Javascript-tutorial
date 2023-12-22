//Immediately Invoked Function Expressions (IIFE)

(function chai() {//named iife
    console.log(`DB CONNECTED`);
})();                               //here first () is for function definition and second is for its execution

// ( () => {
//     console.log(`DB CONNECTED TWO`);
// })();

( (name) => { //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
})('aryan')