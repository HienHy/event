let elUsername= document.getElementById('username');
let elMsg = document.getElementById('feedback');

function checkUsername(minLength) {
    if (elUsername.value.length < minLength){
        elMsg.innerHTML='Username must be ' + minLength + ' character or more';
    }else{
        elMsg.innerHTML='';
    }
}

elUsername.addEventListener('blur',function () {
    checkUsername(5);},false);