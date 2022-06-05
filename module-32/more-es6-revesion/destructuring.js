const fish = {name: 'king Hilsah', price: 3000, id:89, phone: '0123455', adddress: 'cadpur', color: 'silver'}
// const phone = fish.phone;
// const price = fish.price;
// const name = fish.name;
// const id = fish.id;

// const {phone,id,price,name,color} = fish;

// console.log(phone,price);
// console.log(phone,name);
// console.log(phone,id);
// console.log(phone,color);
// console.log(phone);
// console.log(phone);

const company = {
    name: 'Gp',
    ceo: {id: 43, name: 'kalam', food: 'mango'},
    web:{work:'web development',
    employe: 234,
    framwork: 'react',tech:{first: 'html', second: 'css', third: 'js'}
 }
}
const {id, name} = company.ceo;
const {work, framwork} = company.web;
const {first, third} = company.web.tech;
console.log(id, name);
console.log(work, framwork);
console.log(first, third);
