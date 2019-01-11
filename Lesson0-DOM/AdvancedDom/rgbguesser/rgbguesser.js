var colors = randomizeColors();

var pickedColor = pickedColor();

//change the title depending on picked color
var rgbtitle = document.getElementById("rgbtitle");
rgbtitle.textContent = pickedColor;

//message display
var messageDisplay = document.getElementById("message");

//squares changing
var squares = document.querySelectorAll(".square");
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {
        //grab clicked color and compare to picked color;
        var clickedcolor = this.style.backgroundColor;
        //compare clicked value with pickedcolor
        if (clickedcolor === pickedColor) {
            messageDisplay.textContent = "Correct!"
            changeAllColor(pickedColor);
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

function changeAllColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickedColor() {
    var random = Math.floor(Math.random() * colors.length);
    return (colors[random]);
}

function randomizeColors() {
    var colors = [];
    for (var i = 0; i < 6; i++) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        colors[i] = `rgb(${r}, ${g}, ${b})`;
    }
    return colors;
}