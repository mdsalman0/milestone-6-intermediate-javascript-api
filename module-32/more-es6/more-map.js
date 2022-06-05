const friends = [' mamun','sapin','dalower','emran'];
const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);

const products = [
    {name: 'computer', price: 20000, color: 'black'},
    {name: 'mobile', price: 15000, color: 'silver'},
    {name: 'microphone', price: 1000, color: 'black'},
    {name: 'book', price: 50, color: 'red'},
    {name: 'pen', price: 10, color: 'yellow'},
]
const productsName = products.map(pd => pd.name);
const productsPrice = products.map(pd => pd.price);
// products.map(pd => console.log(pd));
products.forEach(pd => console.log(pd));
// console.log(productsName);
// console.log(productsPrice);

