// JavaScript Document

const hamburger = document.querySelector(".hamburgerMenu");
const overlay = document.querySelector("navContent");
const fadespeed = 2; // snelheid van fade animatie

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    if (overlay.style.opacity>=1) {
        fade(overlay)
        hamburger.classList.toggle("active");
        console.log("fade")
    }
    else if (overlay.style.opacity<=0.1) {
        unfade(overlay)
        hamburger.classList.toggle("active");
        console.log("unfade")
    }
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * fadespeed / 10; // berekening haalt steeds een % weg van de opacity
    }, 50);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        element.style.opacity = 1;
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")"; 
        op += op * fadespeed / 10; // berekening haalt steeds een % bij van de opacity
    }, 10);
}


