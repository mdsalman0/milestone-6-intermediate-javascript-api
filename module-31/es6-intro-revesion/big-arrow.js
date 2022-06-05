// arrow function likhte hole 3 ta jinis nite hobe
// 1.variable 2.parameter 3. parameter diklar korte hobe.
const add = (num1,num2) => num1 + num2;
const sum = add(50,20);
// console.log(sum);

// onek gulo parameter nile parameter er () lage.
const multiplay = (num1,num2,num3) => num1+num2+num3;
const result =multiplay(4,12,55);
// console.log(result);

// ekta parameter nile eivabe hoy.
const tenTime = (num) => num*10;
const output = tenTime(20);
// console.log(output);

// ekta parameter nile parameter er () lagena.
const fiveTime = num => num*5;
const value = fiveTime(44);
// console.log(value);

// kono parameter jodi na thake () shudhu backt nite hobe.
const getName = () => 'brandon sum';
const name = getName();
// console.log(name);

const doMath =(x,y)=>{
    const sum = x+y;
    const diff= x-y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}
const total = doMath(30,10);
console.log(total);

document.getElementById('my-btn').addEventListener(event => {
    
})