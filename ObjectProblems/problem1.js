// Problem 1 :
// Given an array find the unique items in the array?

let arr=["Sonu", "Monu", "Ramu", "Sonu", "Bittu","Bittu"];
let obj={};

for(let i=0; i<arr.length; i++){
  let key =arr[i];
  obj[key]=1;
}
console.log(obj);