const clock = document.querySelector('#clock');

function measureTime() {
    let current = new Date();
    currentHour = current.getHours().toString().padStart(2, '0');
    currentMinute = current.getMinutes().toString().padStart(2, '0');
    currentSecond = current.getSeconds().toString().padStart(2, '0');
    clock.innerText = `${currentHour} : ${currentMinute} : ${currentSecond}`;
}

measureTime();
setInterval(measureTime, 1000);
