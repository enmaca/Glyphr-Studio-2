import { showAppErrorPage } from '../app/app.js';
import { makeAppTopBar } from '../app/font-edit-menu.js';
import { closeEveryTypeOfDialog } from '../controls/dialogs/dialogs.js';
import { Navigator } from './navigator.js';

// --------------------------------------------------------------
// Navigation
// --------------------------------------------------------------

export class FontEditNavigator extends Navigator {
	constructor() {
		super();
	}

	/**
	 * Changes the page of this Project Editor
	 * @param {Boolean =} test - set to true when running from Vitest
	 */
	navigate(test = false) {
		// log(`Navigator.navigate`, 'start');
		// log(`this.page: ${this.page}`);
		// log(`this.panel: ${this.panel}`);
		// log(`editor.selectedItemID: ${getCurrentProjectEditor().selectedItemID}`);

		closeEveryTypeOfDialog();
		const wrapper = document.querySelector('#app__wrapper');

		// log(`wrapper before:`);
		// log(wrapper);

		if (wrapper) {
			try {
				const pageContent = this.makePageContent();
				wrapper.innerHTML = '';
				wrapper.appendChild(makeAppTopBar());
				wrapper.appendChild(pageContent);
			} catch (error) {
				console.warn(`Navigation failed:`, error);
				showAppErrorPage(`Oops, navigation failed!`, error);
				// log(getCurrentProject());
			}
		} else {
			if (!test) console.warn(`Navigation failed: app__wrapper could not be found.`);
		}
		// log(`Navigator.navigate`, 'end');
	}
}
