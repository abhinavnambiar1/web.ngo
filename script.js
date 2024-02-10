$(document).ready(function(){
    $('.carousel').carousel({
        indicators: true
    });
});

const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    // effect: "fade",
    speed: 400,
    spaceBetween: 50,
    autoHeight: true,
    breakpoints: {
      300: {
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 50,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    lazyLoading: true,
  });