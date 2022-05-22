const clock = document.querySelector('#clock');

function getCurrentTime(){
    const current = new Date();
    let currentHour = current.getHours().toString().padStart(2, '0');
    let currentMinute = current.getMinutes().toString().padStart(2, '0');
    let currentSecond = current.getSeconds().toString().padStart(2, '0');
    clock.innerText = `${currentHour}:${currentMinute}:${currentSecond}`;
}

getCurrentTime();
setInterval(getCurrentTime, 1000);