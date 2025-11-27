/*Yvonne Scarlett Arriola Lerin 
CART 211 - Final Project*/

//Likes page4
function like() {
    let c = document.getElementById("count");
    let n = number(c.innerText);
    c.innerText = n + 1;
}

//Fade out image page9
function fadeOutImage() {
    let img = document.getElementById("fadeImage");
    img.style.opacity = 0;
    setTimeout(() => {
        window.location.href = "page10.html";
    }, 4000);
}

//multiple clicks page8
let clicks = 0;
function clickProgress() {
    clicks++;

    if (clicks > 15) {
        window.location.href = "page9.html";
    }
}

