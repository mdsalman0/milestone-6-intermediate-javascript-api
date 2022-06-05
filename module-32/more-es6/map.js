const numbers = [6,4,8,10];
const output2 =[];

// function doubleOld(number){
//     return number * 2
// }

const doubleIt = number => number * 2;

for(const number of numbers){
    const result = doubleIt(number);
    output2.push(result);
}
// console.log(output2);
//  const output = numbers.map(doubleIt)
// const output = numbers.map(number => number * 2);
const output = numbers.map(x => x * 2);
// console.log(output);

const squares = numbers.map(x => x * x);
console.log(squares);