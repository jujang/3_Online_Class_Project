const timeContainer = document.querySelector("#clock");

function SetTiming() {
    let current = new Date();
    let currentHour = current.getHours().toString().padStart(2, '0');
    let currentMinute = current.getMinutes().toString().padStart(2, '0');
    let currentSecond = current.getSeconds().toString().padStart(2, '0');

    timeContainer.innerText = `${currentHour}:${currentMinute}:${currentSecond}`;
}

SetTiming();
setInterval(() => SetTiming(), 1000);
