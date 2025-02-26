'use strict';

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const STAR_COUNT = 100
let result = ""
for(let i = 0; i < STAR_COUNT; i++){
    let new_img = document.createElement("img");
    new_img.setAttribute("src", "gifs/star.gif");
    new_img.style.left = `${randomNumber(0, 100)}%`
    new_img.style.right = `${randomNumber(0, 100)}%`
    new_img.style.top = `${randomNumber(0, 100)}%`
    setTimeout(() => {
        document.getElementById("galaxy").appendChild(new_img);
    }, i*10);
    
}