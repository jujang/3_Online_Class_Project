const canvas = document.querySelector('#jsCanvas');
const range = document.querySelector('#jsRange');
const buttons = document.querySelectorAll('#button');
const FillButton = document.querySelector('#jsMode');
const saveButton = document.querySelector('#jsSave');
const ctx = canvas.getContext('2d');

const CANVAS_SIZE = 700;


let painting = false;
let filling = false;

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.fillStyle = '#2c2c2c';
ctx.strokeStyle = buttons[0].style.backgroundColor;
ctx.lineWidth = range.value;



function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.moveTo(x, y);
        ctx.beginPath();
    }else{
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function startFilling(){
    if(filling){
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
}

function startPainting(){
    painting = true;
}

function stopPainting(){
    painting = false;
}

function controlRange(){
    ctx.lineWidth = range.value;
}

function chagePaintColor(event){
    ctx.strokeStyle = event.target.style.backgroundColor;
    ctx.fillStyle =  event.target.style.backgroundColor;
}

function canvasModeChange(){
    if(FillButton.innerText == 'FILL'){
        filling = true;
        FillButton.innerText = 'PAINT';
    } else {
        filling = false;
        FillButton.innerText = 'FILL';
    }
}

function saveFile(){
    let imageURL = canvas.toDataURL();
    const link = document.createElement('a');
    link.download = 'imagefile';
    link.href = imageURL;
    link.click();
}

function preventCM(event){
    event.preventDefault();
}


if(canvas){
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseover', stopPainting);
    canvas.addEventListener('mousedown', startFilling);
    canvas.addEventListener('contextmenu', preventCM);
}

if(range){
    range.addEventListener('input', controlRange);
}

if(buttons){
    buttons.forEach(button => {
        button.addEventListener('click', chagePaintColor);
    });
}

if(FillButton){
    FillButton.addEventListener('click', canvasModeChange);
}

if(saveButton){
    saveButton.addEventListener('click', saveFile);
}