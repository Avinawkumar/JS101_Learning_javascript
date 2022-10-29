// Problem-4
// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average 

function sumOfElement(arr){
  let sum=0;
  for(let i=0; i<arr.length; i++){
    sum+=arr[i];
  }
  return sum;
}


function averArr(A){
  if (A==[]){
    return 0;
  } else{
  let avg= sumOfElement(A)/A.length;
  return avg;
  }
}

let A = [4,3,2,6,0];
let ans=averArr(A);
console.log(ans)