const headerBtn = document.querySelector('.header__button');
const headBtnSun = document.querySelector(".header__button-sun");
const headBtnMoon = document.querySelector(".header__button-moon");

headerBtn.addEventListener("click", () => {
    document.body.classList.toggle('dark-theme');
    headBtnSun.classList.toggle('sun')
    headBtnMoon.classList.toggle('moon')
});

