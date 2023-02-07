window.addEventListener("DOMContentLoaded", () => {
  const btnUp = {
    el: document.querySelector('.scroll-top-button'),
    show() {
      this.el.style.opacity = "1";
      this.el.style.pointerEvents = "all";
    },
    hide() {
      this.el.style.opacity = "0";
      this.el.style.pointerEvents = "none";
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 950 ? this.show() : this.hide();
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