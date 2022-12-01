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

  for (let i = 0; i < verticalSliders.length; i++) {
    const verticalSlider = verticalSliders[i];
    Fancybox.bind(`[data-fancybox="gallery-${i+1}"]`, {
      Image: {
        Panzoom: {
          zoomFriction: 0.5,
          maxScale: function () {
            return 2;
          },
        },
      },
    });
  }


  const swiperClientsOne = new Swiper(".clients-slider-one", {
    slidesPerView: 'auto',
    spaceBetween: 60,
    centeredSlides: true,
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
    centeredSlides: true,
    speed: 8000,
    loop: true,
    //allowTouchMove: false, // можно ещё отключить свайп
    autoplay: {
      delay: 0,
      disableOnInteraction: false, // или сделать так, чтобы восстанавливался autoplay после взаимодействия
      reverseDirection: true,
    },
  });

  const toggleFunctions = document.querySelector(".s-functions__toggle");
  const functionWrap = document.querySelector(".s-functions__items");
  const functionWrapHidden = document.querySelector(".s-functions__items-hidden");

  toggleFunctions.addEventListener("click", (e) => {
    e.preventDefault();
    const top = document.documentElement.scrollTop;
    const functionOpened = functionWrap.classList.contains("s-functions__items--opened");

    if (functionOpened) {
      scrollBy(0, -functionWrapHidden.scrollHeight - 100);
      toggleFunctions.innerHTML = "Развернуть";
      functionWrap.classList.remove("s-functions__items--opened");
      functionWrapHidden.style.maxHeight = null;


    } else {
      toggleFunctions.innerHTML = "Свернуть";
      functionWrap.classList.add("s-functions__items--opened");
      functionWrapHidden.style.maxHeight = functionWrapHidden.scrollHeight + "px";
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
      centeredSlides: false,
    });

  };

  mql.addEventListener("change", breakpointChecker);

  breakpointChecker();

});
