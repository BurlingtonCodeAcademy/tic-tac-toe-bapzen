let startBtn = document.getElementById('start');
let turnMsg = document.getElementById('turn');

function updateStatus () {
    turnMsg.removeAttribute("hidden");
    startBtn.setAttribute("disabled", "");

}

startBtn.addEventListener('click', updateStatus);