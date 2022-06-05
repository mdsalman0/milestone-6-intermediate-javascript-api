const numbers = [5, 13, 7, 18, 4, 94, 44, 2, 9];
const bigNumbers = numbers.filter(Number => Number > 20);
const smallNumbers = numbers.filter(Number => Number < 20);

// console.log(smallNumbers);

const products = [
    {name: 'computer', price: 20000, color: 'black'},
    {name: 'mobile', price: 15000, color: 'silver'},
    {name: 'microphone', price: 1000, color: 'black'},
    {name: 'book', price: 50, color: 'red'},
    {name: 'pen', price: 10, color: 'yellow'},
]
const expensive = products.filter(product => product.price < 100);
// console.log(expensive);
const blacks = products.filter(product => product.color == 'black');
// console.log(blacks);

const whiteItem = products.find(product => product.color == 'red');
console.log(whiteItem);