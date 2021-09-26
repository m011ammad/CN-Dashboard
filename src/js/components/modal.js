/*
* HOW TO?
* 1- toggle modal by display none/flex by modal-block-activator
* 2- close modal by click on close button or click outside of modal
* 3- prevent to scroll by add overflow = "hidden" to body
*/

// opne modal on button click
document.querySelector(".modal-button-one").addEventListener('click', () => {
  document.querySelector(".modal-block").classList.toggle("modal-block-activator");
  document.body.style.overflow = "hidden";
})

// close modal when click on close button
document.querySelector(".modal-close").addEventListener("click", () => {
  document.querySelector(".modal-block").classList.toggle("modal-block-activator");
  document.body.style.overflow = "auto";
});

// close modal when click out side the modal
window.addEventListener('click', e => {
  if (e.target == document.querySelector(".modal-block")) {
    document
      .querySelector(".modal-block")
      .classList.toggle("modal-block-activator");
    document.body.style.overflow = "auto";
  }
})
