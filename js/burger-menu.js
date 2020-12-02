const burgerBtn = document.querySelector("#burger-btn")
const navBar = document.querySelector("#nav-bar")
const enableNavClass = "top-bar--nav--enable"
const enableBurgerBtn = "top-bar--burger-btn--enable"

burgerBtn.addEventListener("click", () => {
    navBar.classList.toggle(enableNavClass)
    burgerBtn.classList.toggle(enableBurgerBtn)
})