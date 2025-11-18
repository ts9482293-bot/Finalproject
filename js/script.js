var swiper = new Swiper(".myswiper", {
     speed: 8000,
  direction: "horizontal",
  loop: true,
  slidesPerView: 7,
  freeMode: true,
  zoom: true,
  keyboard: true,
  pagination: false,
  navigation: false,

  autoplay: {
    delay: 0
  },

  breakpoints: {
    765: {
      slidesPerView: 1
    },
    1000: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    }
  },

    });

    var swiper2 = new Swiper(".testimonial-swiper",{
        slidesPerView: 1,
        loop:true,
        autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
       pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    });