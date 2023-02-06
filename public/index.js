document.querySelector('#burger').addEventListener('click', () => {
    document.querySelector('#menu').classList.toggle('hidden');
});

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: false,
    grabCursor: true,
    centerSlide: true,
    observer: true,
    observeParents: true,
    breakpoints: {
        600:{
          slidesPerView: 2,
          spaceBetween: 10,
          slidesPerGroup: 2,
          loop: false,
          loopFillGroupWithBlank: false,
          grabCursor: true,
          centerSlide: true,
          observer: true,
          observeParents: true,
        },
        630:{
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 2,
          loop: true,
          loopFillGroupWithBlank: true,
          grabCursor: true,
          centerSlide: true,
          observer: true,
          observeParents: true,
        },
        815: {
          slidesPerView: 3,
          spaceBetween: 20,
          slidesPerGroup: 3,
          loop: false,
          loopFillGroupWithBlank: true,
          grabCursor: true,
          centerSlide: true,
          observer: true,
          observeParents: true,
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
    observer: true,  
    observeParents: true,
  });
function sendEmail(){
  Email.send({
      Host : "smtp.gmail.com",
      Username : "havlik.prokop@gmail.com",
      Password : "Pepa123",
      To : 'maraxencz1097@gmail.com',
      From : document.getElementById("email").value,
      Subject : "New cotasd",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
}