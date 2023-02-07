window.addEventListener("DOMContentLoaded", () => {
  const btnUp = {
    el: document.querySelector('.scroll-top-button'),
    show() {
      this.el.style.display = "inline-flex";
    },
    hide() {
      this.el.style.display = "none";
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 1300 ? this.show() : this.hide();
      });
      document.querySelector('.scroll-top-button').onclick = () => {
        window.scrollBy({
          top: 10,
          behavior: 'smooth',
        });
      }
    }
  }

  btnUp.addEventListener();
});