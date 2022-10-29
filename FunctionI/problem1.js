// Problem-1
// Write a function named addNumbers which takes two numbers as input and return their sum

const { addAbortSignal } = require("stream");

// Use the function to calculate the sum of given three numbers

function addNumbers(a,b){
  let sum=a+b;
  return sum;
}


let x1=6;
let x2=7;
let x3=8;

let ans=addNumbers(x1, x2);

let res=addNumbers(ans,x3);
console.log(res);