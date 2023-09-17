// togle class active
const navbarNav = document.querySelector(`.navbar-nav`)
// icon menu di klik muncul navbar-nav
document.querySelector(`#ham-menu`)
.onclick = () => {
    navbarNav.classList.toggle (`active`)
}