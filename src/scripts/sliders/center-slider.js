import Swiper from "swiper/swiper-bundle";
import "swiper/swiper-bundle.css";

const centerSlider = new Swiper(".center-slider", {
  centeredSlides: true,
  loop: true,
  effect: "coverflow",
  autoHeight: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 0,
    stretch: 2,
    depth: 20,
    modifier: 0,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
