import Swiper from "swiper/swiper-bundle";

import "swiper/swiper-bundle.css";

window.addEventListener("DOMContentLoaded", () => {
  const mql = window.matchMedia( '(max-width: 1250px)' );
  let costLkSlider;

  const breakpointChecker = function() {
    if ( mql.matches !== true ) {
      if (costLkSlider !== undefined) {
        costLkSlider.destroy(true, true);
      }
    } else {
      return enableSwiper();
    }
  };

  const enableSwiper = function() {
    costLkSlider = new Swiper ('.s-cost-lk__swiper', {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      loop: false,
      centeredSlides: false,
      spaceBetween: 16,
    });

  };

  mql.addEventListener("change", breakpointChecker);

  breakpointChecker();
});
