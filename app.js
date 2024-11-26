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
    
    // result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px #fff,`
}
// console.log(result.substring(0, result.length - 1))

// src: "gifs/star.gif";
// alt: "wow! so magical...";


// const switcher = document.querySelector(".btn");

// switcher.addEventListener("click", function() {
//     document.body.classList.toggle("light-theme");
//     document.body.classList.toggle("dark-theme");

//     const className = document.body.className;
//     if (className == "light-theme") {
//         this.textContent = "Dark";
//     } else {
//         this.textContent = "Light";
//     }

//     console.log('current class name: ' + className);
// });