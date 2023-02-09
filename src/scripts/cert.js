import Swiper from "swiper/swiper-bundle";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
import "swiper/swiper-bundle.css";

window.addEventListener("DOMContentLoaded", () => {
  const certSlider = new Swiper(".cert-slider__wrapper", {
    centeredSlides: true,
    loop: true,
    spaceBetween: 16,
    slidesPerView: 2,

    pagination: {
      el: ".cert-slider__pagination",
      clickable: true,
    },


    breakpoints: {
      600: {
        slidesPerView: 4,

        spaceBetween: 24,
      },
      1250: {
        slidesPerView: 5,

        spaceBetween: 40,
      }
    },
    navigation: {
      nextEl: ".cert-slider__button-next",
      prevEl: ".cert-slider__button-prev",
    },
  });

  const slides = [...document.querySelector(".cert-slider__wrapper").querySelectorAll(".swiper-slide")].filter(slide => slide.classList.contains("swiper-slide-duplicate"));
  for (const slide of slides) {
    console.log(slide);
    const a = slide.querySelector("a");
    a.dataset.fancybox = "";
  }

  Fancybox.bind(`[data-fancybox="cert`, {
    Image: {
      Panzoom: {
        zoomFriction: 0,
        maxScale: function () {
          return 0;
        },
      },
    },
  });
});
