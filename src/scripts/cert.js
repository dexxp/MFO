import Swiper from "swiper/swiper-bundle";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
import "swiper/swiper-bundle.css";

window.addEventListener("DOMContentLoaded", () => {
  const certSlider = new Swiper(".cert-slider__wrapper", {
    centeredSlides: true,
    slidesPerView: 5,
    loop: true,
    pagination: {
      el: ".cert-slider__pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".cert-slider__button-next",
      prevEl: ".cert-slider__button-prev",
    },
  });

  const activeSlide = document.querySelector(".swiper-slide-active");
  activeSlide.previousElementSibling.previousElementSibling.style.opacity = 0.5;
  activeSlide.nextElementSibling.nextElementSibling.style.opacity = 0.5;

  certSlider.on("slideChangeTransitionEnd", (e) => {
    const slides = [...e.slides];
    const activeSlide = slides.find(el => el.classList.contains("swiper-slide-active"));
    slides.forEach(el => el.style.opacity = 1);
    activeSlide.previousElementSibling.previousElementSibling.style.opacity = 0.5;
    activeSlide.nextElementSibling.nextElementSibling.style.opacity = 0.5;
  });
});
