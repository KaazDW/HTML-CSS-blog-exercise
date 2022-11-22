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
ContactValidation();
