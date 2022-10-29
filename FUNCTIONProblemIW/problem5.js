// PROBLEM 5
// Problem 5: Write a function to replace spaces in a given string with - .

let str="My name is Avinaw Kumar"
function replaceSpac (str){
  let bag="";
  for(let i=0; i<str.length; i++){
    if(str[i]== " "){
      bag+="-";
    } else {
      bag+=str[i];
    }
  }
  console.log(bag);
}
replaceSpac(str)