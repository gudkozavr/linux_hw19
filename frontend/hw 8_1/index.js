const num = [4, 6, 7, 7, 3];

function multiply(arr) {
  let mult = 1;
  for (let i = 0; i < arr.length; i++) {
    mult *= arr[i];
  }
  console.log(mult)
  return mult;
}

multiply(num);



const sum = [4, 6, 7, 7, 3];

function getSum (arr) {

  let sum = 0;
  let i = 0;
 
  while (i < arr.length) {
 sum = sum + arr[i];
 i++;
  }
  

  console.log(sum); 
  return sum;
  
}

getSum(sum);