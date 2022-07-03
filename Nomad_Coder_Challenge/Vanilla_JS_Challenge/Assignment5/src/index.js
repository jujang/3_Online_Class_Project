const body = document.querySelector('body');

const h1 = document.createElement('h1');
h1.innerText = 'Hello!';
h1.style.color = 'white';
body.appendChild(h1);

// const screenWidth = screen.width;

// function paintColor() {
//     if (innerWidth < screenWidth*0.5) {
//         body.style.backgroundColor = 'skyblue';
//     } else if (innerWidth < screenWidth*0.8) {
//         body.style.backgroundColor = 'purple';
//     } else {
//         body.style.backgroundColor = 'orange';
//     }
// }


function paintColor() {
    if (body.clientWidth < 500) {
        body.style.backgroundColor = 'skyblue';
    } else if (body.clientWidth < 1000) {
        body.style.backgroundColor = 'purple';
    } else {
        body.style.backgroundColor = 'orange';
    }
}

paintColor();
window.addEventListener('resize', paintColor);