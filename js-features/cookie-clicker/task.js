let img = document.getElementById("cookie");
let counter = document.getElementById("clicker__counter");
let speed = document.getElementById("clicker__speed");
let prevTime = new Date();
let curTime;
img.onclick = () => {
    clearInterval(idTimer);
    curTime = new Date();
    console.log(curTime - prevTime);
    speed.textContent = (1000 / (curTime - prevTime));
    prevTime = curTime;
    counter.textContent++;
    if (counter.textContent % 2 == 0) {
        img.width -= 20;
        img.height -= 20;
    } else {
        img.width += 20;
        img.height += 20;
    }
    idTimer = setInterval(function () {
        speed.textContent = 0;
    }, 1000);
};