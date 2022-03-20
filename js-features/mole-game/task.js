let winCount = document.getElementById("dead");
let loseCount = document.getElementById("lost");

function changeStatus() {
    if (this.classList.contains('hole_has-mole')) {
        winCount.textContent++;
    } else {
        loseCount.textContent++;
    }
    if (winCount.textContent > 9) {
        alert(`Вы победили! ${winCount.textContent} - ${loseCount.textContent}`);
        location.reload();
    }
    if (loseCount.textContent > 4) {
        alert(`Вы проиграли! ${winCount.textContent} - ${loseCount.textContent}`);
        location.reload();
    }
}

const holes = document.querySelectorAll('.hole-game > div');
for (let i = 0; i < holes.length; i++) {
    holes[i].onclick = changeStatus;
}