console.log('hi');
function loadAlbam(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displayAlbam(data))
}
loadAlbam();

function displayAlbam(albums){
    const albamContainer = document.getElementById('albam');
    for(const album of albums){
        const p = document.createElement('p');
        p.classList.add('albam')
        p.innerHTML=`
        <h1>${album.id}</h1>
        <h3>${album.title}</h3>
        `;
        albamContainer.appendChild(p);
        console.log(album);
    }
}