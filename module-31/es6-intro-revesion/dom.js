document.getElementById('add-border').addEventListener('click',function(){
   const container = document.getElementById('friends-container');
    container.style.border = '2px solid red';

});

function addBackground(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.background = '#ddd';
        friend.style.padding = '5px';
        friend.style.marginBottom = '5px'
    }
}  

document.getElementById('add-friend').addEventListener('click',function(){
   const container = document.getElementById('friends-container');
   const friendDiv = document.createElement('div');
   friendDiv.classList.add("friend");
    friendDiv.innerHTML=`
        <h3 class="frined-name">new friend</h3>
        <p>Officia quidem saepe quasi odio.</p>
    `;
    container.appendChild(friendDiv)
})