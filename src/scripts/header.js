window.addEventListener("DOMContentLoaded", () => {
  const mainNav = document.querySelector(".main-nav");

  const lies = [...mainNav.querySelectorAll("li")];

  for (const li of lies) {
    const dropMenu = mainNav.querySelector(".drop-menu");

    if (dropMenu !== undefined) {
      li.addEventListener("mouseenter", () => {
        li.classList.add("drop-menu-open");
      });
      li.addEventListener("mouseleave", () => {
        li.classList.remove("drop-menu-open");
      });
    }
  }

  const mainNavItems = [...mainNav.querySelectorAll(".main-nav__item")];

  for (const mainNavItem of mainNavItems) {
    const dropMenu = mainNavItem.querySelector(".drop-menu");

    if (dropMenu !== undefined) {
      mainNavItem.addEventListener("mouseenter", () => {
        mainNavItem.classList.add("main-nav__item--open");
      });
      mainNavItem.addEventListener("mouseleave", () => {
        mainNavItem.classList.remove("main-nav__item--open");
      });
    }

  }

  const dropMenuItems = [...document.querySelectorAll(".drop-menu__item")];

  for (const dropMenuItem of dropMenuItems) {
    const dropMenu = dropMenuItem.querySelector(".drop-menu__drop-menu");

    if (dropMenu !== undefined) {
      dropMenuItem.addEventListener("mouseenter", () => {
        dropMenuItem.classList.add("drop-menu__item--open");
      });
      dropMenuItem.addEventListener("mouseleave", () => {
        dropMenuItem.classList.remove("drop-menu__item--open");
      });
    }
  }
});
