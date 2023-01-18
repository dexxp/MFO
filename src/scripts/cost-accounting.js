import Swiper from "swiper/swiper-bundle";

import "swiper/swiper-bundle.css";

window.addEventListener("DOMContentLoaded", () => {
  const mql_1250 = window.matchMedia( '(max-width: 1250px)' );
  const mql_600 = window.matchMedia( '(max-width: 600px)' );

  let escortPackagesSlider;
  let consultingPackagesSlider;

  const breakpointChecker_600 = function() {
    if( mql_600.matches !== true ) {
      if (consultingPackagesSlider !== undefined) {
        consultingPackagesSlider.destroy(true, true);
      }
    } else {
      return enableConsultingPackagesSlider();
    }
  }

  const breakpointChecker_1250 = function() {
    if ( mql_1250.matches !== true ) {
      if (escortPackagesSlider !== undefined) {
        escortPackagesSlider.destroy(true, true);
      }
    } else {
      return enableEscortPackagesSlider();
    }
  };

  const enableEscortPackagesSlider = function() {
    escortPackagesSlider = new Swiper ('.s-maintenance-packages__swiper', {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      loop: false,
      centeredSlides: false,
      spaceBetween: 16,
    });
  };

  const enableConsultingPackagesSlider = function () {
    consultingPackagesSlider = new Swiper ('.s-consulting-packages__swiper', {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      loop: false,
      centeredSlides: false,
      spaceBetween: 16,
    });
  }

  mql_1250.addEventListener("change", breakpointChecker_1250);
  mql_600.addEventListener("change", breakpointChecker_600);

  breakpointChecker_1250();
  breakpointChecker_600();
});
