const user = {name: 'gorib amir', Id: 11, job: 'actor'};
const stringified = JSON.stringify(user);
// console.log(stringified);

const shop = {
    name: 'alia amir',
    address: 'ronbir rot',
    profit: 15000,
    owner: {
       name: 'alika batta',
       profession: 'actor',
       id: 44 
    },
    products: ['laptop', 'mobile', 'pc'],
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);