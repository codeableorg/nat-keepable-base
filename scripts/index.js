
import renderContent from './render.js'

import {
  addContentDeleteListeners,
  addContentRestoreListeners,
  addContentTrashListeners,
  addContentTooltipListeners,
  addFormTooltipListener,
  listenNoteFormSubmit
} from './components/buttons.js'

import {listenAsideClick} from './components/navbar.js'

function addEventListeners() {
  addContentDeleteListeners();
  addContentRestoreListeners();
  addContentTrashListeners();
  addContentTooltipListeners();
  addFormTooltipListener();
  listenNoteFormSubmit();
  listenAsideClick();
}

(function () {
  renderContent();
  addEventListeners();
})()
