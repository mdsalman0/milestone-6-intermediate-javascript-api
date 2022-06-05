/* module: 31 er 2 = dom.js */
// 1.jodi ekta container er border dite hoy tahole id diye age button nite hobe er container id ke nite hobe.
document.getElementById('add-border').addEventListener('click',function(){
    const container = document.getElementById('friends-container');
     container.style.border = '2px solid red';
 
 });
// 2. jodi onek gulo class conten ke background dite hoy tahole onckile diye age button nite hobe er pore bitore for diye korte hobe.
function addBackground(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.background = '#ddd';
        friend.style.padding = '5px';
        friend.style.marginBottom = '5px'
    }
} 
// 3.jodi container er moddhe notun element add kore hoy tahole 3 ta jinis korte hobe .
// 1.pothome button id ke niye aste hobe er pore container id ke niye aste hobe.
// 2.innerHTML=`` code er bitor likhte hobe.
// 3.container ke appendChild korte hobe.


/* module: 31 er 3 = let.const.js */
// 1.what is EcmaScript (google koro)
// 2.EcmaScript 6 ke ES6 bole
// 3.Tc 39 ki (google koro)
// 4.const diye variable diklar korle setar man cheinj kora jay na.
// 4.let diye variable diklar korle setar man cheinj kora jay.


/* module: 31 er 4 = default-parameter.js*/
// 1.kono function er parameter er man jodi na deya hoy tahole seta 0 or je kono sonkha dile seta nibe.
ud:function add (num1, num2 = 0);


/* module: 31 er 5 = template-string.js */
// 1.line brack korar jono age \n bebohar kora hoto.
// 2.template literals diye ekadhik line likhe pelte parbe.seta korar jonno ``backcode bebohar korte hobe.
ud:const multiLineNew = `this is frist line
this is second line
this is third line
this is last line`
console.log(multiLineNew);
// 3.string er moddhe variable er man diye variable man bosanoke (string interpolation) bole.
// 4.template literals string er bitor icche moto javascript er code (expressions) likhte parbe.


/* module: 31 er 6 = arrow-function.js*/
// function 4 vabe kora jay.
// 1.function declaretion
// 2.function expression
// 3.function expression (anonymous)
// 4.arrow function


/* module: 31 er 7 = big-arrow.js*/
// arrow function likhte hole 3 ta jinis nite hobe
// 1.variable 2.parameter 3. parameter diklar korte hobe.
ud:const add = (num1,num2) => num1 + num2;


/* module: 31 er 8 = spread.js*/
// 1.array er upadan gulo nite ...bebohar korte hobe.
ud:const numbers = [23,65,87,78,86];
console.log(...numbers);
// 2.