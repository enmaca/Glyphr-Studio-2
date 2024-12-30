/* Web Components */
import { FancyButton } from '../controls/fancy-button/fancy_button.js';
import { GlyphTile } from '../controls/glyph-tile/glyph_tile.js';
import { InfoBubble } from '../controls/info-bubble/info_bubble.js';
import { InputNumber } from '../controls/input-number/input_number.js';
import { OptionChooser } from '../controls/option-chooser/option_chooser.js';
import { OptionToggle } from '../controls/option-toggle/option_toggle.js';
import { DisplayCanvas } from '../display_canvas/display_canvas.js';
import { EditCanvas } from '../edit_canvas/edit_canvas.js';

/* Other stuff */
import asciiLogo from '../common/graphics/ascii-wordmark-vertical.txt?raw';
import { closeAllInfoBubbles, closeAllOptionChoosers } from '../controls/dialogs/dialogs.js';
import { GlyphrStudioProject } from '../project_data/glyphr_studio_project.js';
import { closeAllNavMenus } from '../project_editor/navigator.js';
import { ProjectEditor } from '../project_editor/project_editor.js';
import { GlyphrStudioApp, showAppErrorPage } from './app.js';
import { FontEditGlyphrStudioApp } from './font-edit-app.js';
import { FontEditProjectEditor } from '../project_editor/font-edit-project-editor.js';

/**
 * First function to run when the browser starts
 */
export function glyphrStudioOnLoad() {
	console.info(`%c${asciiLogo}\n`, 'color: hsl(200, 100%, 41%);');
	try {
		const app = getGlyphrStudioApp();
		if (app.version) {
			console.info(
				`%cApp Version ${app.version}%c\n`,
				'color:hsl(200, 100%, 41%);; background-color:hsla(200, 100%, 49%, 10%); padding: 4px 8px; border-radius: 12px;',
				'background-color: transparent;'
			);
		}
		// log(`glyphrStudioOnLoad`, 'start');
		// let favIcon = makeElement({
		// 	tag: 'link',
		// 	attributes: { rel: 'shortcut icon', href: '../common/graphics/logo-icon-color.ico' },
		// });
		// document.head.appendChild(favIcon);

		if (passPreChecks()) {
			registerCustomComponents();
			addGlobalEventListeners();
			// Load project
			app.setUp();
			// log(app);
		} else {
			// log('did NOT pass pre-checks');
		}
		// log(`glyphrStudioOnLoad`, 'end');
	} catch (error) {
		showAppErrorPage('Glyphr Studio failed to load!', error);
		console.error(error);
	}
}

/**
 * Does some checking against new-ish HTML/JavaScript features
 * @returns {Boolean}
 */
function passPreChecks() {
	let pass = true;
	// Templates
	const template = document.createElement('template');
	if (!template.content) {
		console.error('Browser does not support HTML Templates');
		pass = false;
	}
	return pass;
}

/**
 * Registers all the custom Web Components to the current document
 */
function registerCustomComponents() {
	const data = [
		{ fileName: 'option-chooser', className: OptionChooser },
		{ fileName: 'option-toggle', className: OptionToggle },
		{ fileName: 'display-canvas', className: DisplayCanvas },
		{ fileName: 'fancy-button', className: FancyButton },
		{ fileName: 'glyph-tile', className: GlyphTile },
		{ fileName: 'info-bubble', className: InfoBubble },
		{ fileName: 'input-number', className: InputNumber },
		{ fileName: 'edit-canvas', className: EditCanvas },
	];

	data.forEach((control) => {
		customElements.define(control.fileName, control.className);
	});
}

/**
 * Events added to window, no matter what Project Editor is running
 */
function addGlobalEventListeners() {
	// if (!getGlyphrStudioApp().settings.dev.mode) {
	window.addEventListener('mouseup', (event) => {
		let navElement = document.querySelector('nav');

		// @ts-ignore
		if (!(navElement && navElement.contains(event.target))) {
			closeAllNavMenus();
			closeAllOptionChoosers();
			closeAllInfoBubbles();
		}
	});
	window.addEventListener('resize', () => {
		closeAllNavMenus();
		closeAllOptionChoosers();
		closeAllInfoBubbles();
	});
	// @ts-ignore
	window.getShipDate = getShipDate;
	// }
}

/**
 * An epoch date number that looks nice
 * @param {Number} dayOffset - how many days to add to the result
 * @returns {Number} - nice number for the day a version was shipped
 */
export function getShipDate(dayOffset = 0) {
	const shipDate = new Date();
	shipDate.setDate(shipDate.getDate() + dayOffset);
	shipDate.setHours(12, 0, 0, 0);
	const result = shipDate.getTime();
	console.log(new Date(result).toString());
	return result;
}

// --------------------------------------------------------------
// Getting root objects (App, Editor, Project / Current, Import Target)
// --------------------------------------------------------------



// State to know if the current app is the font editor
let isFontEditApp = false


/**
 * Initialize font edit app and removes font editor standalone functionality
 */
export function initializeFontEditApp() {
	isFontEditApp = true
}

// The main app object
let GSApp;

/**
 * Returns the overall App object
 * @returns {GlyphrStudioApp}
 */
export function getGlyphrStudioApp() {
	if (!GSApp) {
		GSApp = isFontEditApp ? new FontEditGlyphrStudioApp() : new GlyphrStudioApp();
	}
	return GSApp;
}

/**
 * Returns the project that is currently being edited
 * @returns {GlyphrStudioProject}
 */
export function getCurrentProject() {
	return getCurrentProjectEditor().project;
}

/**
 * Returns the current Project Editor
 * @returns {ProjectEditor}
 */
export function getCurrentProjectEditor() {
	const app = getGlyphrStudioApp();
	return app.selectedProjectEditor;
}

/**
 * Sets the current Project Editor
 * @param {ProjectEditor} newEditor - one to set
 */
export function setCurrentProjectEditor(newEditor) {
	const app = getGlyphrStudioApp();
	app.selectedProjectEditor = newEditor;
}

/**
 * Gets the Project Editor that is available for importing an new project
 * @returns {ProjectEditor}
 */
export function getProjectEditorImportTarget() {
	// log(`getProjectEditorImportTarget`, 'start');
	const app = getGlyphrStudioApp();
	// log(`getProjectEditorImportTarget`, 'end');
	return app.editorImportTarget;
}

/**
 * Adds a new Project Editor and gets it ready for importing
 * @returns {ProjectEditor}
 */
export function addProjectEditorAndSetAsImportTarget() {
	// log(`addProjectEditorAndSetAsImportTarget`, 'start');
	const app = getGlyphrStudioApp();
	app.projectEditors.push(isFontEditApp ? new FontEditProjectEditor() : new ProjectEditor());
	app.editorImportTarget = app.projectEditors.at(-1);
	// log(`addProjectEditorAndSetAsImportTarget`, 'end');
	return getProjectEditorImportTarget();
}

// --------------------------------------------------------------
// Fancy Logging
// --------------------------------------------------------------

let colors = {};
let depth = 0;
/**
 * Wrapper for console.log that does some extra fancy stuff, and
 * also adheres to a global switch in settings
 * @param {String} message - message to show in the console
 * @param {String =} type - 'start', 'end', or undefined
 */
export function log(message, type) {
	let dev = getGlyphrStudioApp().settings.dev;
	// if (!dev.mode) return;

	if (dev.mode) {
		if (typeof message === 'string') {
			message = message.replace(/&lt;/gi, '<');
			message = message.replace(/&gt;/gi, '>');

			if (type === 'start') {
				if (!colors[message])
					colors[message] = `hsl(${Math.floor(Math.random() * 210 + 150)}, 90%, 20%)`;
			}

			const common = `
				font-weight:bold;
				position: relative;
				left: -20px;
				color: white;
				background-color: ${colors[message]};
				padding: 6px 0px 6px 0px;
				margin: 0px;
			`;

			const startCommon = `padding-bottom: 4px; margin-top: 10px; margin-bottom: -2px;`;
			const endCommon = ` margin-bottom: 20px; margin-top: -3px`;

			const startLeft = `
				${common}
				color: #FFFFFF66;
				padding-left: 12px;
				border-radius: 12px 0px 0px 2px;
				${startCommon}
			`;
			const startMid = `
				${common}
				padding-left: 0px;
				color: #FFFFFF99;
				${startCommon}
			`;
			const startRight = `
				${common}
				padding-right: 12px;
				border-radius: 0px 12px 2px 0px;
				${startCommon}
			`;

			const endLeft = `
				${common}
				color: #FFFFFF66;
				padding-left: 12px;
				border-radius: 2px 0px 0px 12px;
				${endCommon}
			`;
			const endMid = `
				${common}
				padding-left: 0px;
				color: #FFFFFF99;
				${endCommon}
			`;
			const endRight = `
				${common}
				padding-right: 12px;
				border-radius: 0px 2px 12px 0px;
				${endCommon}
			`;

			const indent = `
				color: rgba(127, 127, 127, 0.5);
				font-size: 1.2em;
			`;
			let ch = '･ ';

			if (type === 'start' || type === 'end') {
				let message1 = '';
				let message2 = message;
				if (message.split('.').length > 1) {
					message1 = message.split('.')[0] + '.';
					message2 = message.split('.')[1];
				}

				if (type === 'start') {
					console.log(
						`%c${ch.repeat(depth)}%cSTART %c${message1}%c${message2}`,
						indent,
						startLeft,
						startMid,
						startRight
					);
					depth++;
				} else if (type === 'end') {
					depth--;
					depth = Math.max(depth, 0);
					console.log(
						`%c${ch.repeat(depth)}%cEND   %c${message1}%c${message2}`,
						indent,
						endLeft,
						endMid,
						endRight
					);
					delete colors[message];
				}
			} else {
				console.log(
					`%c${ch.repeat(depth)}%c${message}`,
					indent,
					'color: default; border-radius: 4px;'
				);
			}
		} else if (typeof message === 'object') {
			// console.table(message);
			console.log(message);
		} else {
			console.log(message);
		}
	}
}
