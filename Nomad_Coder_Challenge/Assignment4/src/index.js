// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

// 왜인지 import 저 구문이 있는 상태에서는 내 브라우저 환경에서 에러가 꼭 발생함..;;

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const h2Container = document.querySelector("h2");

const superEventHandler = {
    mouseoverEvent: function() {
        h2Container.innerText = "The mouse is here!";
        h2Container.style.color = colors[0];
    },
    mouseoutEvent: function() {
        h2Container.innerText = "The mouse is gone!";
        h2Container.style.color = colors[1];
    },
    resizeEvent: function() {
        h2Container.innerText = "You just resized!"
        h2Container.style.color = colors[2];
    },
    mouseRightClickEvent: function() {
        h2Container.innerText = "That was a right click!"
        h2Container.style.color = colors[3];
    }
};

h2Container.addEventListener("mouseover", superEventHandler.mouseoverEvent);
h2Container.addEventListener("mouseout", superEventHandler.mouseoutEvent);
window.addEventListener("resize", superEventHandler.resizeEvent);
window.addEventListener("contextmenu", superEventHandler.mouseRightClickEvent);
