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



function updateStatus() {
    turnX.removeAttribute("hidden");
    startBtn.removeAttribute("disabled");

}

// let cells = {
//     "id": ["cell-1", "cell-2", "cell-3", "cell-4", "cell-5", "cell-6", "cell-7", "cell-8", "cell-9"]
// }


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
            document.getElementById("cell-0").addEventListener('click', (event) => { badTurn.setAttribute("hidden", ""); event.target.textContent = whoNow; event.target.className = "taken"; changeTurn(); }, {once: true});
            document.getElementById("cell-1").addEventListener('click', (event) => { badTurn.setAttribute("hidden", ""); event.target.textContent = whoNow; event.target.className = "taken"; changeTurn(); }, {once: true});
            document.getElementById("cell-2").addEventListener('click', (event) => { badTurn.setAttribute("hidden", ""); event.target.textContent = whoNow; event.target.className = "taken"; changeTurn(); }, {once: true});
            document.getElementById("cell-3").addEventListener('click', (event) => { badTurn.setAttribute("hidden", ""); event.target.textContent = whoNow; event.target.className = "taken"; changeTurn(); }, {once: true});
            document.getElementById("cell-4").addEventListener('click', (event) => { badTurn.setAttribute("hidden", ""); event.target.textContent = whoNow; event.target.className = "taken"; changeTurn(); }, {once: true});
            document.getElementById("cell-5").addEventListener('click', (event) => { badTurn.setAttribute("hidden", ""); event.target.textContent = whoNow; event.target.className = "taken"; changeTurn(); }, {once: true});
            document.getElementById("cell-6").addEventListener('click', (event) => { badTurn.setAttribute("hidden", ""); event.target.textContent = whoNow; event.target.className = "taken"; changeTurn(); }, {once: true});
            document.getElementById("cell-7").addEventListener('click', (event) => { badTurn.setAttribute("hidden", ""); event.target.textContent = whoNow; event.target.className = "taken"; changeTurn(); }, {once: true});
            document.getElementById("cell-8").addEventListener('click', (event) => { badTurn.setAttribute("hidden", ""); event.target.textContent = whoNow; event.target.className = "taken"; changeTurn(); }, {once: true});
           
           
       
    }

// Check if cell is already taken:

// function occupied () {
//     if (this.className === "taken") {
//         badTurn.removeAttribute("hidden");
//     };
// }

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

startBtn.addEventListener('click', updateStatus);
gamePlay();


