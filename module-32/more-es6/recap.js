// let and const
const name = 'mamun';
let phone = 'samsung j2';
phone = 'samsung j5'
// console.log(phone);

//defaule parameter 
function maxNumber(array =[]){
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);

// tempalte string
const myNotes =`i'm salman,i'm good boy,i am stading, my country is bangladesh,my city feni,my best friend: ${name}.my phone name: ${phone}`;
// console.log(myNotes);

// spread or three dots (...)

// arrow function
const squrae = x => x * x;

