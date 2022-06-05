const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => displuBuddies(data))
}
loadBuddies();
const displuBuddies = data => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies')
    for(const buddy of buddies){
        const p = document.createElement('p');
        p.innerText = `name:${buddy.name.first}.phone:${buddy.phone}`;
        buddiesDiv.appendChild(p )
        console.log(buddy);
    }
}