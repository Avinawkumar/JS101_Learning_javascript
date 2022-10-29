// Problem-5
// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]


// Write a function to convert a character to lower case
function toLower(char){
  let lower="abcdefghijklmnopqrstuvwxyz"
  let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for(let i=0; i<lower.length; i++){
    if(char==upper[i]){
      return lower[i];
    }
  }
  return char;
}

// console.log(toLower("A"))

// Use this function to convert a given word to lower case

function wordToLower(word){
  let bag="";
  for(let i=0; i<word.length; i++){
    let x= toLower(word[i]);
    bag+=x;
    
  }
  return bag;
}


// console.log(wordToLower("AVINAW KUMAR"))


// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

function arrToLower(arr){
  let box=[];
  for(let i=0; i<arr.length; i++){
    let a=wordToLower(arr[i]);
    box.push(a);
  }
  return box;
}

let arr=["MA", "SA", "I", "SCH", "OOL"];
console.log(arrToLower(arr));

