// let str= "stvr";
// let pre = false;
// for(let i=0; i<str.length; i++) {
//      if(str[i]=='a'|| str[i]=='e'|| str[i]=='i' ||str[i] =='0' || str[i]=='u'){
//        pre = true;
//      }
// }
// console.log(pre)

let str = "avinaw";
let N = 6;
 let newStr = "";
    for(let i=N-1; i>=0; i--) {
        newStr += str[i];
    }
if (newStr == str) {
      console.log('Yes');
  } else {
      console.log('No');
  }
