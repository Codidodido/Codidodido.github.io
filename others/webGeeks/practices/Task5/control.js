let modButton = document.getElementById("mod-button");
let background = document.body;
let textes = document.getElementsByClassName("text");
let mod = 1;

function ChangeMod() {
    mod = mod * -1;
    if (mod === -1) {
        modButton.innerHTML = "🌚";
        background.style.backgroundColor = "black";
        for (let index = 0; index < textes.length; index++) {
            textes[index].style.color= "white";
        }
    } else {
        modButton.innerHTML = "🌞";   
        background.style.backgroundColor = "white";
        for (let index = 0; index < textes.length; index++) {
            textes[index].style.color= "black";
        }
    }
}