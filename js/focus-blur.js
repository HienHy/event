

function checkUsername (){
    let username=el.value;
    if (username.length<5){
        elMsg.textContent = 'warning';
        elMsg.textContent='not long enough,yet...';
    } else {
        elMsg.textContent='';
    }
}
function tipUsername(){
    elMsg.textContent='tip';
    elMsg.innerHTML='username must be at least 5 character';
}
let el =document.getElementById('username');
let elMsg=document.getElementById('feedback');

el.addEventListener('focus',tipUsername,false);
el.addEventListener('blur',checkUsername,false);
