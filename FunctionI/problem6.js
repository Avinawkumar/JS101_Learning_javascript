// Problem-6
// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block

function swapCase(char){
  let lower="abcdefghijklmnopqrstuvwxyz"
  let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for(let i=0; i<lower.length; i++){
    if(char==upper[i]){
      return lower[i];
    } else if(char==lower[i]){
      return upper[i];
    }
  }
}
// console.log(swapCase("t"))

function wordSwapCase(word){
  let bag="";
  for(let i=0; i<word.length; i++){
    let x= swapCase(word[i]);
    bag+=x;
    
  }
  return bag;
}

console.log(wordSwapCase("Test"))