window.addEventListener("DOMContentLoaded", () => {
  const mainNav = document.querySelector(".main-nav");

  const mainNavItems = [...mainNav.querySelectorAll(".main-nav__item")];

  for (const mainNavItem of mainNavItems) {
    const dropMenu = mainNavItem.querySelector(".drop-menu");

    mainNavItem.addEventListener("mouseenter", () => {
      mainNavItem.classList.add("main-nav__item--open");
    });
    mainNavItem.addEventListener("mouseleave", () => {
      mainNavItem.classList.remove("main-nav__item--open");
    });
  }
});
