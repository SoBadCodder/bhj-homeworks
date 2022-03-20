let img = document.getElementById("cookie");
let counter = document.getElementById("clicker__counter");
let speed = document.getElementById("clicker__speed");
let prCounter = counter.textContent;
const changeSpeed = function () {
    speed.textContent = (counter.textContent - prCounter)*0.5;
    prCounter = counter.textContent;
}

img.onclick = () => {
    counter.textContent++;
    if(counter.textContent % 2 == 0){
        img.width -= 20;
        img.height -= 20;
    } else {
        img.width += 20;
        img.height += 20;
    }
};
const idTimer = setInterval(changeSpeed, 500);