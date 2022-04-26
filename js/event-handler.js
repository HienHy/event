function checkUsername (){
    let elMsg=document.getElementById('feedback');
    if (this.value.length < 5) {
        elMsg.textContent = 'Username must be 5 characters or more';
    }else {
        elMsg.textContent='';
    }
}
let elUsername = document.getElementById('username');
elUsername.onblur=checkUsername;