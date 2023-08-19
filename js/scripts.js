
//burger nav variables
let burgerToggle = document.querySelector("#burgerToggle");
let nav = document.querySelectorAll(".js-nav");
//Footer Dropdown variables
let footerToggle = document.querySelector("#footer__dropdown-toggle");
let footerContent = document.querySelectorAll(".js-footer__content");
//header variables
let header = document.querySelector(".js-header");
let banner = document.querySelector(".js-banner");

//========= Swiper =====================
var swiper = new Swiper(".reviews__swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    lazyLoading: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

//=========================================

//========= Burger nav =====================

burgerToggle.addEventListener('click', function (event) {
    event.preventDefault();
    nav.forEach((element) => {
        element.classList.toggle('show');
    });
});

  //=========================================

//========= Footer Dropdown =====================

footerToggle.addEventListener('click', function (event) {
    event.preventDefault();
    footerContent.forEach((element) => {
        element.classList.toggle('show');
    });
    footerToggle.classList.toggle('toggle');
});

//=========================================


//========= Header =====================

let scrollPos = window.scrollY;
let bannerHeight = banner.clientHeight;

const Checker = function (onResize) {
    if (onResize) {
        bannerHeight = banner.clientHeight;
    }
    scrollPos = window.scrollY;

    if (scrollPos >= bannerHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed')
    }
}

window.addEventListener('resize', Checker(true));

window.addEventListener('scroll', Checker);

//=========================================

//========= Smooth Scroll =====================

document.addEventListener('DOMContentLoaded', function () {
    let scrollLinks = document.querySelectorAll('[data-scroll]');

    scrollLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            let target = document.querySelector(link.getAttribute('data-scroll'));
            let offsetTop = target.offsetTop;
            nav.forEach((element) => {
                if (element.classList.contains('show')) {
                    element.classList.remove('show');
                    offsetTop -= header.clientHeight;
                }
            });
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
        });
    });
});

//=========================================