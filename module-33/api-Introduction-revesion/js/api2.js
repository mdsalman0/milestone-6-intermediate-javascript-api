function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => display(data))
}

function display(posts){
    const ul =document.getElementById('usres')
    for(const user of posts){
        const li = document.createElement('li');
        li.innerText = `this is name:${user.name}.this is email:${user.email}`;
        ul.appendChild(li);
    }
}