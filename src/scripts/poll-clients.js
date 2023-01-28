import { Fancybox } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox.css";

window.addEventListener("DOMContentLoaded", () => {
  Fancybox.bind(`[data-fancybox="poll"]`, {
    Image: {
      Panzoom: {
        zoomFriction: 0,
        maxScale: function () {
          return 0;
        },
      },
    },
  });
});
