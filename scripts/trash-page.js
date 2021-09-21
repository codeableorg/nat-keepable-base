import STORE from './store.js'
import renderNote from './components/note.js';

function renderTrashNotes() {
    const notes = STORE.getTrashNotes();
    if (notes.length === 0)
      return `<div class="notes notes--no-content"><h2>No trash notes to show</h2></div>`;
    return `<div class="notes"><ul>${notes
      .map((note) => renderNote(note, true))
      .join("")}</ul></div>`;
  }

export default renderTrashNotes