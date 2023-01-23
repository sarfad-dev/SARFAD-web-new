document.querySelector('#burger').addEventListener('click', () => {
    document.querySelector('#menu').classList.toggle('hidden');
});

if (screen.width > 500) {

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    breakpoints: {
        715: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
            loop: false,
          loopFillGroupWithBlank: true,
          },
        1035: {
          slidesPerView: 3,
          spaceBetween: 20,
          slidesPerGroup: 3,
          loop: false,
        loopFillGroupWithBlank: true,
        },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}