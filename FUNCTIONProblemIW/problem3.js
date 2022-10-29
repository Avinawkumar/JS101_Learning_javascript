// Problem 3: Use the same function to print Non-Primes from 2 to a given limit
// let 2 to 33;


function checkPrime (n){
  let count=0;
  for(let i=1; i<=n; i++){
    if(n%i==0){
      count++;
    }
  }
  if(count==2){
    return true;
  } else {
    return false;
  }      
}

for(let i=2; i<=33; i++){
  let ans=checkPrime(i);
  if(ans == false){
    console.log(i, "is Not Prime");
  }
}