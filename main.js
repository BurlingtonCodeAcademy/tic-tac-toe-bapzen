let startBtn = document.getElementById('start');
let turn = document.getElementById('turn');
let turnX = document.getElementById('x-turn');
let turnO = document.getElementById('o-turn');
let board = document.getElementsByClassName('board');


let roles = ['x', 'o'];
let whoNow = roles[0];

function updateStatus () {
    whoNow = roles[0];
    turnX.removeAttribute("hidden", "");
    startBtn.setAttribute("disabled", "");

}

function move (target) {
    event.target.textContent = whoNow;

    if (whoNow === 'x') {
        whoNow = roles[1];
    } else if (whoNow === 'o') {
        whoNow = roles[0];
    };
    
}

function doTurn () {
    for (let cell of board) {
        cell = board.getElementById('cell')
        cell.addEventListener('click', move)
    }


}


startBtn.addEventListener('click', updateStatus);

// board.addEventListener('click', );