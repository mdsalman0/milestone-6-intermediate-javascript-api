let blance2 = 1240;
blance2 = 1000;
console.log(blance2);
const username = 'mahbub';
const weTogether = 'ami '+ username;
console.log(weTogether);

// const dile error dibe let dite hobe kintu const diye push()kora jabe.
const numbers = [44,88,66,55,77];
// numbers = [99,122,145]; //not allowed
numbers.push(100);
numbers[1] = 333; // 88 oikhane 333 hobe

for(let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

const student = {roll: 10, name: 'sakib', age:20};
student.name = 'mamun';
// student = {name:'saful', age: 55, roll: 55}; //not allowed