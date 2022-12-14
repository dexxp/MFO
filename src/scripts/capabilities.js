import Swiper from "swiper/swiper-bundle";
import { Fancybox } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox.css";
import "swiper/swiper-bundle.css";

window.addEventListener("DOMContentLoaded", () => {
  const verticalSliders = [...document.querySelectorAll(".vertical-slider")];

  for (const verticalSlider of verticalSliders) {
    const wrapper = verticalSlider.querySelector(".vertical-slider__wrapper");
    const pagination = verticalSlider.querySelector(".vertical-slider__pagination");
    const buttonNext = verticalSlider.querySelector(".vertical-slider__button-next");
    const buttonPrev = verticalSlider.querySelector(".vertical-slider__button-prev");

    const swiper = new Swiper(wrapper, {
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
        1250: {
          direction: "vertical",
        }
      },
      pagination: {
        el: pagination,
        clickable: true,
      },
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },
    });
  }

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
});
