
import { currentSection } from './store.js'
import renderNotes from './notes-page.js'
import  { setSelectedAsideItem } from './components/navbar.js';
import renderTrashNotes from './trash-page.js';

function renderContent() {
  let html = "";
  setSelectedAsideItem();
  html = (currentSection == "trash") ? renderTrashNotes() : renderNotes()
  // switch (currentSection) {
  //   case "trash":
  //     html = renderTrashNotes();
  //     break;
  //   default:
  //     html = renderNotes();
  // }
  const container = document.querySelector(".js-content");
  container.innerHTML = html;
}

export default renderContent