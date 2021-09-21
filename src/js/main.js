let desktopMenuIcon = document.querySelector(".desktop-menu-icon");
let sideBar = document.querySelector(".right-side");
let leftSide = document.querySelector(".left-side");
desktopMenuIcon.addEventListener('click', e => {
    console.log('c');
    sideBar.classList.toggle("sidebar-none-active");
    leftSide.classList.toggle("left-side-active");
})