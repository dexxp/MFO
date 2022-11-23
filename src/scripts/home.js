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
        768: {
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

  const swiperClientsOne = new Swiper(".clients-slider-one", {
    slidesPerView: 'auto',
    slidesPerGroupAuto: true,
    spaceBetween: 60,
    speed: 35000,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 1,
    },
    freeMode: {
      enabled: true,
      sticky: true,
    },
  });

  const swiperClientsTwo = new Swiper(".clients-slider-two", {
    slidesPerView: 'auto',
    slidesPerGroupAuto: true,
    spaceBetween: 60,
    speed: 35000,
    loop: true,
    centeredSlides: true,
    autoplay: {
      reverseDirection: true,
      delay: 1,
    },
    freeMode: {
      enabled: true,
      sticky: true,
    },
  });

  const toggleFunctions = document.querySelector(".s-functions__toggle");
  const functionWrap = document.querySelector(".s-functions__items");

  toggleFunctions.addEventListener("click", (e) => {
    e.preventDefault();
    const functionOpened = functionWrap.classList.contains("s-functions__items--opened");

    if (functionOpened) {
      toggleFunctions.innerHTML = "Развернуть";
      functionWrap.classList.remove("s-functions__items--opened");
    } else {
      toggleFunctions.innerHTML = "Свернуть";
      functionWrap.classList.add("s-functions__items--opened");
    }
  });
});
