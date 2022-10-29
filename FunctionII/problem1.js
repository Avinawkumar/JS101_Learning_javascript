// PROBLEM 1
// Problem 1. Write a custom function that has the same behavior of inbuilt Array Join Function -
let arr=["abhi","bittu", "dibu",];

function arrayJoin(arr, A){
  let bag="";
  for(let i=0; i<arr.length; i++){
    bag+=arr[i]+A;
  }
  return bag;
}

console.log(arrayJoin(arr,","))


