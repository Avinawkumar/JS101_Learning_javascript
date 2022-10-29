// Problem 3
// Write a custom function that has the same behavior of inbuilt Array Slice Function

let arr=["avinaw", "vikash", "vishal", "dibu", "bittu"];

function arraySlice(arr, a, b){
  let bag=[];
  for(let i=a; i<b; i++){
    bag.push(arr[i]);
  }
  return bag;
}

console.log(arraySlice(arr,2,4))