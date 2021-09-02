const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
const duck = document.getElementById('duck');

var move = 75;
var hits = 1;
var miss = 1;

function fly(direction) {
    direction = direction.toLowerCase();

    var top = document.getElementById('duck').offsetTop;
    var left = document.getElementById('duck').offsetLeft;

    switch (direction) {
        case 'n':
            if (top <= 0) {} else {
                top = top - move;
                duck.style.top = top + "px";
            }
            break;
        case 'ne':
            if (top <= 0 || left >= 1650) {} else {
                left = left + move;
                duck.style.left = left + "px";
                top = top - move;
                duck.style.top = top + "px";
            }
            break;
        case 'e':
            if (left >= 1650) {} else {
                left = left + move;
                duck.style.left = left + "px";
            }
            break;
        case 'se':
            if (top >= 750 || left >= 1650) {} else {
                left = left + move;
                duck.style.left = left + "px";
                top = top + move;
                duck.style.top = top + "px";
            }
            break;
        case 's':
            if (top >= 750) {} else {
                top = top + move;
                duck.style.top = top + "px";
            }
            break;
        case 'sw':
            if (top >= 750 || left <= 0) {} else {
                left = left - move;
                duck.style.left = left + "px";
                top = top + move;
                duck.style.top = top + "px";
            }
            break;
        case 'w':
            if (left <= 0) {} else {
                left = left - move;
                duck.style.left = left + "px";
            }
            break;
        case 'nw':
            if (top <= 0 || left <= 0) {} else {
                left = left - move;
                duck.style.left = left + "px";
                top = top - move;
                duck.style.top = top + "px";
            }
            break;
        default:
            break;
    }
}

function moveDuck() {
    setInterval(function () {
        fly(directions[Math.floor(Math.random() * directions.length)]);
    }, 500)
}

moveDuck();

function score(hit) {
    if (hits < 21 && miss < 21) {
        switch (hit) {
            case 0:
                document.getElementById('hit').innerText = hits++;
                break;
            case 1:
                document.getElementById('miss').innerText = miss++;
                break;
            default:
                break;
        }
    }
    if (hits == 21) {
        document.getElementById("win").classList.remove("d-none");
    } else if (miss == 21) {
        document.getElementById("lose").classList.remove("d-none");
    }
}

function restart(){
    window.location.reload();
}