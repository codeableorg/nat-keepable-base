
import { currentSection } from '../store.js'
import renderContent from '../render.js';

function setSelectedAsideItem() {
    const items = document.querySelectorAll(".aside li");
    const selectedItem = Array.from(items).find(
      (item) => item.dataset.value === currentSection
    );
    items.forEach((item) => item.classList.remove("selected"));
    selectedItem.classList.add("selected");
  }

function listenAsideClick() {
    const anchors = document.querySelectorAll(".aside a");
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        currentSection = anchor.closest("li").dataset.value;
        renderContent();
      });
    });
  }

export { setSelectedAsideItem, listenAsideClick }