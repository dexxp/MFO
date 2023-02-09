import Swiper from "swiper/swiper-bundle";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
import "swiper/swiper-bundle.css";

export const centerSlider = () => {
  const centerSlider = new Swiper(".center-slider__wrapper", {
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
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.center-slider__button-next',
      prevEl: '.center-slider__button-prev',
    },
  });

  const slides = [...document.querySelector(".center-slider__wrapper").querySelectorAll(".swiper-slide")].filter(slide => slide.classList.contains("swiper-slide-duplicate"));
  for (const slide of slides) {
    console.log(slide);
    const a = slide.querySelector("a");
    a.dataset.fancybox = "";
  }

  Fancybox.bind(`[data-fancybox="gallery`, {
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

