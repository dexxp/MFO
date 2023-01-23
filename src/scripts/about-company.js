import Swiper from "swiper/swiper-bundle";

import "swiper/swiper-bundle.css";

window.addEventListener("DOMContentLoaded", () => {
  const mql = window.matchMedia( '(max-width: 1250px)' );
  let teamSliders = [];

  const breakpointChecker = function() {
    console.log(teamSliders)
    if ( mql.matches !== true ) {
      if (teamSliders !== undefined) {
        teamSliders.forEach((e, i) => {
          teamSliders[i].destroy(true, true);
        });
      }
    } else {
      return enableSwiper();
    }
  };

  const enableSwiper = function() {
    const sliders = [...document.querySelectorAll('.s-teams__swiper')];
    for (const slider of sliders) {
      const teamSlider = new Swiper (slider, {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        loop: false,
        centeredSlides: true,
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        navigation: {
          nextEl: '.center-slider__button-next',
          prevEl: '.center-slider__button-prev',
        },
        breakpoints: {
        },
      });
      teamSliders.push(teamSlider)
    }

  };

  mql.addEventListener("change", breakpointChecker);

  breakpointChecker();
});
