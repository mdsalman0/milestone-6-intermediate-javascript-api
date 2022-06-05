
const numbers = [10,20,30,40];
const output2 = [];

const doubleIt = num => num * 2;

// for(const number of numbers){
//     const result = doubleIt(number);
//     output2.push(result);
// }
// console.log(output2);

// 1.loop through each element
// 2.for each element call the provided function 
// 3.result for each element will be stored in an array

const output = numbers.map(doubleIt); //option 1
// const output = numbers.map(number => number * 2); //option 2
const output = numbers.map(x => x * 2); //option 3
// console.log(output);

const squares = numbers.map(x => x * x);
console.log(squares);



