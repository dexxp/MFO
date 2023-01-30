window.addEventListener("DOMContentLoaded", () => {
  const acc = document.querySelector(".accordion");

  const accItems = [...acc.querySelectorAll(".accordion__item")];

  const activeClass = "accordion__header--active";

  const changeStyle = (body) => {
    if (body.style.maxHeight) {
      body.style.maxHeight = null;
    } else {
      body.style.maxHeight = body.scrollHeight + "px";
    }
  }

  for (const accItem of accItems) {
    const toggle = accItem.querySelector(".accordion__header");
    const body = accItem.querySelector(".accordion__body");

    toggle.addEventListener("click", function(e) {
      const isOpen = toggle.classList.contains(activeClass);

      const currentActives = [...acc.querySelectorAll(`.${activeClass}`)];
      if (currentActives.length > 0) {
        for (const currentActive of currentActives) {
          console.log(currentActive);
          const bodyActive = currentActive.nextElementSibling;
          currentActive.classList.remove(activeClass);
          changeStyle(bodyActive);
        }
      }

      if (!isOpen) {
        this.classList.add(activeClass)
        changeStyle(body);
      }

    });
  }
});
