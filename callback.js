// // A callback function is a function passed into another function as an argument,

function a(n){
    console.log(`${n+12}`);
}
function b(callback){
    n=12
    console.log(n);
    callback(n)
}
b(a) 

// // //////////////////////////////////////////////////////////////////////////////////////////////////////////

function a(b){
    console.log(b+"a");
}
function c(d){
    b=2
    console.log(b);
    d(b)
    
}
c(a)

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////

function a(){
    console.log('hello');
}
a(b)
function b(){
    console.log('hii');
}
b(a)
function c(){
    console.log('how are you');
}
c(a)

// // ///////////////////////////////////////////////////////////////////////////////////////////////////////////
a=require("readline-sync")
function greeting(name) {
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = a.question('Please enter your name.');
    callback(name);
  }
  
  processUserInput(greeting);



// Main function
const mainFunction = (callback) => {
    setTimeout(() => {
        callback([2, 3, 4]);
    }, 2000)
}
  
// Add function
const add = (array) => {
    let sum = 0;
    console.log(array);
    for(let i of array) {
        sum += i;
    }
    console.log(sum);
}
  
// Calling main function
mainFunction(add);

