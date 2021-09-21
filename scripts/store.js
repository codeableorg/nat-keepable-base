let notes = [
  {
    id: uuidv4(),
    title: "A note",
    body: "A content",
    color: "white",
    deleted: false,
  },
  {
    id: uuidv4(),
    title: "A note",
    body: "A content",
    color: "white",
    deleted: false,
  },
  {
    id: uuidv4(),
    title: "A note",
    body: "A content",
    color: "white",
    deleted: false,
  },
  {
    id: uuidv4(),
    title: "A note",
    body: "A content",
    color: "white",
    deleted: false,
  },
  {
    id: uuidv4(),
    title: "A note",
    body: "A content",
    color: "white",
    deleted: false,
  },
  {
    id: uuidv4(),
    title: "A note",
    body: "A content",
    color: "white",
    deleted: false,
  },
  {
    id: uuidv4(),
    title: "A note",
    body: "A content",
    color: "white",
    deleted: false,
  },
  {
    id: uuidv4(),
    title: "A note",
    body: "A content",
    color: "white",
    deleted: false,
  },
  {
    id: uuidv4(),
    title: "A note",
    body: "A content",
    color: "white",
    deleted: false,
  },
  {
    id: uuidv4(),
    title: "A note",
    body: "A content",
    color: "white",
    deleted: false,
  },
];

const findNote = (notes, id) => {
  return notes.findIndex((note) => note.id === id);
};

let currentSection = "notes";
let STORE = {
  createNote(note) {
    notes.push(note);
  },

  changeColor(id, color) {
    const idx = findNote(notes, id)
    if (idx >= 0) notes[idx].color = color;
  },


  softDeleteNote(id) {
    notes = notes.map((note) => {
      if (note.id === id) {
        note.deleted = true;
        return note;
      }
    });
  },

  hardDeleteNote(id) {
    notes = notes.filter((note) => note.id !== id);
  },

  recoverNote(id) {
    notes = notes.map((note) => {
      if (note.id === id) {
        note.deleted = false;
      }
    });
  },

  getNotes() {
    return notes.filter((note) => !note.deleted);
  },

  getTrashNotes() {
    return notes.filter((note) => note.deleted);
  },

};

export default STORE
export { currentSection }