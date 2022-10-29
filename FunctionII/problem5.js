// Problem 5
// Write a custom function that has the same behavior of inbuilt Array Includes Function

let arr=[2,5,33,11,6, "avi"];

function arrayIncludes(arr, inc){
  let flag=false;
  for(let i=0; i<arr.length; i++){
    if(arr[i]== inc){
      flag=true;
    } 
  }
  return flag
}

console.log(arrayIncludes(arr, 11))