import Swiper from "swiper/swiper-bundle";
import { Fancybox } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox.css";
import "swiper/swiper-bundle.css";


export const verticalSlider = () => {
  const verticalSliders = [...document.querySelectorAll(".vertical-slider")];

  for (const verticalSlider of verticalSliders) {
    const wrapper = verticalSlider.querySelector(".vertical-slider__wrapper");
    const pagination = verticalSlider.querySelector(".vertical-slider__pagination");
    const buttonNext = verticalSlider.querySelector(".vertical-slider__button-next");
    const buttonPrev = verticalSlider.querySelector(".vertical-slider__button-prev");

    const swiper = new Swiper(wrapper, {
      direction: "horizontal",
      centeredSlides: true,
      allowTouchMove: true,
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
          allowTouchMove: false,
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

  for (let i = 0; i < verticalSliders.length; i++) {
    const verticalSlider = verticalSliders[i];
    const slides = [...verticalSlider.querySelectorAll(".swiper-slide")].filter(slide => slide.classList.contains("swiper-slide-duplicate"));
    for (const slide of slides) {
      const a = slide.querySelector("a");
      a.dataset.fancybox = "";
    }
    Fancybox.bind(`[data-fancybox="gallery-${i+1}"]`, {
      Image: {
        Panzoom: {
          zoomFriction: 0,
          maxScale: function () {
            return 0;
          },
        },
      },
    });
  }
}

