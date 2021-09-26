document.querySelector(".toast-button-one").addEventListener('click', () => {
    document.querySelector('.toast-block').style.display = "flex";
})
document.querySelector(".toast-close").addEventListener("click", () => {
    document.querySelector(".toast-block").style.display = "none";
});