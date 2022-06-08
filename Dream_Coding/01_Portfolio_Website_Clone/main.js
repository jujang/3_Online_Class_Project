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


// 1. 모든 섹션 요소들을 가지고 오기
// 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다

// 드림코딩 강의에서는 나간 요소의 다음 요소(y좌표값을 활용해서 방향을 정함)를 활성화 시켰지만 나는 화면에 일정 부분 이상 들어온 것을 기준으로 활성화 시켰음.
// 이 경우, 화면을 축소해서 다양한 게 보인다면 여러개가 활성화 될 수 있는데 이는 어쩔 수 없기도 하고 어떻게 보면 화면에 한 번에 여러개가 보이기에 당연한 것으로도 생각됨
// 아래의 주석으로 된 코드는 엘리의 코드가 아닌 내가 다른 방식으로 같은 로직을 구현했을 뿐임

const sectionIds = ['#home', '#about', '#skills', '#work', '#testimonials', '#contact'];
const sections = sectionIds.map( id => document.querySelector(id));
const navItems = sectionIds.map( id => document.querySelector(`[data-link='${id}']`) );

const observerOptions = {
    root: null,
    rootMargin:'0px',
    threshold: 0.3
}

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        const index = sectionIds.indexOf(`#${entry.target.id}`);
        const navItem = navItems[index];
        // const thisSectionId = `#${entry.target.id}`;
        // const thisNavElement = document.querySelector(`[data-link='${thisSectionId}']`);
        if(entry.isIntersecting) {
            navItem.classList.add('activeBtn');
            // thisNavElement.classList.add('activeBtn');
        } else {
            navItem.classList.remove('activeBtn');
            // thisNavElement.classList.remove('activeBtn');
        }
    });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));