var swiper = new Swiper(".myswiper", {
      slidesPerView: 7,
      spaceBetween: 30,
        loop:true,
      autoplay: {
        delay: 200,
        disableOnInteraction: false,
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