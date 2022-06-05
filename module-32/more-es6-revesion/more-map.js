const friends = ['tom hanks ', 'tom cruise', 'tom brady', 'tom solaiman'];

const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);

const products = [
    {name: 'watter bottol', price: 20, color: 'yellow'},
    {name: 'mobile phone', price: 20000, color: 'black'},
    {name: 'smart watch', price: 1000, color: 'black'},
    {name: 'book f', price: 500, color: 'red'},
    {name: 'pen f', price: 10, color: 'white'},
]
for(let i = 0; i<products.length; i++){
    console.log(products[i].name);
}
// const productsName = products.map(product => product.name);
// const productsPrice = products.map(product => product.price);
// // products.map(product => console.log(product));
// products.forEach(product => console.log(product))
// console.log(productsName);
// console.log(productsPrice);