import Swiper from "swiper/swiper-bundle";

import "swiper/swiper-bundle.css";

window.addEventListener("DOMContentLoaded", () => {
  const mql = window.matchMedia( '(max-width: 800px)' );
  let productsSlider, addProductsSlider;

  const breakpointChecker = function() {
    if ( mql.matches !== true ) {
      if (productsSlider !== undefined) {
        productsSlider.destroy(true, true);
        addProductsSlider.destroy(true, true);
      }
    } else {
      return enableSwiper();
    }
  };

  const enableSwiper = function() {
    productsSlider = new Swiper ('.s-main-product__swiper', {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      loop: false,
      centeredSlides: false,
      spaceBetween: 16,
    });
    addProductsSlider = new Swiper ('.s-add-products__swiper', {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      loop: false,
      spaceBetween: 16,
      centeredSlides: false,
    });

  };

  mql.addEventListener("change", breakpointChecker);

  breakpointChecker();
});
