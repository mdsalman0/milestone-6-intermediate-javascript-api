// declare variable based on the name of an object property
// Object theke man niye variable er moddhe rakha
const myObject = {a: 2, b: 44, x: 45, y: 55, z: 99};
const {x,y} = myObject;
console.log('myObject.p', myObject?.p?.q);

// destructuring array
// Array theke Array
const [p, q] = [77,99];
// console.log(p, q);
// object theke object
const {first, second, third} = {first:'mamun',second:'dalower',third:'sapin'};
// console.log(first, second, third);

// chaining
const company = {
    name: 'Gp',
    ceo: {id: 43, name: 'kalam', food: 'mango'},
    web:{work:'web development',
    employe: 234,
    framwork: 'react',
    tech:{first: 'html', second: 'css', third: 'js'}
 }
}

console.log(company?.web?.framwork);
console.log(company?.backend?.tech.second);