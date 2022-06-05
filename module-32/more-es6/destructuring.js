const sakib = {id: 60,name: 'mamun',price: 900,address: 'cadpur',phone:18900,dress:'silver',};

// const phone = sakib.phone;
// const price = sakib.price;
// const name = sakib.name;
// const id = sakib.id;

const {phone,price,id,address,name,dress} = sakib;

// console.log(phone, price);
// console.log(phone,phone);
// console.log(phone,id);
// console.log(phone,address);

const company ={
    name: 'Gp', 
    ceo:{name: 'sakib',id:1,address:'dhaka'},
    web:{work:'web development',frameWork:'value js',emp:30},
};
// const work = company.web.work;
// const frameWork = company.web.frameWork;
const {work,frameWork,emp} = company.web;
console.log(work,frameWork,emp);