const loadQutoes = ()=> {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQutoe(data))
}

const displayQutoe = quote => {
    const blogsQutoes = document.getElementById('quote');
    blogsQutoes.innerText = quote.quote;
}