/*
 *
 * Render
 *
 */
import {STORE} from './store.js'

function renderNote(note, isTrashed) {
    let footer = `<footer>
      <div class="tooltip">
        <input type="hidden" name="color" />
        <a class="tooltip-trigger" href="#color">
          <i class="ri-palette-fill"></i>
        </a>
        <div class="tooltip-content hidden">
          <div class="tooltip-content__body">
            <div
              data-color="white"
              class="tooltip-option tooltip-option--white"
            ></div>
            <div
              data-color="red"
              class="tooltip-option tooltip-option--red"
            ></div>
            <div
              data-color="orange"
              class="tooltip-option tooltip-option--orange"
            ></div>
            <div
              data-color="yellow"
              class="tooltip-option tooltip-option--yellow"
            ></div>
            <div
              data-color="green"
              class="tooltip-option tooltip-option--green"
            ></div>
            <div
              data-color="turquoise"
              class="tooltip-option tooltip-option--turquoise"
            ></div>
            <div
              data-color="cyan"
              class="tooltip-option tooltip-option--cyan"
            ></div>
            <div
              data-color="blue"
              class="tooltip-option tooltip-option--blue"
            ></div>
            <div
              data-color="purple"
              class="tooltip-option tooltip-option--purple"
            ></div>
            <div
              data-color="pink"
              class="tooltip-option tooltip-option--pink"
            ></div>
          </div>
        </div>
      </div>
      <div class="trash">
        <a class="trash-trigger" href="#trash">
          <i class="ri-delete-bin-fill"></i>
        </a>
      </div>
    </footer>`;
  
    if (isTrashed) {
      footer = `<footer>
        <div class="delete">
          <a class="delete-trigger" href="#delete">
            <i class="ri-delete-bin-fill"></i>
          </a>
        </div>
        <div class="restore">
          <a class="restore-trigger" href="#restore">
          <i class="ri-arrow-go-back-fill"></i>
          </a>
        </div>
      </footer>`;
    }
  
    return `<li class="note" style="background-color: var(--${note.color})" data-id="${note.id}">
      <h3 class="note-title">${note.title}</h3>
      <p class="note-body">${note.body}</p>
      ${footer}
    </li>`;
  }
  
  function renderNotes() {
    const notes = STORE.notes.filter((note) => !note.deleted);
    if (notes.length === 0)
      return `<div class="notes notes--no-content"><h2>No notes to keep</h2></div>`;
    return `<div class="notes"><ul>${notes
      .map((note) => renderNote(note))
      .join("")}</ul></div>`;
  }
  
  function renderTrashNotes() {
    const notes = STORE.notes.filter((note) => note.deleted);
    if (notes.length === 0)
      return `<div class="notes notes--no-content"><h2>No trash notes to show</h2></div>`;
    return `<div class="notes"><ul>${notes
      .map((note) => renderNote(note, true))
      .join("")}</ul></div>`;
  }
  
  function setSelectedAsideItem() {
    const items = document.querySelectorAll(".aside li");
    const selectedItem = Array.from(items).find(
      (item) => item.dataset.value === STORE.currentSection
    );
    items.forEach((item) => item.classList.remove("selected"));
    selectedItem.classList.add("selected");
  }
  
  function renderContent() {
    let html = "";
    setSelectedAsideItem();
    switch (STORE.currentSection) {
      case "trash":
        html = renderTrashNotes();
        break;
      default:
        html = renderNotes();
    }
    const container = document.querySelector(".js-content");
    container.innerHTML = html;
  }

  export {
    renderNote,
    renderNotes,
    renderTrashNotes,
    setSelectedAsideItem,
    renderContent
  }