console.log(">> JS FILE LOAD");
var nav = document.getElementById("nav");
act = false;

function mobilemenu() {
    if (act === false){
        nav.classList.remove("nonactive");
        nav.classList.add("active");
        act = true;
        console.log("menu : " + act);
    } else{
        nav.classList.remove("active");
        nav.classList.add("nonactive");
        act = false;
        console.log("menu : " + act);
    }
}


var headtitle = document.getElementById("title");
headtitle.innerHTML = "Hello";

setTimeout(() => {
    headtitle.innerHTML = "Hello";
}, "1000")


for(let i=10; i<0; i--){
    headtitle.innerHTML = "Good Bye";
    setTimeout(() => {
        headtitle.innerHTML = "Hello";
    }, "1000");
}

    
);

/*
function ContactValidation() {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var input = document.getElementById="email";
    var msg = document.getElementById="validatormsg";

    if (input.value.match(validRegex)) {
        msg.innerHTML = "Email Validé";
    } else {
        msg.innerHTML = "Email Erroné";
    }
}
ContactValidation();*/

document.getElementById('email').addEventListener('change', event => {
    if (event.target.value = '') {
        document.getElementById('msg').style.display = 'none';
    } else {
        document.getElementById('msg').style.display = 'flex';
    }
})

document.getElementById('contact-form').addEventListener('change', event => {
    if (
        document.getElementById('sujet-input').value != ''
        && document.getElementById('email-input').value != ''
        && document.getElementById('prenom-input').value != ''
        && document.getElementById('nom-input').value != ''
        && document.getElementById('message-textarea').value != ''
    ) {
        document.getElementById('form-button').removeAttribute('disabled')
    } else {
        document.getElementById('form-button').setAttribute('disabled', 'true')
    }
})


