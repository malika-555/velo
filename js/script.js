"use strict";


// const burger = document.querySelector(".icon__menu");
// const menu = document.querySelector(".menu__body");

// burger.addEventListener("click", () => {
//   menu.style.top = 0;

// })

const iconMenu = document.querySelector(".icon__menu");
if (iconMenu) {
  const menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");


  });
}

// swiper
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
  slideToClickSlide: true,
});
