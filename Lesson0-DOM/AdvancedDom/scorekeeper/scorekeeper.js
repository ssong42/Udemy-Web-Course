var p1button = document.getElementById("player1");
var p2button = document.getElementById("player2");
var p1display = document.getElementById("p1score");
var p2display = document.getElementById("p2score");

var resetbutton = document.getElementById("reset");

var p1score = 0;
var p2score = 0;
var gameover = false;

p1button.addEventListener("click", () => {
    if (gameover == false) {
        p1score++;
        p1display.textContent = p1score;
    }
    if (p1score >= 5 && p1score >= p2score + 2 && !gameover) {
        p1display.classList.add("winner");
        gameover = true;
    }
})
p2button.addEventListener("click", () => {
    if (gameover == false) {
        p2score++;
        p2display.textContent = p2score;
    }
    if (p2score >= 5 && p2score >= p1score + 2 && !gameover) {
        p2display.classList.add("winner");
        gameover = true;
    }
})
resetbutton.addEventListener("click", () => {
    p1score = 0;
    p2score = 0;
    p2display.textContent = p2score;
    p1display.textContent = p1score;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameover = false;
})

