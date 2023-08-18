
//burger nav variables
const burgerToggle = document.querySelector("#burgerToggle");
const nav = document.querySelectorAll(".js-nav");

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