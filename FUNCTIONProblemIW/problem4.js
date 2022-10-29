// Problem 4: Write a function to check if the char is a small case or not.

// let char= "s";
function check(char){

let lower="abcdefghijklmnopqrstuvwxyz"
let islower= false;
for(let i=0; i<lower.length; i++){
  if(char==lower[i]){
    islower=true;
    break;
  }
}
  return islower;
}
let ans=check("G");

if(ans== true){
  console.log("It is small case!")
} else{
  console.log("It is not small case!")
}