'use strict';

const body = document.querySelector("body");

const h1 = document.createElement('h1');
h1.innerText = 'Random Number Game';
body.appendChild(h1);

const h3 = document.createElement('h3');
const h3Span1 = document.createElement('span');
h3Span1.innerText = 'Generate a number between 0 and ';
h3.appendChild(h3Span1);
const inputNumberRange = document.createElement('input');
let numberRange;
h3.appendChild(inputNumberRange);
body.appendChild(h3);

const guess = document.createElement('div');
const guessSpan = document.createElement('span');
guessSpan.innerText = 'Guess the number: ';
const guessInput = document.createElement('input');
let guessingNum;
const guessButton = document.createElement('button');
guessButton.innerText = 'play!';
guess.appendChild(guessSpan);
guess.appendChild(guessInput);
guess.appendChild(guessButton);
body.appendChild(guess);

const state = document.createElement('div');
const stateSpan1 = document.createElement('span');
const stateSpan2 = document.createElement('span');
state.appendChild(stateSpan1);
state.appendChild(stateSpan2);
body.appendChild(state);

const b = document.createElement('b');
body.appendChild(b);



function inputCheck(numberRange, guessingNum){
    if(numberRange != null && numberRange >= 0){
        if(guessingNum != null && guessingNum >= 0 && guessingNum <= numberRange) {
            return 1;
        } else {
            alert('Please enter a number greater than or equal to 0 and less than or equal to ' + numberRange + ' to the second blank');
            return 0;
        }
    } else {
        alert('Please write 0 or greater than 0 to the first blank');
        return 0;
    }
}

function createRandomNum(numberRange){
    let randomNum = Math.floor(Math.random()*(numberRange+1));
    return randomNum;
}
function doGame(randomNum){
    let result;
    if(randomNum == guessingNum) {
        result = 'You won!';
        return result;
    } else {
        result = 'You lost!';
        return result;
    }
}

function inputText(guessingNum, randomNum, result) {
    stateSpan1.innerText = 'You chose: ' + guessingNum;
    stateSpan2.innerText = ', the machine chose: ' + randomNum + '.';
    b.innerText = result;
}


function printResult(){
    numberRange = parseInt(inputNumberRange.value, 10);
    guessingNum = parseInt(guessInput.value, 10);
    if(inputCheck(numberRange, guessingNum)) {
        let randomNum = createRandomNum(numberRange);
        let result = doGame(randomNum);
        inputText(guessingNum, randomNum, result);
    };
}

guessButton.addEventListener('click', printResult);
