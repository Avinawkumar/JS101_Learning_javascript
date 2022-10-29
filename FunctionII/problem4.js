// Write a custom function that has the same behavior of inbuilt String Substring Function


let str="avinaw";
function substring( str,a, b){
  let bag="";
  for(let i=a; i<=b; i++){
    bag+=str[i];
  
  }
  return bag;
    
}
  

console.log(substring(str,2,5))
// substring("avinaw")