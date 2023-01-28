import Swiper from "swiper/swiper-bundle";
import { Fancybox } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox.css";
import "swiper/swiper-bundle.css";

import {verticalSlider} from "./sliders/verticalSlider";

window.addEventListener("DOMContentLoaded", () => {
  verticalSlider();
});
