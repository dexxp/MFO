import Swiper from "swiper/swiper-bundle";
import { Fancybox } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox.css";
import "swiper/swiper-bundle.css";

const swiperFunction = new Swiper(".function-slider", {
  direction: "horizontal",
  centeredSlides: true,
  loop: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 3,
    depth: 100,
    modifier: 3,
    slideShadows: false,
  },
  breakpoints: {
    768: {
      direction: "vertical",
    }
  },
  pagination: {
    el: ".function-slider-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".vertical-slider__button-next",
    prevEl: ".vertical-slider__button-prev",
  },
});

const verticalSlider = new Swiper(".vertical-slider__wrapper", {
  direction: "horizontal",
  centeredSlides: true,
  loop: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 3,
    depth: 100,
    modifier: 3,
    slideShadows: false,
  },
  breakpoints: {
    768: {
      direction: "vertical",
    }
  },
  pagination: {
    el: ".vertical-slider__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".vertical-slider__button-next",
    prevEl: ".vertical-slider__button-prev",
  },
});

Fancybox.bind('[data-fancybox="gallery"]', {
  Image: {
    Panzoom: {
      zoomFriction: 0.5,
      maxScale: function () {
        return 2;
      },
    },
  },
});
