window.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-page__title");
  const list = document.querySelector(".nav-page__list");

  toggle.addEventListener("click", function(e) {
    this.classList.toggle("nav-page__title--active");

    if (list.style.maxHeight) {
      list.style.maxHeight = null;
    } else {
      list.style.maxHeight = list.scrollHeight + "px";
    }
  });
});
