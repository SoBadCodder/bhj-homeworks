const timer = document.getElementById("timer");
const changeTimer = function () {
    timer.textContent -= 1;
    if (Number(timer.textContent) < 1) {
        clearInterval(idTimer);
        alert("Вы победили в конкурсе!");
        location.reload();
    }
}
const idTimer = setInterval(changeTimer, 1000);