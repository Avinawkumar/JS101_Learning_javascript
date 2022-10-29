// Problem-2
// Write code to find the absolute difference of two numbers

// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14

function absolute(a,b){
  let abs=a-b;
  if(abs<0){
    abs= abs* -1;
  }
  return abs;
}
let ans=absolute(12,4);

let ans2=absolute(4,18);
console.log(ans, ans2);