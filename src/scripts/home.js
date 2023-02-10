import Swiper from "swiper/swiper-bundle";
import { Fancybox } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox.css";
import "swiper/swiper-bundle.css";
import {verticalSlider} from "./sliders/verticalSlider";

window.addEventListener("DOMContentLoaded", () => {

  verticalSlider();

  const swiperClientsOne = new Swiper(".clients-slider-one", {
    slidesPerView: 'auto',
    spaceBetween: 60,
    centeredSlides: false,
    speed: 8000,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    }
  });

  const swiperClientsTwo = new Swiper(".clients-slider-two", {
    slidesPerView: 'auto',
    spaceBetween: 60,
    centeredSlides: false,
    speed: 8000,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false, // или сделать так, чтобы восстанавливался autoplay после взаимодействия
      reverseDirection: true,
    },
  });

  const toggleFunctions = document.querySelector(".s-functions__toggle");
  const functionWrap = document.querySelector(".s-functions__items");

  toggleFunctions.addEventListener("click", (e) => {
    e.preventDefault();
    const functionOpened = functionWrap.classList.contains("s-functions__items--opened");

    if (functionOpened) {
    } else {
      toggleFunctions.innerHTML = "Свернуть";
      functionWrap.classList.add("s-functions__items--opened");
      setTimeout(() => {
        toggleFunctions.style.display = "none";
      }, 500);
    }
  });

  const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, {threshold: 0.1});
  observer.observe(document.querySelector('.s-realization__wrapper'));

  const mql = window.matchMedia( '(max-width: 1250px)' );
  let casesSlider, reviewsSlider;

  const breakpointChecker = function() {
    if ( mql.matches !== true ) {
      if (casesSlider !== undefined) {
        casesSlider.destroy(true, true);
        reviewsSlider.destroy(true, true);
      }
    } else {
      return enableSwiper();
    }
  };

  const enableSwiper = function() {
    casesSlider = new Swiper ('.s-cases__slider', {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      loop: false,
      centeredSlides: false,
      spaceBetween: 16,
    });
    reviewsSlider = new Swiper ('.s-reviews__slider', {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      loop: false,
      spaceBetween: 0,
      centeredSlides: false
    });

  };

  mql.addEventListener("change", breakpointChecker);

  breakpointChecker();

});
