window.addEventListener("DOMContentLoaded", function () {
  const inputPhones = document.querySelectorAll('input[type="phone"]');
  for (let i = 0; i < inputPhones.length; ++i) {
    const inputPhone = inputPhones[i];
    const mask = IMask(inputPhone, {
      mask: "{+7} (000) 000-00-00",
      lazy: false,
    });
  }
});
