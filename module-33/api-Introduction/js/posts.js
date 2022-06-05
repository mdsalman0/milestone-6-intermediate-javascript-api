// function loadPost(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => displayPosts(data))
// }
// loadPost();
// function displayPosts(posts){
//     const postsContainer = document.getElementById('posts')
//     for(const user of posts){
//         const div = document.createElement('div');
//         div.classList.add('post');
//         div.innerHTML = `
//         <h2>${user.title}</h2>
//         <p>${user.body}</p>
//         `;
//         postsContainer.appendChild(div);
//         console.log(user);
//     }
// }

// function addPost(){
//     fetch('https://jsonplaceholder.typicode.com/posts',{
//         method: 'POST',
//         body:JSON.stringify({
//             title: 'My new post',
//             body: 'this is my post',
//             userId: '1'
//         }),
//         headers:{
//             'Content-type': 'application/json; charset=UTF-8',
//         }
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
// }


const premikas= { 
    name: 'keka ferdousi' ,
   cars: { brand: 'toyota'}
 }

 const{brand} = premikas.cars;
 console.log(brand);
















// const numbers = [23,55,33,98,33,99];
// for(let number of numbers){
//     let result = number * 10;
//     console.log(result);
// }
// for(let i = 0; i<numbers.length; i++){
//     let result = i * 10;
//     console.log(result);
// }