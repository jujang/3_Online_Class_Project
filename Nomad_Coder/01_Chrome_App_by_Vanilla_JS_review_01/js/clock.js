
function SetTiming() {
    let current = new Date();
    let currentHour = current.getHours();
    let currentMinute = current.getMinutes();
    let currentSecond = current.getSeconds();

    // console.log(`${currentHour}:${currentMinute}:${currentSecond}`);

}

setInterval(() => SetTiming(), 1000);
