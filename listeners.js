import {STORE} from './store.js'

import {
  renderNote,
  renderNotes,
  renderTrashNotes,
  setSelectedAsideItem,
  renderContent
} from './render.js'

function addContentDeleteListeners() {
    const container = document.querySelector(".js-content");
    container.addEventListener("click", (e) => {
      const trashBins = container.querySelectorAll(".delete-trigger");
      trashBins.forEach((trashBin) => {
        if (trashBin === e.target) {
          e.preventDefault();
          const parentNote = trashBin.closest(".note");
          parentNote.classList.add("trashOut");
          parentNote.addEventListener("animationend", (e) => {
            renderContent();
          });
          STORE.notes = STORE.notes.filter(
            (note) => note.id !== parentNote.dataset.id
          );
        }
      });
    });
  }
  
  function addContentRestoreListeners() {
    const container = document.querySelector(".js-content");
    container.addEventListener("click", (e) => {
      const restoreArrows = container.querySelectorAll(".restore-trigger");
      restoreArrows.forEach((restoreArrow) => {
        if (restoreArrow === e.target) {
          e.preventDefault();
          const parentNote = restoreArrow.closest(".note");
          parentNote.classList.add("goBack");
          parentNote.addEventListener("animationend", (e) => {
            renderContent();
          });
          STORE.notes = STORE.notes.map((note) => {
            if (note.id === parentNote.dataset.id) {
              return { ...note, deleted: false };
            }
            return note;
          });
        }
      });
    });
  }
  
  function addContentTrashListeners() {
    const container = document.querySelector(".js-content");
    container.addEventListener("click", (e) => {
      const trashBins = container.querySelectorAll(".trash-trigger");
      trashBins.forEach((trashBin) => {
        if (trashBin === e.target) {
          e.preventDefault();
          const parentNote = trashBin.closest(".note");
          parentNote.classList.add("shrinkOut");
          parentNote.addEventListener("animationend", (e) => {
            renderContent();
          });
          STORE.notes = STORE.notes.map((note) => {
            if (note.id === parentNote.dataset.id) {
              return { ...note, deleted: true };
            }
            return note;
          });
        }
      });
    });
  }
  
  function addContentTooltipListeners() {
    const container = document.querySelector(".js-content");
    container.addEventListener("mouseover", (e) => {
      const tooltips = container.querySelectorAll(".tooltip");
      tooltips.forEach((tooltip) => {
        const trigger = tooltip.querySelector(".tooltip-trigger");
        const content = tooltip.querySelector(".tooltip-content");
        const onMouseLeave = (e) => {
          if (tooltip === e.target) {
            tooltip.removeEventListener("mouseleave", onMouseLeave);
            content.classList.add("hidden");
          }
        };
        if (trigger === e.target) {
          content.classList.remove("hidden");
          tooltip.addEventListener("mouseleave", onMouseLeave);
        }
      });
    });
    container.addEventListener("click", (e) => {
      const triggers = container.querySelectorAll(".tooltip-option");
      triggers.forEach((trigger) => {
        if (trigger === e.target) {
          e.preventDefault();
          STORE.notes = STORE.notes.map((note) => {
            if (note.id === trigger.closest(".note").dataset.id) {
              return { ...note, color: trigger.dataset.color };
            }
            return note;
          });
          renderContent();
        }
      });
    });
  }
  
  function addFormTooltipListener() {
    const tooltip = document.querySelector(".js-note-form .tooltip");
    tooltip.addEventListener("mouseover", (e) => {
      const trigger = tooltip.querySelector(".tooltip-trigger");
      const content = tooltip.querySelector(".tooltip-content");
      const onMouseLeave = (e) => {
        if (tooltip === e.target) {
          tooltip.removeEventListener("mouseleave", onMouseLeave);
          content.classList.add("hidden");
        }
      };
      if (trigger === e.target) {
        content.classList.remove("hidden");
        tooltip.addEventListener("mouseleave", onMouseLeave);
      }
    });
    tooltip.addEventListener("click", (e) => {
      const form = document.querySelector(".js-note-form");
      const triggers = tooltip.querySelectorAll(".tooltip-option");
      triggers.forEach((trigger) => {
        if (trigger === e.target) {
          e.preventDefault();
          const input = trigger
            .closest(".tooltip")
            .querySelector("input[name=color]");
          input.value = trigger.dataset.color;
          form.style.backgroundColor = `var(--${trigger.dataset.color})`;
        }
      });
    });
  }
  
  function listenNoteFormSubmit() {
    const form = document.querySelector(".js-note-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const { title, body, color } = e.target;
      STORE.notes.push({
        id: uuidv4(),
        title: title.value,
        body: body.value,
        color: color.value,
      });
      e.target.reset();
      e.target.style.backgroundColor = "";
      renderContent();
    });
  }
  
  function listenAsideClick() {
    const anchors = document.querySelectorAll(".aside a");
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        STORE.currentSection = anchor.closest("li").dataset.value;
        renderContent();
      });
    });
  }

  export {
    addContentDeleteListeners,
    addContentRestoreListeners,
    addContentTrashListeners,
    addContentTooltipListeners,
    addFormTooltipListener,
    listenNoteFormSubmit,
    listenAsideClick
  }