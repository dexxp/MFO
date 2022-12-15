import Swiper from "swiper/swiper-bundle";
import "swiper/swiper-bundle.css";

window.addEventListener("DOMContentLoaded", () => {
  const mql = window.matchMedia( '(max-width: 980px)' );
  let videosSlider = [];

  const breakpointChecker = function() {
    if ( mql.matches !== true ) {
      if (videosSlider.length > 0) {
        for (const videoSlider of videosSlider) {
          videoSlider.destroy(true, true);
        }
        videosSlider = [];
      }
    } else {
      return enableSwiper();
    }
  };

  const enableSwiper = function() {
    const videosSwiper = [...document.querySelectorAll(".webinars__swiper")];

    for (const videoSwiper of videosSwiper) {
      const slider = new Swiper (videoSwiper, {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        loop: false,
        centeredSlides: false,
        spaceBetween: 16,
      });
      videosSlider.push(slider);
    }
    console.log(videosSlider)
  };

  mql.addEventListener("change", breakpointChecker);

  breakpointChecker();
})
