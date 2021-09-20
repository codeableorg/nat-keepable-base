
//import {STORE} from './store.js'
/*
 *
 * Render
 *
 */
import {
  renderContent
} from './render.js'

/*
 *
 * Listeners
 *
 */

import {
  addContentDeleteListeners,
  addContentRestoreListeners,
  addContentTrashListeners,
  addContentTooltipListeners,
  addFormTooltipListener,
  listenNoteFormSubmit,
  listenAsideClick
} from './listeners.js'

/*
 *
 * Main Functions
 *
 */
function addEventListeners() {
  addContentDeleteListeners();
  addContentRestoreListeners();
  addContentTrashListeners();
  addContentTooltipListeners();
  addFormTooltipListener();
  listenNoteFormSubmit();
  listenAsideClick();
}

function init() {
  renderContent();
  addEventListeners();
}

init();
