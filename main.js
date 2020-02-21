let startBtn = document.getElementById('start');
let turn = document.getElementById('turn');
let turnX = document.getElementById('x-turn');
let turnO = document.getElementById('o-turn');
let board = document.querySelectorAll('.board');
// let rows = board.childNodes;

let roles = ['x', 'o'];
let whoNow = roles[0];

function updateStatus() {
    whoNow = roles[0];
    turnX.removeAttribute("hidden", "");
    startBtn.setAttribute("disabled", "");

}

startBtn.addEventListener('click', updateStatus);

for (let row of board) {
    let cells = row.childNodes;
    for (let cell of cells) {
        cell.addEventListener('click', (event) => { event.target.textContent = whoNow; });
    };
}
