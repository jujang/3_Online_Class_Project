const canvas = document.querySelector('#jsCanvas');
const jsColors = document.querySelectorAll('#jsColors');
const range = document.querySelector('#jsRange');
const fillButton = document.querySelector('#jsMode');
const saveButton = document.querySelector('#jsSave');
const ctx = canvas.getContext('2d');

const CANVAS_SIZE = 700;
const DEFAULT_COLOR = '#2c2c2c';


ctx.fillStyle = 'white';
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.fillStyle = DEFAULT_COLOR;
ctx.strokeStyle = DEFAULT_COLOR;
ctx.lineWidth = range.value;


let painting = false;
let filling = false;


function canvasPaint(event){
    let x = event.offsetX;
    let y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else {
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}
function canvasFill(){
    if(filling){
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
}

function paintActive(){
    painting = true;
}
function paintInactive(){
    painting = false;
}

function preventRightClick(event){
    event.preventDefault();
}

if(canvas){
    canvas.addEventListener('mousemove', canvasPaint);
    canvas.addEventListener('mousedown', paintActive);
    canvas.addEventListener('mouseup', paintInactive);
    canvas.addEventListener('mouseover', paintInactive);
    canvas.addEventListener('contextmenu', preventRightClick);
    canvas.addEventListener('mousedown', canvasFill);
}


function rangeControl(event){
    ctx.lineWidth = range.value;
}
if(range){
    range.addEventListener('input', rangeControl);
}


function colorChange(event){
    let selectColor = event.target.style.backgroundColor;
    ctx.strokeStyle = selectColor;
    ctx.fillStyle = selectColor;
}
if(jsColors){
    jsColors.forEach(jsColor => jsColor.addEventListener('click', colorChange));
}


function modeChange(){
    if(fillButton.innerText == 'FILL'){
        fillButton.innerText = 'PAINT';
        filling = true;
    } else {
        fillButton.innerText = 'FILL';
        filling = false;
    }
}
if(fillButton){
    fillButton.addEventListener('click', modeChange);
}


function imageSave(){
    let imagefile = canvas.toDataURL();
    const link = document.createElement('a');
    link.href = imagefile;
    link.download = 'imagefile';
    link.click();
}
if(saveButton){
    saveButton.addEventListener('click', imageSave);
}