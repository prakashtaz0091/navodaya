var swiper_news = new Swiper(".news_events_swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  // freeMode: true,
  // pagination: {
  //   el: ".news_events_swiper-pagination",
  //   clickable: true,
  // },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
