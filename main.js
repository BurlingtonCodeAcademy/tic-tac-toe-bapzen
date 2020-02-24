let startBtn = document.getElementById('start');
let turn = document.getElementById('turn');
let turnX = document.getElementById('x-turn');
let turnO = document.getElementById('o-turn');
let badTurn = document.getElementById('bad-move');
const board = document.querySelectorAll("div.board");

let takenCells = document.getElementsByClassName("taken");

const roles = ['x', 'o'];
let whoNow = 'x';
turnX.setAttribute("hidden", "");
turnO.setAttribute("hidden", "");
badTurn.setAttribute("hidden", "");
let winner;
let turnCount = 0;
// let winMsg = document.getElementsByTagName("h2");
// winMsg.setAttribute("hidden", "");

let moves = ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n']

// let wins = {

//     r1: [moves[0], moves[1], moves[2]],
//     r2: [moves[3], moves[4], moves[5]],
//     r3: [moves[6], moves[7], moves[8]],
//     c1: [moves[0], moves[3], moves[6]],
//     c2: [moves[1], moves[4], moves[7]],
//     c3: [moves[2], moves[5], moves[8]],
//     d1: [moves[0], moves[4], moves[8]],
//     d2: [moves[2], moves[4], moves[6]]
let r1 = moves.slice(0, 3).every(v => (v === roles[0] && v !== 'n') || (v === roles[1] && v !== 'n'));
let r2 = moves.slice(3, 6).every(v => (v === roles[0] && v !== 'n') || (v === roles[1] && v !== 'n'));
let r3 = moves.slice(6, 9).every(v => (v === roles[0] && v !== 'n') || (v === roles[1] && v !== 'n'));
let c1 = [moves[0], moves[3], moves[6]].every(v => (v === roles[0] && v !== 'n') || (v === roles[1] && v !== 'n'));
let c2 = [moves[1], moves[4], moves[7]].every(v => (v === roles[0] && v !== 'n') || (v === roles[1] && v !== 'n'));
let c3 = [moves[2], moves[5], moves[8]].every(v => (v === roles[0] && v !== 'n') || (v === roles[1] && v !== 'n'));
let d1 = [moves[0], moves[4], moves[8]].every(v => (v === roles[0] && v !== 'n') || (v === roles[1] && v !== 'n'));
let d2 = [moves[2], moves[4], moves[6]].every(v => (v === roles[0] && v !== 'n') || (v === roles[1] && v !== 'n'));

let winning = [r1, r2, r3, c1, c2, c3, d1, d2];
let winSome;

// let wins = [


// r2: Array.of(moves.slice(3, 5)),
// r3: Array.of(moves.slice(6, 9)),
// c1: Array.of(moves[0], moves[3], moves[6]),
// c2: Array.of(moves[1], moves[4], moves[7]),
// c3: Array.of(moves[2], moves[5], moves[9]),
// d1: Array.of(moves[0], moves[4], moves[9]),
// d2: Array.of(moves[2], moves[4], moves[7])

// ]

function updateStatus() {
    turnX.removeAttribute("hidden");
    startBtn.removeAttribute("disabled");

}



function gamePlay() {


    // //Begin click Event Listeners for taken cell:
    document.getElementById("cell-0").addEventListener('click', (event) => { if (event.target.className === "taken") { badTurn.removeAttribute("hidden"); } });
    document.getElementById("cell-1").addEventListener('click', (event) => { if (event.target.className === "taken") { badTurn.removeAttribute("hidden"); } });
    document.getElementById("cell-2").addEventListener('click', (event) => { if (event.target.className === "taken") { badTurn.removeAttribute("hidden"); } });
    document.getElementById("cell-3").addEventListener('click', (event) => { if (event.target.className === "taken") { badTurn.removeAttribute("hidden"); } });
    document.getElementById("cell-4").addEventListener('click', (event) => { if (event.target.className === "taken") { badTurn.removeAttribute("hidden"); } });
    document.getElementById("cell-5").addEventListener('click', (event) => { if (event.target.className === "taken") { badTurn.removeAttribute("hidden"); } });
    document.getElementById("cell-6").addEventListener('click', (event) => { if (event.target.className === "taken") { badTurn.removeAttribute("hidden"); } });
    document.getElementById("cell-7").addEventListener('click', (event) => { if (event.target.className === "taken") { badTurn.removeAttribute("hidden"); } });
    document.getElementById("cell-8").addEventListener('click', (event) => { if (event.target.className === "taken") { badTurn.removeAttribute("hidden"); } });

    // Place click Event Listeners for playing turns:
    document.getElementById("cell-0").addEventListener('click', (event) => { badTurn.setAttribute("hidden", ""); event.target.textContent = whoNow; event.target.className = "taken"; moves[0] = whoNow; changeTurn(); win(winning); }, { once: true });

    document.getElementById("cell-1").addEventListener('click', (event) => { badTurn.setAttribute("hidden", ""); event.target.textContent = whoNow; event.target.className = "taken"; moves[1] = whoNow; changeTurn(); win(winning); }, { once: true });

    document.getElementById("cell-2").addEventListener('click', (event) => { badTurn.setAttribute("hidden", ""); event.target.textContent = whoNow; event.target.className = "taken"; moves[2] = whoNow; changeTurn(); win(winning); }, { once: true });

    document.getElementById("cell-3").addEventListener('click', (event) => { badTurn.setAttribute("hidden", ""); event.target.textContent = whoNow; event.target.className = "taken"; moves[3] = whoNow; changeTurn(); win(winning); }, { once: true });
    document.getElementById("cell-4").addEventListener('click', (event) => { badTurn.setAttribute("hidden", ""); event.target.textContent = whoNow; event.target.className = "taken"; moves[4] = whoNow; changeTurn(); win(winning); }, { once: true });
    document.getElementById("cell-5").addEventListener('click', (event) => { badTurn.setAttribute("hidden", ""); event.target.textContent = whoNow; event.target.className = "taken"; moves[5] = whoNow; changeTurn(); win(winning); }, { once: true });
    document.getElementById("cell-6").addEventListener('click', (event) => { badTurn.setAttribute("hidden", ""); event.target.textContent = whoNow; event.target.className = "taken"; moves[6] = whoNow; changeTurn(); win(winning); }, { once: true });
    document.getElementById("cell-7").addEventListener('click', (event) => { badTurn.setAttribute("hidden", ""); event.target.textContent = whoNow; event.target.className = "taken"; moves[7] = whoNow; changeTurn(); win(winning); }, { once: true });
    document.getElementById("cell-8").addEventListener('click', (event) => { badTurn.setAttribute("hidden", ""); event.target.textContent = whoNow; event.target.className = "taken"; moves[8] = whoNow; changeTurn(); win(winning); }, { once: true });

}

function changeTurn() {

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
//  turnCount = turnCount++;
function win(arr) {


    winSome = winning.map(function (el) {
            el = el;
    });
    winning = winSome;

    // if (winSome.some(x => x === true)) {
    //     winner = whoNow;

    //     let winDiv = document.createElement("h4");
    //     let winMsg = document.createTextNode("Player" + whoNow + "wins!");
    //     winDiv.appendChild(winMsg);
    //     let winMsgDiv = document.getElementById("turn");
    //     document.insertAfter(winDiv, winMsgDiv);
    // } else {

    // };
   

};




startBtn.addEventListener('click', updateStatus);

gamePlay();


