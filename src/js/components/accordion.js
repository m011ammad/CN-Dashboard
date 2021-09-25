// ! accordion
let accordionItemsTitle = document.querySelectorAll(".accordion-item-title");
let accordionItemsBlock = document.querySelectorAll(".accordion-item-block");
accordionItemsTitle.forEach((titleValue, titleKey) => {
  titleValue.addEventListener("click", () => {
    accordionItemsBlock.forEach((blockValue, blockKey) => {
      blockValue.classList.toggle("active-block");
      if (titleKey == blockKey) {
        // continue
      } else {
        blockValue.classList.remove("active-block");
      }
    });
  });
});