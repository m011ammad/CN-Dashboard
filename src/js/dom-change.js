let x = window.matchMedia("(max-width: 768px)");

if(x.matches) {

  console.log(x.matches);

  let mobileBgCover = document.querySelector(".mobile-bg-cover");
  let menuIcon = document.querySelector(".desktop-menu-icon");
  let menuMobile = document.querySelector(".right-side");

  menuIcon.addEventListener("click", (e) => {
    mobileBgCover.classList.toggle("display-activator");
    menuMobile.classList.toggle("display-activator");
  });

  mobileBgCover.addEventListener('click', e => {
    mobileBgCover.classList.toggle("display-activator");
    menuMobile.classList.toggle("display-activator");
  })

} else {

  console.log(x.matches);

  let desktopMenuIcon = document.querySelector(".desktop-menu-icon");
  let sideBar = document.querySelector(".right-side");
  let leftSide = document.querySelector(".left-side");

  desktopMenuIcon.addEventListener("click", (e) => {
    sideBar.classList.toggle("sidebar-none-active");
    leftSide.classList.toggle("left-side-active");
  });

}