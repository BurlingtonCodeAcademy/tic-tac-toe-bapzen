let startBtn = document.getElementById('start');
let turn = document.getElementById('turn');
let turnX = document.getElementById('x-turn');
let turnO = document.getElementById('o-turn');
let board = document.querySelectorAll('.board');

const roles = ['x', 'o'];
let whoNow = 'x';
turnX.setAttribute("hidden", "");
turnO.setAttribute("hidden", "");

function updateStatus() {
    turnX.removeAttribute("hidden", "");
    startBtn.setAttribute("disabled", "");

}

function gamePlay() {
    for (let row of board) {
        let cells = row.childNodes;
        for (let cell of cells) {
            cell.addEventListener('click', (event) => { event.target.textContent = whoNow; changeTurn(); });
            
        };
    
    }
  
}

function changeTurn () {
    if (whoNow === 'x') {
        turnX.setAttribute("hidden", "");
        turnO.removeAttribute("hidden");
        whoNow = 'o';
    } else if (whoNow === 'o') {
        turnO.setAttribute("hidden", "");
        turnX.removeAttribute("hidden");
        whoNow = 'x';
    };
}

startBtn.addEventListener('click', updateStatus);
gamePlay();


