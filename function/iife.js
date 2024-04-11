//Immediately Invoked Function Expression (IIFE)

(function chai(){
    //named iife
    console.log("database connect");
})();
//due global scope pollution se problem due remove the variable ,declartion
//IIFE is used to avoid global scope pollution
//()();
//we have to add semicolon on last of iife so that next function run if,
// we not add semicolon so next function treated as iife so it give error 

((name)=> {
    console.log(`db connect2 ${name}`)
})("satyajit")