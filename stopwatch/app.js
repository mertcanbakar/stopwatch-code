let minutes = 0;
let seconds = 0;
let interval;
let getMinutes = document.querySelector(".minute");
let getSeconds = document.querySelector(".second");

let resetBtn = document.querySelector(".reset-button");
let startBtn = document.querySelector(".start-button");
let stopBtn = document.querySelector(".stop-button");

startBtn.addEventListener("click", () => {
    interval = setInterval(timer, 1000)
});
stopBtn.addEventListener("click", () => {
    clearInterval(interval)
});
resetBtn.addEventListener("click", () => {


    minutes = "00";
    seconds = "00";
    getMinutes.innerHTML = minutes;
    getSeconds.innerHTML = seconds;
    clearInterval(interval)
});

function timer() {
    if (seconds < 59) {
        seconds++
        const secondsValue = () => (getSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds);
        secondsValue();
    } if (seconds >= 59) {
        minutes++
        getMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
        seconds = 0;
        secondsValue();
    }
}


