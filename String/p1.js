// Problem 1 : Given a string count the number of words in that string

let str = "I am IronMan";
let count =0;
for (let i=0; i<str.length; i++) {
  if (str[i]== " ") {
    count++
  }
}
if(str.length != 0){
  console.log("Number of words are:", count+1);
} else {
  console.log("Number of words are:", 0);
}