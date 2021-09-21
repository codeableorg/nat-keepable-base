import STORE from './store.js'
import renderNote from './components/note.js';

function renderNotes() {
    const notes = STORE.getNotes();
    if (notes.length === 0)
      return `<div class="notes notes--no-content"><h2>No notes to keep</h2></div>`;
    return `<div class="notes"><ul>${notes
      .map((note) => renderNote(note, false))
      .join("")}</ul></div>`;
  }

export default renderNotes