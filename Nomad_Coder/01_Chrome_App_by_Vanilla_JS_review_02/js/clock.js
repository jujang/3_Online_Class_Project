const clock = document.querySelector('#clock');


function showCurrentTime() {
    let now = new Date();
    let nowHour = now.getHours().toString().padStart(2, '0');
    let nowMinute = now.getMinutes().toString().padStart(2, '0');
    let nowSecond = now.getSeconds().toString().padStart(2, '0');
    
    clock.innerText = `${nowHour}:${nowMinute}:${nowSecond}`;
}

showCurrentTime();
setInterval(() => showCurrentTime(), 1000);
