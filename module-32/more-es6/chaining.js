// declar variable based on the name of an object property
const myObject = {x:2, y:50, z:600, a:25, b:68};
const {x,b} = myObject;
// console.log(x.b);  

// destructuring array
const [p,q] = [33,44];
// console.log(p,q);


const [best, faltu] = ['mamun','daower'];
// console.log(best,faltu);

const {sku,soil,money,color} = {sku: 'blue', soil:'matti', color: 'red', money: 500}
// console.log(sku,soil,money,color);

//chaining
const company ={
    name: 'Gp', 
    ceo:{name: 'sakib',id:1,address:'dhaka'},
    web:{work:'web development',
    frameWork:'value js',
    emp:30, 
    tech:{first: 'html',
     second: 'css', 
     third: 'javascript'}
    },
};

// console.log(company.web.tech.third);
console.log(company?.bak?.tech.third);