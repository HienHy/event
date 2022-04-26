let elUsername=document.getElementById('username');
let elMsg= document.getElementById('feedback');
let checkUsername = (minLength) => {
    if (elUsername.value.length<minLength){
        elMsg.innerHTML='Username must be ' + minLength + 'characters or more';

    }else {
        elMsg.innerHTML='';
    }
}

if (elUsername.addEventListener) {
    elUsername.addEventListener('blur', function () {
        checkUsername(5);
    }, false);
}else {
    elUsername.attachEvent('onblur',function () {
        checkUsername(5);

    });
}