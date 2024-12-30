import { showError } from '../controls/dialogs/dialogs.js';
import { importGlyphrProjectFromText } from '../project_editor/import_project.js';
import boolTestProject from '../samples/boolean_tests.gs2?raw';
import obleggSampleProject from '../samples/oblegg.gs2?raw';
import simpleExampleProject from '../samples/simpleExampleProject.json';
import { hasFontId } from '../utils/font/font-edit-has-font-id.js';
import { _DEV } from './dev_mode_includes.js';
import { loadFont, makeFontIdNotFoundPage, makeLoadingFontPage } from './font-edit-project.js';
import { addProjectEditorAndSetAsImportTarget } from './main.js';
import { pause } from '../common/functions.js';
import { GlyphrStudioApp } from './app.js';
import { FontEditProjectEditor } from '../project_editor/font-edit-project-editor.js';

/**
 * Creates a new Glyphr Studio Application
 */
export class FontEditGlyphrStudioApp extends GlyphrStudioApp {
	constructor() {
		// Settings
		console.log('start building app from font edit verson')
		super();
	}

	/**
	 * Starts up the app
	 */
	async setUp() {
		// log(`GlyphrStudioApp.setUp`, 'start');
		let editor = addProjectEditorAndSetAsImportTarget();

		// Dev mode stuff
		const dev = this.settings.dev;
		if (dev.mode) {
			if (dev.overwriteTitle) document.title = '⡄⡆⡇🄳🄴🅅 🄼🄾🄳🄴⡇⡆⡄';
			// @ts-ignore
			window._DEV = _DEV;

			// Test Function
			if (dev.testOnLoad) dev.testOnLoad();

			// Navigation & selection
			if (typeof dev.sampleProject === 'boolean' && dev.sampleProject) {
				importGlyphrProjectFromText(simpleExampleProject);
			} else if (typeof dev.sampleProject === 'string') {
				let proj;
				if (dev.sampleProject === 'oblegg') proj = obleggSampleProject;
				if (dev.sampleProject === 'bool') proj = boolTestProject;
				// if (dev.sampleProject === 'test') proj = test;
				editor.project = importGlyphrProjectFromText(proj);
			}
			if (typeof dev.currentGlyphID === 'string') editor.selectedGlyphID = dev.currentGlyphID;
			if (typeof dev.currentPage === 'string') editor.nav.page = dev.currentPage;
			if (typeof dev.currentPanel === 'string') editor.nav.panel = dev.currentPanel;
			if (dev.currentTool) editor.selectedTool = dev.currentTool;
			if (dev.selectFirstShape) editor.multiSelect.shapes.select(editor.selectedItem.shapes[0]);
			if (dev.selectFirstPoint)
				editor.multiSelect.points.select(editor.selectedItem.shapes[0].pathPoints[0]);
		}

		if(hasFontId()){
			this.appPageNavigate(makeLoadingFontPage);
			await pause(1000)
			try {
				await loadFont()
			}catch(e){
				showError(`Some unknown error happened when loading the file.`);
				this.appPageNavigate(makeFontIdNotFoundPage);
			}
		}else {
			this.appPageNavigate(makeFontIdNotFoundPage);
		}

		// Final dev mode stuff
		// @ts-ignore
		if (dev.mode && (dev.selectFirstShape || dev.selectFirstPoint)) editor.editCanvas.redraw();
		console.log(this);
		// log(`GlyphrStudioApp.setUp`, 'end');
	}

	/**
	 * Returns the selected Project Editor
	 * @returns {FontEditProjectEditor}
	 */
	get selectedProjectEditor() {
		if (!this._selectedProjectEditor) {
			if (this.projectEditors.length === 0) this.projectEditors[0] = new FontEditProjectEditor();
			this.selectedProjectEditor = this.projectEditors[0];
		}

		return this._selectedProjectEditor;
	}

	/**
	 * Sets the selected Project Editor
	 * @param {FontEditProjectEditor} editor
	 */
	set selectedProjectEditor(editor) {
		if (this.projectEditors[0] === editor) {
			this._selectedProjectEditor = this.projectEditors[0];
		}
		if (this.projectEditors[1] === editor) {
			this._selectedProjectEditor = this.projectEditors[1];
		}
	}

}
