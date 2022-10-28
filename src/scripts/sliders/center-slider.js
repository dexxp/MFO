import Swiper from "swiper/swiper-bundle";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
import "swiper/swiper-bundle.css";

const centerSlider = new Swiper(".center-slider__wrapper", {
  centeredSlides: true,
  loop: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 20,
    modifier: 0,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  navigation: {
    nextEl: '.center-slider__button-next',
    prevEl: '.center-slider__button-prev',
  },
});

Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: {
    Carousel: {
      fill: false,
      center: true,
    },
  },
});
