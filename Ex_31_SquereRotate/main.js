const btn = document.querySelector('button');
const square = document.querySelector('.square');
btn.style.transitionDuration = "0.5s";

let rotate = 0;
const rotateDeg = 10;

btn.addEventListener('click', function() {
    square.style.transform = `rotate(${rotate}deg)`;
    rotate += rotateDeg;
})