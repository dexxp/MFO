window.addEventListener("DOMContentLoaded", () => {
  const accordionItems = [...document.querySelectorAll(".accordion-menu__item")];

  for (const accordionItem of accordionItems) {
    const toggler = accordionItem.querySelector(".accordion-menu__title");

    toggler.addEventListener("click", () => {
      // const active = document.querySelector(".accordion-menu__item--open");
      // if (active !== undefined) {
      //   active.classList.remove("accordion-menu__item--open");
      // }
      // accordionItem.classList.toggle("accordion-menu__item--open");

      if (accordionItem.classList.contains("accordion-menu__item--open")) {
        accordionItem.classList.remove("accordion-menu__item--open");
      } else {
        for (const ai of accordionItems) {
          if (ai.classList.contains("accordion-menu__item--open")) {
            ai.classList.remove("accordion-menu__item--open");
          }
        }
        accordionItem.classList.add("accordion-menu__item--open");
      }
    });
  }
});
