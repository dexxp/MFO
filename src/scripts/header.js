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

  const burger = document.querySelector(".header__burger");
  const mobileMenu = document.querySelector(".mobile-menu");

  burger.addEventListener("click", (e) => {
    e.preventDefault();
    burger.classList.toggle("header__burger--open");
    mobileMenu.classList.toggle("mobile-menu--open");
  })

});
