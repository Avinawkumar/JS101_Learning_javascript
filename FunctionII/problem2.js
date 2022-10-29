// Problem 2
// Write a custom function that has the same behavior of inbuilt Array Last Index Of Function

let name=["avinaw", "vikash", "shubham", "vivek","avinaw" ]

function lastIndex(name, search){
  let index=-1;
  for(let i=0; i<name.length; i++){
    if(name[i]==search){
      index= i;
    }
  }
  return index;
}
console.log( lastIndex(name,"avinaw"))