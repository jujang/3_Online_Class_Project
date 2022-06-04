'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const nabvarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > nabvarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});


// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const link = event.target.dataset.link;
    if(link == null) {
        return;
    }

    const scrollTo = document.querySelector(link);
    const overTop = scrollTo.getBoundingClientRect().y;
    const distance = window.pageYOffset + overTop - (nabvarHeight-16); 

    // scrollTo.scrollIntoView();
    scroll({top:distance, behavior: 'smooth'});
});


// Handle click on "contact me"button on home
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}


// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});


