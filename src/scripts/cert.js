import Swiper from "swiper/swiper-bundle";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
import "swiper/swiper-bundle.css";

window.addEventListener("DOMContentLoaded", () => {
  const certSlider = new Swiper(".cert-slider__wrapper", {
    centeredSlides: true,
    slidesPerView: 5,
    loop: true,
    spaceBetween: 40,
    pagination: {
      el: ".cert-slider__pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".cert-slider__button-next",
      prevEl: ".cert-slider__button-prev",
    },
  });

  Fancybox.bind(`[data-fancybox="cert-hor"]`, {
    Image: {
      Panzoom: {
        zoomFriction: 0.5,
        maxScale: function () {
          return 2;
        },
      },
    },
  });

  Fancybox.bind(`[data-fancybox="cert"]`, {
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
