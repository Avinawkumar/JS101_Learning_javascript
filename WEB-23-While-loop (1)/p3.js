// Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit

let i = 1;
sum = 0;
//limit 20;
while (i <= 10) {
  if(i %3 == 0){
    sum += i;
  }
  
  i++
}
console.log(sum);