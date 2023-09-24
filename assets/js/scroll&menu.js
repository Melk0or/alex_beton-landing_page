"use strict"

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');
        
        // if (iconMenu.classList.contains('_active') && menuBody.classList.contains('_active')) {
        //     iconMenu.classList.remove('_active');
        //     menuBody.classList.remove('_active');
        //     absoluteBody.classList.remove('_lock')
        // }

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

//Бургер менюха

const iconMenu = document.querySelector('.menu_icon');
if (iconMenu) {
    const menuBody = document.querySelector('.nav');
    const absoluteBody = document.body;
    iconMenu.addEventListener("click", function(e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        absoluteBody.classList.toggle('_lock')
    })
    const navLinks = document.querySelectorAll('.nav_link');
    for (let navLink of navLinks) {
        navLink.addEventListener("click", function(e) {
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
            absoluteBody.classList.remove('_lock')
        })
    }
}

// const menuLinks = document.querySelectorAll('.nav_link[data-goto]');
// if (menuLinks.length > 0) {
//     menuLinks.forEach(menuLink => {
//         menuLink.addEventListener("ckick", onMenuLinkClick);
//     });
//     function onMenuLinkClick(e) {
//         const menuLink = e.target;
//         if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//             const gotoBlock = document.querySelector(menuLink.dataset.goto);
//             const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

//             window.scrollTo({
//                 top: gotoBlockValue,
//                 behavior: "smooth"
//             });
//             e.preventDefault();
//         }
//     }w
// }