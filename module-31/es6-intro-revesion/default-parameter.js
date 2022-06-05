// jodi function ke call korar pore num2 er man na dewya hoy tahole setar man 0 nibe 
function add(num1,num2 = 0){
    // option 1
    // num2 = num2 || 0; 
    // option 2
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}
const result = add(15);
console.log(result);

// jodi function ke call korar pore last er man na dewya hoy tahole setar man chowdhury nibe 
function fullName(first,last = 'chowdhury'){
    const name = first + ' '+last;
    return name;
}
const names = fullName('mamun','khan');
console.log(names);