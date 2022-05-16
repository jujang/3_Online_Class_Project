const body = document.querySelector("body");

const h1 = document.createElement('h1');
h1.innerText = 'Random Number Game';
body.appendChild(h1);

const h3 = document.createElement('h3');
const h3Span1 = document.createElement('span');
h3Span1.innerText = 'Generate a number between 0 and ';
h3.appendChild(h3Span1);
const inputNumberRange = document.createElement('input');
let numberRange = inputNumberRange.value;
h3.appendChild(inputNumberRange);
body.appendChild(h3);