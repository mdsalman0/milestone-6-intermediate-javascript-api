// let and const
const name = 'mamun';
const sum =name +' spin';
// console.log(sum);

let names = 'mamun';
names = 'spin';
// console.log(names);

// template string
const mobile = {
    name: 'samsug j2',
    price: 20000,
    ram: 1.5,
    color :'silver',
    storage: '16gb'
}
const fullName = `this is: ${names}.mobile color: ${mobile.color}.mobile${mobile.price}`;
// console.log(fullName);

// arrow function
// 1.one parameter
const numbers = (num) => num % 5;
const num = numbers(38);
// console.log(num);

// 2.two parameter
const rollNumber = (num1,num2) =>{
    const sum = num1 + 2;
    const sum2 = num2 + 2;
    const total =sum + sum2;
    const result = total * 5;
    return result;
}
const total = rollNumber(20,10);

// console.log(total);
// 3.three parameter
const multifil = (num1,num2, num3= 7) => {
    const result = num1*num2*num3;
    return result;
}
const total2 = multifil(20,5);
// console.log(total2);

// map
const number = [20,30,40,50];
const number2 = number.map(x => x * 5);
// console.log(number2);

// fillter
const numberOdd =[2,43,8,91,4,20,13];
let temp = [];
const oddNumber = numberOdd.filter(x => {
    if(x % 2!= 0){
        // temp.push(x);
        console.log(x);
    }
    return temp;
} )


// find
const products = [
    {name: 'oppo',price: 2000, color: 'pink'},
    {name: 'samsung j5',price: 5000, color: 'silver'},
    {name: 'nokia',price: 1000, color: 'black'},
    {name: 'iphone',price: 3000, color: 'blue'},
]

const phoductsName = products.find(product=>product.price == 5000);
console.log(phoductsName);

// destructing
const item = {name1: 'mobile',price: 2000};
const {name1,price} = item; 
console.log(item);

// function three parameter
const sumNum = (num1,num2,num3)=>{
    const result = num1 + num2+ num3;
    return result;
}
const number4 = sumNum (10,20,7);
console.log(number4)