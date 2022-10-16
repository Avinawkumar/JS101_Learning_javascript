// Problem 3: Print a box patterns using *
// **********
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// **********

let N=10;
for(let i=1; i<=N; i++){
  bag="";
  for(let j=1; j<=N; j++){
    if(i==1 || i==10){
       bag+="*";
    } else{
      if(j==1 || j==10){
        bag+="*";
      } else{
        bag+=" ";
      }
    }
   
  }
  console.log(bag);
}
