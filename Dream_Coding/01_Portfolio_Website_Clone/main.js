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

    const homeSection = document.querySelector('#home');
    const homeSectionHeight = homeSection.getBoundingClientRect().height;
    const homeBtn = document.querySelector('[data-link="#home"]');
    const aboutSection = document.querySelector('#about');
    const aboutSectionHeight = aboutSection.getBoundingClientRect().height;
    const aboutBtn = document.querySelector('[data-link="#about"]');
    const skillsSection = document.querySelector('#skills');
    const skillsSectionHeight = skillsSection.getBoundingClientRect().height;
    const skillsBtn = document.querySelector('[data-link="#skills"]');
    const workSection = document.querySelector('#work');
    const workSectionHeight = workSection.getBoundingClientRect().height;
    const workBtn = document.querySelector('[data-link="#work"]');
    const testimonialsSection = document.querySelector('#testimonials');
    const testimonialsSectionHeight = testimonialsSection.getBoundingClientRect().height;
    const testimonialsBtn = document.querySelector('[data-link="#testimonials"]');
    const contactSection = document.querySelector('#contact');
    const contactSectionHeight = contactSection.getBoundingClientRect().height;
    const contactBtn = document.querySelector('[data-link="#contact"]');

    if(window.scrollY < homeSectionHeight - nabvarHeight) {
        homeBtn.classList.add('activeBtn');
        aboutBtn.classList.remove('activeBtn');
        skillsBtn.classList.remove('activeBtn');
        workBtn.classList.remove('activeBtn');
        testimonialsBtn.classList.remove('activeBtn');
        contactBtn.classList.remove('activeBtn');
    } else if (window.scrollY < homeSectionHeight + aboutSectionHeight - nabvarHeight){
        homeBtn.classList.remove('activeBtn');
        aboutBtn.classList.add('activeBtn');
        skillsBtn.classList.remove('activeBtn');
        workBtn.classList.remove('activeBtn');
        testimonialsBtn.classList.remove('activeBtn');
        contactBtn.classList.remove('activeBtn');
    } else if (window.scrollY < homeSectionHeight + aboutSectionHeight + skillsSectionHeight - nabvarHeight){
        homeBtn.classList.remove('activeBtn');
        aboutBtn.classList.remove('activeBtn');
        skillsBtn.classList.add('activeBtn');
        workBtn.classList.remove('activeBtn');
        testimonialsBtn.classList.remove('activeBtn');
        contactBtn.classList.remove('activeBtn');
    } else if (window.scrollY < homeSectionHeight + aboutSectionHeight + skillsSectionHeight + workSectionHeight - nabvarHeight){
        homeBtn.classList.remove('activeBtn');
        aboutBtn.classList.remove('activeBtn');
        skillsBtn.classList.remove('activeBtn');
        workBtn.classList.add('activeBtn');
        testimonialsBtn.classList.remove('activeBtn');
        contactBtn.classList.remove('activeBtn');
    } else if( window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        homeBtn.classList.remove('activeBtn');
        aboutBtn.classList.remove('activeBtn');
        skillsBtn.classList.remove('activeBtn');
        workBtn.classList.remove('activeBtn');
        testimonialsBtn.classList.remove('activeBtn');
        contactBtn.classList.add('activeBtn');
    } else if (window.scrollY <= homeSectionHeight + aboutSectionHeight + skillsSectionHeight + workSectionHeight + testimonialsSectionHeight - nabvarHeight){
        homeBtn.classList.remove('activeBtn');
        aboutBtn.classList.remove('activeBtn');
        skillsBtn.classList.remove('activeBtn');
        workBtn.classList.remove('activeBtn');
        testimonialsBtn.classList.add('activeBtn');
        contactBtn.classList.remove('activeBtn');
    } 

});


// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const link = event.target.dataset.link;
    if(link == null) {
        return;
    }

    navbarMenu.classList.remove('open');


    const scrollTo = document.querySelector(link);
    const overTop = scrollTo.getBoundingClientRect().y;
    const distance = window.pageYOffset + overTop - (nabvarHeight-16); 

    // scrollTo.scrollIntoView();
    scroll({top:distance, behavior: 'smooth'});
});





// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});


// Handle click on "contact me"button on home
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});


// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});


// Show "arrow up" button when scroll down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});


// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null) {
        return;
    }

    // Remove selection from the previous item and select the new one 
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = (e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode);
    target.classList.add('selected');

    projectContainer.classList.add('anim-out');

    setTimeout( () => {
        projects.forEach((project) => {
            if(filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });

        projectContainer.classList.remove('anim-out');
    }, 300);
});



function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

