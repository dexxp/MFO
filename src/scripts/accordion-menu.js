window.addEventListener("DOMContentLoaded", () => {
  const accordionItems = [...document.querySelectorAll(".accordion-menu__item")];

  for (const accordionItem of accordionItems) {
    const toggler = accordionItem.querySelector(".accordion-menu__title");

    toggler.addEventListener("click", () => {
      accordionItem.classList.toggle("accordion-menu__item--open");
    });
  }
});
