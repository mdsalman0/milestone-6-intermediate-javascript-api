// let and const 
let phone = 'samsung j2';
friend = 'samsung j10'
// console.log(friend);

// default parameter
function mobile(array=[]){
    const numbers = array;
    return numbers;
}
const num = mobile();
console.log(num);

// templay string
const myNotes = `this is my notes:${friend}.this my best languas javascript`;
// console.log(myNotes);

// spread 
const numbers = [22,33,44,55,66];
const max = Math.max(...numbers);
// console.log(max);

// arrow function
const squear = x => x * x;
console.log(squear(10));

