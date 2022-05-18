'use strict';

const clockTitle = document.querySelector(".js-clock");


const christmas = new Date('December 25, 2022');


function calculator() {
    let thidDay = new Date();

    let gap = christmas - thidDay;
    
    let gapTotalSecond = Math.floor(gap/1000);
    let DSecond = (gapTotalSecond%60).toString().padStart(2, '0');
    
    let gapTotalMinute = Math.floor(gapTotalSecond/60);
    let DMinute = (gapTotalMinute%60).toString().padStart(2, '0');
    
    let gapTotalHour = Math.floor(gapTotalMinute/60);
    let DHour = (gapTotalHour%24).toString().padStart(2, '0');
    
    let gapTotalDay = Math.floor(gapTotalHour/24);
    let DDay = (gapTotalDay).toString();

    let DDayText = `${DDay}d ${DHour}h ${DMinute}m ${DSecond}s`;
    
    clockTitle.innerText = DDayText;
}


calculator();
setInterval(calculator, 1000);
