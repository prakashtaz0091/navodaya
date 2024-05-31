const mentBtnEl = document.getElementsByClassName("menu-btn")[0];
const menuEl = document.getElementsByClassName("menu")[0];
mentBtnEl.addEventListener("click", () => {
    menuEl.classList.toggle("menu-active");

});
