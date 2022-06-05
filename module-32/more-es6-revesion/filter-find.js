// 
const numbers = [5, 55, 4, 55, 33, 9, 30];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 20);
// console.log(smallNumbers);

const products = [
    {name: 'watter bottol', price: 20, color: 'yellow'},
    {name: 'mobile phone', price: 20000, color: 'black'},
    {name: 'smart watch', price: 1000, color: 'black'},
    {name: 'book f', price: 500, color: 'red'},
    {name: 'pen f', price: 10, color: 'white'},
];
const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const blacks = products.filter(product => product.color == 'blue')
// console.log(blacks);

const white = products.find(product => product.color == 'white') ;
console.log(white);