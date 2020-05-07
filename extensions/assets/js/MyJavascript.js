// navigation menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle('open');
});
// navigation menu


// swiper slider
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

// swiper slider

// slick slider
  window.onload=function(){
    $('.slider').slick({
    autoplay:true,
    autoplaySpeed:900,
    arrows:true,
    centerMode:true,
    slidesToShow:5,
    slidesToScroll:1
    });
  };
  // slick slider


  

