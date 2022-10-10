"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");


// alert("Draw your space invader here");

background();
avatar();

function background() {
    context.beginPath();
    context.rect(50, 50, 350, 350);
    context.fill();
    context.stroke();
}

function avatar() {
    context.fillStyle = "#66FF00";

    // eye
    context.fillRect(150, 100, 50, 50);
    context.fillRect(200, 100, 50, 50);
    context.fillRect(200, 150, 50, 50);
    context.fillRect(250, 100, 50, 50);

    // mouth
    context.fillRect(100, 300, 50, 50);
    context.fillRect(150, 315, 50, 50);
    context.fillRect(200, 330, 50, 50);
    context.fillRect(250, 315, 50, 50);
    context.fillRect(300, 300, 50, 50);

    // nose
    context.fillRect(200, 225, 50, 50);

    // sides
    context.fillRect(50, 50, 50, 50);
    context.fillRect(350, 50, 50, 50);

}