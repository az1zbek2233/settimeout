let hoursel = document.querySelector(".hours");
let minutesel = document.querySelector(".minutes");
let secondsel = document.querySelector(".seconds");

setInterval(function () {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hoursel.textContent = hours;
    minutesel.textContent = minutes;
    secondsel.textContent = seconds;
}, 1000)


