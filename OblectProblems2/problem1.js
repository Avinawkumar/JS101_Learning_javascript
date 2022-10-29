//  Sample Output
// [
// 	{name: "Nrupul", age: 32},
// 	{name: "Prateek" , age: 30},
// 	{name: "Aman" , age: 26},
// 	{name: "Albert" , age: 28},
// 	{name: "Yogesh" , age: 44},
// ]

// - Given a list of user data with name and age, create a list of key-value pairs from the input
// - From the generated data, print the users whose age is more than 30


let arr1=["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
let arr2=[32, 30, 26, 28, 44]

let arr3= [];
for(let i=0; i<arr1.length; i++){
  let obj= {};
  if(arr2[i]>30){
    obj.name=arr1[i];
    obj.age= arr2[i];

    arr3.push(obj);
   }
  
}
console.log(arr3);

