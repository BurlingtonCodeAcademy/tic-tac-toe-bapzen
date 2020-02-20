let startBtn = document.getElementById('start');
let turn = document.getElementById('turn');
let turnX = document.getElementById('x-turn');
let turnO = document.getElementById('o-turn');

function updateStatus () {
    
    turnX.setAttribute("hidden");
    startBtn.setAttribute("disabled", "");

}

function takeTurn () {
    
}

startBtn.addEventListener('click', updateStatus);

board.addEventListener('click', );