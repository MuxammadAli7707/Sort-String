// Problem 206

// let count = 0;
// function isPrimeNumber(n){
//   for(let i = 1; i <= n; i++){
//     let b = true;
//     for(let j = 2; j < i; j++){
//       if(i % j == 0){
//         b = false;
//         break
//       }
//     }
//     if(b == true && i !== 1){
//       count++;
//     }
//   }
//   return count;
// }
// console.log(isPrimeNumber(100));

// Problem 207

// let a = "- 5 + 3 - 9 + 8";

// function num(n) {
//   return Function("return" + n)()
// }
// console.log(num(a));

// Problem 208

// function getCharacterCount(a) {
//   let b = [...a];
//   console.log(b.length);
// }
// getCharacterCount("Joke😊");

// Problem 209;

// let string;
// function parseint(string){
//   if(string.match(/['0-9']/) && !string.includes('-')){
//     return string.length
//   }

//   if(string.match(/['0-9']/) && string.includes('-')){
//     return '-'+ string.length - 2
//   }

//   if(!string.match(/'[0-9]'/)){
//     return null
//   }
// }
// console.log(parseint("Bu manfiy son - 22 -")); 

// Problem 215

// let massArray = [1, -10, 2, 4, 1, 8];

// function sortMass(massArray){
//   for(let i = 0; i < massArray.length; i++){
//     for(let j = 0; j < massArray.length; j++){
//       if(massArray[j] > massArray[j + 1]){
//         let a = massArray[j + 1];
//         massArray[j + 1] = massArray[j];
//         massArray[j] = a;
//       }
//     }
//   }
//   return massArray;
// }
// console.log(sortMass(massArray));


// Probem 216

// let massArray = [1, -10, -332, 4, 1, 8];
// function sortMass(massArray){
//   let count = massArray[0];
//   for(let i = 0; i < massArray.length; i++){
//     if(massArray[i] < count){
//       count = massArray[i]
//     }
//   }
//   return count;
// }

// console.log(sortMass(massArray));

// Probem 217

// let sum = 10;
// function showMessage(sum){
//   let result = sum % 2 == 0 ? 'Juft': 'Toq';
//   console.log(result);
// }
// function oddOrEven(l){
//   showMessage(l);
// }
// oddOrEven(sum);

// Probem 218

// let elArr = [1, [2, [3, 4], 5], 6];
// let elNewArr = [];

// for(let i = 0; i < elArr.length; i++){
//   if(Number.isInteger(elArr[i])){
//     elNewArr.push(elArr[i]);
//   }if (Array.isArray(elArr[i])){
//     elArr[i].forEach((item) => {
//       elNewArr.push(item);
//     })
//   }
// }

// console.log(elNewArr);


// Probem 219

// let a = 35;
// let count = 1;
// for(i = 1; i <= a; i++) {
//   count *= i;
// }
// console.log(count);

// Probem 220

// function fact(n) {
//   return n == 1 ? 1 : n * fact(n - 1);
// }
// console.log(fact(5));



// const rec = function(n){
//   if(n === 1) return 1
//   return n * rec(n - 1)
// }
// console.log(rec(5));

// function factorial(x) {
//   if (x === 0) {
//     return 1;
//   }
//   else {
//     return x * factorial(x - 1);
//   }
// }
// const num = 5;
// if (num > 0) {
//   let result = factorial(num);
//   console.log(result);
// }