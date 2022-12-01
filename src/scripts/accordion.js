window.addEventListener("DOMContentLoaded", () => {
  // const acc = document.getElements("accordion");
  // var i;
  //
  // for (i = 0; i < acc.length; i++) {
  //   acc[i].addEventListener("click", function() {
  //     this.classList.toggle("active");
  //     var panel = this.nextElementSibling;
  //     if (panel.style.maxHeight) {
  //       panel.style.maxHeight = null;
  //     } else {
  //       panel.style.maxHeight = panel.scrollHeight + "px";
  //     }
  //   });
  // }

  const acc = document.querySelector(".accordion");

  const accItems = [...acc.querySelectorAll(".accordion__item")];

  for (const accItem of accItems) {
    const toggle = accItem.querySelector(".accordion__header");
    const body = accItem.querySelector(".accordion__body");

    toggle.addEventListener("click", function(e) {
      this.classList.toggle("accordion__header--active");

      if (body.style.maxHeight) {
        body.style.maxHeight = null;
      } else {
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  }
});
