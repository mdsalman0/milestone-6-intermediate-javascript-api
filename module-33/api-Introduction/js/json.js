// javascript object
const user = {name: 'amir', id: 43, job: 'actor'};
const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);

const shop = {
    name: 'alia store',
    address: 'ranbir road',
    profit: 15000,
    products: ['laptop','mobile', 'hedPhone'],
    owner: {
        name: 'sakib khan',
        profession: 'actor',

    },
    isExpensive: false,
};

const shopStringifide = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringifide);
const converted = JSON.parse(shopStringifide);
console.log(converted);