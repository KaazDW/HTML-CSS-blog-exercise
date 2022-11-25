console.log(">> JS FILE LOAD");

// RESPONSIVE HAMBURGER MENU
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


// TP 4 EXO 1

document.getElementById('msg').style.display = 'none';
document.getElementById('msg-label').style.display = 'none';

document.getElementById('email').addEventListener('change', event => {
    if (event.target.value != '') {
        document.getElementById('msg').style.display = 'block';
        document.getElementById('msg-label').style.display = 'block';
    }
})




// TP 4 EXO 2

var contactbutton = document.getElementById('submit-button-contact');
contactbutton.setAttribute('disabled', 'true');
contactbutton.style.background = "black";
contactbutton.style.color = "grey";
contactbutton.style.border = "1px solid grey";

document.getElementById('form-contact').addEventListener('change', event => {
    if (
        document.getElementById('subject').value != ''
        && document.getElementById('email').value != ''
        && document.getElementById('name').value != ''
        && document.getElementById('surname').value != ''
        && document.getElementById('msg').value != ''
    ) {
        document.getElementById('submit-button-contact').removeAttribute('disabled')
        contactbutton.style.background = "lightblue";
        contactbutton.style.color = "black";
        contactbutton.style.border = "1px solid white";
    }
})



// TP 4 EXO 3

var contactbutton = document.getElementById('submit-button-contact');
var obli = document.getElementById('obligatoire');
document.getElementById('subject').value != '';


function subsubmit(){
    if(document.getElementById('email-sub').value === ''){
        obli.innerHTML = 'champs obligatoire';
    }

}