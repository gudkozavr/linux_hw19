console.log("Nastyas");
function multiply(arr) {
  let mult = 1;
  for (let i = 0; i < arr.length; i++) {
    mult *= arr[i];
  }
  return mult;
}
const num = [4, 6, 7, 7, 3,];
multiply(num);
console.log(multiply(num));

// const num = [4, 6, 7, 7, 3,];

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


// getSum(num);

// const nummer = [4, 6, 7, 7, 9, 3,];


// function getMaxNum (arr) {
//   let n = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (n < arr[i]) {n = arr[i]}; 

//    }
  

   

  
  
//    console.log (n);
//     return n
   
//   }


// getMaxNum(nummer);
// const num = [4, 6, 7, 7, 3,];
// console.log(num);

// function multyNum (arr) {

  

//   for (i = 0; i < arr.length; i++) {
//    arr[i] = arr[i] * 2;

//   }
  
//   console.log(arr);
  
//   // return Нужен ретерн или нет?;
// }

// multyNum(num);
// // console.log(num);


// const contForNum = [4, 6, 7, 7, 3,];

// function checkNum (num, arr) {
  
//   for (i = 0; i < arr.length; i++) {
//     if (arr [i] === num) {
//       return "we have this number";
//     }
//     return "we don't have this number"; 
//   }


// }
// console.log (checkNum(7, contForNum))

// // const result = checkNum (9, contForNum);

// // console.log(result);

// const contForNum = [4, 6, 7, 7, 3];

// function lookingValue(arr) {

//   let x = 0;
//   for(i = 0; i < arr.length; i++) {
//  x += arr[i];

// }

// let result = x / arr.length;
// console.log(result);
// return result;
//   }


// lookingValue(contForNum);
// console.log(contForNum.length)

// function infoFunct (itsName, itsFam) {

//   let name = itsName;
//   let familia = itsFam;


const keys = []


function find (keys, etwas) {

  const result = {};
  for(let i - 0; i < keys.length; i++) {

    result[keys[i]] = etwas[i];

    console.log(keys, etwas);
    return result
  }
}
 