import { decToHex } from '../common/character_ids.js';
import { clone, getFirstID, json, round } from '../common/functions.js';
import { showToast } from '../controls/dialogs/dialogs.js';
import { calculateKernOffset } from '../display_canvas/text_block.js';
import { TextBlockOptions } from '../display_canvas/text_block_options.js';
import { getItemStringAdvanceWidth } from '../edit_canvas/context_characters.js';
import { EditCanvas } from '../edit_canvas/edit_canvas.js';
import { isCharInRange } from '../lib/unicode/unicode_blocks.js';
import { findCharacterRange } from '../pages/settings_project.js';
import { CharacterRange } from '../project_data/character_range.js';
import { Glyph } from '../project_data/glyph.js';
import { GlyphrStudioProject } from '../project_data/glyphr_studio_project.js';
import { KernGroup } from '../project_data/kern_group.js';
import {
	kernGroupDisplayWidth,
	kernGroupSideMaxWidth,
	resolveItemLinks,
} from './cross_item_actions.js';
import { saveTextFile } from './file_io.js';
import { History } from './history.js';
import { MultiSelectPoints, MultiSelectShapes } from './multiselect.js';
import { Navigator } from './navigator.js';
import { publish, subscribe, unsubscribe } from './pub_sub.js';

/**
 * Creates a new Glyphr Studio Project Editor.
 * An Editor is all the UI it takes to edit a project,
 * including Pages, Panels, History, Saved State,
 * Import/Export, etc.
 *
 * Many Project Editors can be run side-by-side,
 * editing many Glyphr Studio Projects. Could be
 * in tabs or separate windows, but the App has
 * access to all the Project Editors, enabling
 * cross-project features like glyph copy/paste.
 *
 * @class
 * @public
 */
export class ProjectEditor {
	/**
	 * Initialize a project editor, with defaults
	 * @param {Object} newProjectEditor
	 */
	constructor(newProjectEditor) {
		// log('ProjectEditor.constructor', 'start');
		if (newProjectEditor) {
			// log(`\n⮟Passed: newProjectEditor⮟`);
			// log(newProjectEditor);
		}

		// File reference
		this.loadedFileHandle = false;

		// Project
		this.project;
		// if (newProjectEditor.project) this.project = newProjectEditor.project;
		// log(`this.project`);
		// log(this.project);

		// History
		this.history = new History();

		// Saving
		this.projectSaved = true;
		this.stopPageNavigation = true;

		// PubSub
		this.subscribers = {};
		this.publish = publish;
		this.subscribe = subscribe;
		this.unsubscribe = unsubscribe;

		// Selections
		this.selectedGlyphID = false;
		this.selectedComponentID = false;
		this.selectedLigatureID = false;
		this.selectedKernGroupID = false;
		this.selectedCharacterRange = false;
		this.chooserPage = {
			characters: 0,
			components: 0,
			ligatures: 0,
			kerning: 0,
		};

		// Navigation
		this.nav = new Navigator();
		this.showPageTransitions = true;

		// Canvas
		/** @type {EditCanvas} */
		this.editCanvas;

		// Views
		this._views = {};
		this.defaultView = { dx: -1000, dy: -1000, dz: 0.5, default: true };

		// Guides
		this.systemGuides = {
			ascent: false,
			capHeight: false,
			xHeight: false,
			baseline: true,
			descent: false,
			leftSide: true,
			rightSide: true,
		};

		// Pop Out Window
		this.popOutWindow = false;

		// Live previews - livePreviews[0] is for the Live Preview Page
		// The rest are for the Pop Out Window
		this.livePreviews = false;

		// Event handlers
		this.eventHandlers = {};
		this.selectedTool = 'resize';

		// MultiSelect
		this.multiSelect = {
			points: new MultiSelectPoints(),
			shapes: new MultiSelectShapes(),
		};

		// Clipboard
		this.clipboard = {};

		// Dialogs
		this.closeAllDialogsOverride = false;

		// log(`\n⮟ProjectEditor⮟`);
		// log(this);
		// log('ProjectEditor.constructor', 'end');
	}

	// --------------------------------------------------------------
	// Navigate
	// --------------------------------------------------------------

	/**
	 * Refreshes the whole UI
	 * @param {Boolean =} test - set to true when running from Vitest
	 */
	navigate(test = false) {
		// log(`ProjectEditor.navigate`, 'start');
		this.nav.navigate(test);
		// log(`ProjectEditor.navigate`, 'end');
	}

	// --------------------------------------------------------------
	// Project
	// --------------------------------------------------------------

	/**
	 * Get the project for this editor
	 * @returns {GlyphrStudioProject}
	 */
	get project() {
		if (!this._project) {
			this._project = new GlyphrStudioProject({});
			this.initializeHistory(this._project);
		}
		return this._project;
	}

	/**
	 * Set the project for this editor
	 * @param {GlyphrStudioProject} gsp - project to set
	 * @returns {GlyphrStudioProject}
	 */
	set project(gsp) {
		// log(`ProjectEditor SET project`, 'start');
		// log(gsp);
		if (gsp) {
			// log(`Importing project...`);
			this._project = gsp;
			this.initializeHistory(gsp);
			this.selectedGlyphID = 'glyph-0x41';
		} else {
			// log(`Setting to false`);
			// this._project = false;
		}
		// log(`ProjectEditor SET project`, 'end');
	}

	initializeHistory(project) {
		this.history = new History();
		this.history.queue = [];
		this.history.initialTimeStamp = new Date().getTime();
		this.history.initialProject = project;
	}

	// --------------------------------------------------------------
	// Get Individual Selected Work Items
	// --------------------------------------------------------------

	/**
	 * Returns the appropriate Glyph, Ligature, or Component
	 * based on the current page
	 */
	get selectedItem() {
		// log(`ProjectEditor GET selectedItem`, 'start');

		if (this.nav.page === 'Characters') {
			// log(`this.selectedGlyph: ${this.selectedGlyph}`);
			// log(`ProjectEditor GET selectedItem`, 'end');
			return this.selectedGlyph;
		} else if (this.nav.page === 'Ligatures') {
			// log(`this.selectedLigature: ${this.selectedLigature}`);
			// log(`ProjectEditor GET selectedItem`, 'end');
			return this.selectedLigature;
		} else if (this.nav.page === 'Components') {
			// log(`this.selectedComponent: ${this.selectedComponent}`);
			// log(`ProjectEditor GET selectedItem`, 'end');
			return this.selectedComponent;
		} else if (this.nav.page === 'Kerning') {
			// log(`this.selectedKernGroup: ${this.selectedKernGroup}`);
			// log(`ProjectEditor GET selectedItem`, 'end');
			return this.selectedKernGroup;
		} else {
			// log(`Nav page not detected`);
			// log(`ProjectEditor GET selectedItem`, 'end');
			return false;
		}
	}

	/**
	 * Returns the appropriate Glyph, Ligature or Component
	 * ID based on the current page
	 * @returns {String | false}
	 */
	get selectedItemID() {
		if (this.nav.page === 'Characters') return this.selectedGlyphID;
		else if (this.nav.page === 'Components') return this.selectedComponentID;
		else if (this.nav.page === 'Ligatures') return this.selectedLigatureID;
		else if (this.nav.page === 'Kerning') return this.selectedKernGroupID;
		else return false;
	}

	/**
	 * Returns the selected glyph
	 * @returns {Object}
	 */
	get selectedGlyph() {
		// log('ProjectEditor GET selectedGlyph', 'start');
		const selectedID = this.selectedGlyphID;
		// log(`selectedGlyphID ${selectedID}`);
		if (!this.project.glyphs[selectedID]) {
			this.project.addItemByType(new Glyph(), 'Glyph', selectedID);
			this.history.addWholeProjectChangePostState();
		}
		let re = this.project.glyphs[selectedID];
		// log(re);
		// log('ProjectEditor GET selectedGlyph', 'end');
		return re;
	}

	/**
	 * Returns the selected glyph ID
	 * @returns {String | false}
	 */
	get selectedGlyphID() {
		// log('ProjectEditor GET selectedGlyphID', 'start');

		if (!this._selectedGlyphID) {
			const rangeBegin = this.selectedCharacterRange.begin;
			// Special case Basic Latin (return Capital A, not Space)
			if (rangeBegin === 0x20 && isCharInRange(0x41, this.selectedCharacterRange)) {
				this._selectedGlyphID = 'glyph-0x41';
			} else {
				// Otherwise, just return the first char of the selected range
				let begin = decToHex(rangeBegin) || '0x41';
				this._selectedGlyphID = `glyph-${begin}`;
			}
		}
		// log(`RETURNING this._selectedGlyphID: ${this._selectedGlyphID}`);
		// log('ProjectEditor GET selectedGlyphID', 'end');
		if (typeof this._selectedGlyphID === 'boolean') return false;
		return this._selectedGlyphID;
	}

	/**
	 * Returns the selected ligature
	 * @returns {Object}
	 */
	get selectedLigature() {
		// log(`ProjectEditor GET selectedLigature`, 'start');
		const selectedID = this.selectedLigatureID;
		const re = this.project.ligatures[selectedID];
		// log(`ProjectEditor GET selectedLigature`, 'end');
		return re;
	}

	/**
	 * Returns the selected ligature ID
	 * @returns {String | false}
	 */
	get selectedLigatureID() {
		// log(`ProjectEditor GET selectedLigatureID`, 'start');
		if (!this._selectedLigatureID) {
			this._selectedLigatureID = getFirstID(this.project.ligatures);
		}
		// log(`ProjectEditor GET selectedLigatureID`, 'end');
		if (typeof this._selectedLigatureID === 'boolean') return false;
		return this._selectedLigatureID;
	}

	/**
	 * Returns the selected component
	 * @returns {Object}
	 */
	get selectedComponent() {
		const re = this.project.components[this.selectedComponentID];
		return re;
	}

	/**
	 * Returns the selected component ID
	 * @returns {String | false}
	 */
	get selectedComponentID() {
		if (!this._selectedComponentID) {
			this._selectedComponentID = getFirstID(this.project.components);
		}

		if (typeof this._selectedComponentID === 'boolean') return false;
		return this._selectedComponentID;
	}

	/**
	 * Returns the selected kern
	 * @returns {Object}
	 */
	get selectedKernGroup() {
		const selectedID = this.selectedKernGroupID;
		const re = this.project.kerning[selectedID];
		return re;
	}

	/**
	 * Returns the selected kern ID
	 * @returns {String | false}
	 */
	get selectedKernGroupID() {
		// log(`ProjectEditor GET selectedKernGroupID`, 'start');
		if (!this._selectedKernGroupID) {
			this._selectedKernGroupID = getFirstID(this.project.kerning);
		}
		// log(`ProjectEditor GET selectedKernGroupID`, 'end');
		if (typeof this._selectedKernGroupID === 'boolean') return false;
		return this._selectedKernGroupID;
	}

	/**
	 * Returns the selected Glyph Range
	 * @returns {Object}
	 */
	get selectedCharacterRange() {
		// log(`ProjectEditor GET selectedCharacterRange`, 'start');
		// log('current ranges');
		const ranges = this.project.settings.project.characterRanges;
		// log(ranges);
		// log('currently selected');
		// log(this._selectedCharacterRange);

		if (
			!this._selectedCharacterRange ||
			!this._selectedCharacterRange?.isValid ||
			!this._selectedCharacterRange?.enabled
		) {
			// log('detected none selected:');
			if (ranges.length) {
				let basicRange = findCharacterRange({ begin: 0x20, end: 0x7f }, ranges);
				if (basicRange && basicRange.enabled) {
					// If Basic Latin is a range, select it
					this._selectedCharacterRange = basicRange;
				} else {
					// Otherwise, just select the first range
					for (let r = 0; r < ranges.length; r++) {
						if (ranges[r].enabled) {
							this._selectedCharacterRange = new CharacterRange(ranges[r]);
							break;
						}
					}
				}
			}
		}

		if (!this._selectedCharacterRange) {
			// If there is still no ranges, create one
			this._selectedCharacterRange = new CharacterRange({
				begin: 0x20,
				end: 0x7f,
				name: 'Basic Latin (default)',
			});
		}

		// log(`returning`);
		// log(this._selectedCharacterRange);
		// log(`ProjectEditor GET selectedCharacterRange`, 'end');
		return this._selectedCharacterRange;
	}

	// --------------------------------------------------------------
	// Set Selected Work Items
	// --------------------------------------------------------------

	/**
	 * Sets the appropriate Glyph, Ligature, or Component
	 * based on the current page
	 */
	set selectedItem(newItem) {
		// log(`ProjectEditor SET selectedItem`, 'start');

		if (this.nav.page === 'Characters') {
			// log(`this.selectedGlyph: ${this.selectedGlyph}`);
			// log(`ProjectEditor SET selectedItem`, 'end');
			this.selectedGlyph = newItem;
		} else if (this.nav.page === 'Ligatures') {
			// log(`this.selectedLigature: ${this.selectedLigature}`);
			// log(`ProjectEditor SET selectedItem`, 'end');
			this.selectedLigature = newItem;
		} else if (this.nav.page === 'Components') {
			// log(`this.selectedComponent: ${this.selectedComponent}`);
			// log(`ProjectEditor SET selectedItem`, 'end');
			this.selectedComponent = newItem;
		} else if (this.nav.page === 'Kerning') {
			// log(`this.selectedKernGroup: ${this.selectedKernGroup}`);
			// log(`ProjectEditor SET selectedItem`, 'end');
			this.selectedKernGroup = newItem;
		}
	}

	/**
	 * Sets the selected item based on nav.page
	 * @param {String} newID - ID to select
	 */
	set selectedItemID(newID) {
		if (typeof newID === 'string') {
			if (newID.startsWith('glyph-')) this.selectedGlyphID = newID;
			else if (newID.startsWith('comp-')) this.selectedComponentID = newID;
			else if (newID.startsWith('liga-')) this.selectedLigatureID = newID;
			else if (newID.startsWith('kern-')) this.selectedKernGroupID = newID;
		}
	}

	/**
	 * Replaces the current Glyph
	 * @param {Glyph | Object} newGlyph - new glyph to set
	 */
	set selectedGlyph(newGlyph) {
		let id = this.selectedGlyphID;
		newGlyph = new Glyph(newGlyph);
		newGlyph.parent = this.project;
		this.project.glyphs[id] = newGlyph;
	}

	/**
	 * Sets the selected glyph
	 * @param {String | false} id - ID to select
	 */
	set selectedGlyphID(id) {
		// log(`ProjectEditor SET selectedGlyphID`, 'start');
		// log(`id: ${id}`);
		if (typeof id !== 'string' || !id.startsWith('glyph-')) {
			this._selectedGlyphID = false;
		} else if (this.project.glyphs[id]) {
			this._selectedGlyphID = id;
		} else if (id.startsWith('glyph-')) {
			this.project.glyphs[id] = new Glyph({ id: id, parent: this.project });
			this._selectedGlyphID = id;
		}
		this.publish('whichGlyphIsSelected', this.selectedGlyphID);
		// log(`ProjectEditor SET selectedGlyphID`, 'end');
	}

	/**
	 * Replaces the current Ligature
	 * @param {Glyph | Object} newLigature - new ligature to set
	 */
	set selectedLigature(newLigature) {
		let id = this.selectedLigatureID;
		newLigature = new Glyph(newLigature);
		newLigature.parent = this.project;
		this.project.ligatures[id] = newLigature;
	}

	/**
	 * Sets the selected ligature
	 * @param {String | false} id - ID to select
	 */
	set selectedLigatureID(id) {
		if (typeof id !== 'string' || !id.startsWith('liga-')) {
			this._selectedLigatureID = false;
		} else if (this.project.ligatures[id]) {
			this._selectedLigatureID = id;
		} else {
			console.warn(`Ligature ID ${id} does not exist in the project.`);
			this._selectedLigatureID = getFirstID(this.project.ligatures);
		}

		if (this._selectedLigatureID) {
			this.publish('whichLigatureIsSelected', this.selectedLigatureID);
		}
	}

	/**
	 * Replaces the current Component
	 * @param {Glyph | Object} newComponent - new component to set
	 */
	set selectedComponent(newComponent) {
		let id = this.selectedComponentID;
		newComponent = new Glyph(newComponent);
		newComponent.parent = this.project;
		this.project.components[id] = newComponent;
	}

	/**
	 * Sets the selected component
	 * @param {String | false} id - ID to select
	 */
	set selectedComponentID(id) {
		if (typeof id !== 'string' || !id.startsWith('comp-')) {
			this._selectedComponentID = false;
		} else if (this.project.components[id]) {
			this._selectedComponentID = id;
		} else {
			console.warn(`Component ID ${id} does not exist in the project.`);
			this._selectedComponentID = getFirstID(this.project.components);
		}

		if (this._selectedComponentID) {
			this.publish('whichComponentIsSelected', this.selectedComponentID);
		}
	}

	/**
	 * Replaces the current Kern
	 * @param {KernGroup} newKern - new kern to set
	 */
	set selectedKernGroup(newKern) {
		let id = this.selectedKernGroupID;
		newKern = new KernGroup(newKern);
		this.project.kerning[id] = newKern;
	}

	/**
	 * Sets the selected kern
	 * @param {String | false} id - ID to select
	 */
	set selectedKernGroupID(id) {
		if (typeof id !== 'string' || !id.startsWith('kern-')) {
			this._selectedKernGroupID = false;
			return;
		}
		if (this.project.kerning[id]) {
			this._selectedKernGroupID = id;
		} else {
			console.warn(`Kern ID ${id} does not exist in the project.`);
			this._selectedKernGroupID = getFirstID(this.project.kerning);
		}

		if (this._selectedKernGroupID) {
			this.publish('whichKernGroupIsSelected', this.selectedKernGroupID);
		}
	}

	/**
	 * Sets the selected character range
	 * @param {Object} newRange - range object
	 */
	set selectedCharacterRange(newRange) {
		// log(`ProjectEditor SET selectedCharacterRange`, 'start');
		// log(`\n⮟newRange⮟`);
		// log(newRange);
		this._selectedCharacterRange = new CharacterRange(newRange);
		// log(`\n⮟this._selectedCharacterRange⮟`);
		// log(this._selectedCharacterRange);
		// log(`ProjectEditor SET selectedCharacterRange`, 'end');
	}

	// --------------------------------------------------------------
	// Project-level actions
	// --------------------------------------------------------------

	/**
	 * Deletes the selected item, based on the current page
	 * @param {String | false} page - currently selected page
	 */
	deleteSelectedItemFromProject(page = false) {
		// log(`deleteSelectedItemFromProject`, 'start');
		// log(`page: ${page}`);
		// log(`this.nav.page: ${this.nav.page}`);
		const itemPageName = page || this.nav.page || 'Overview';
		// log(`itemPageName: ${itemPageName}`);

		let id;
		const unlinkComponentInstances = this.project.settings.app.unlinkComponentInstances;

		if (itemPageName === 'Characters') {
			// log(`deleting selectedGlyphID: ${this.selectedGlyphID}`);
			id = this.selectedGlyphID;
			if (id) this.deleteItem(id, this.project.glyphs, unlinkComponentInstances);
		} else if (itemPageName === 'Components') {
			// log(`deleting selectedComponentID: ${this.selectedComponentID}`);
			id = this.selectedComponentID;
			if (id) this.deleteItem(id, this.project.components, unlinkComponentInstances);
		} else if (itemPageName === 'Ligatures') {
			// log(`deleting selectedLigatureID: ${this.selectedLigatureID}`);
			id = this.selectedLigatureID;
			if (id) this.deleteItem(id, this.project.ligatures, unlinkComponentInstances);
		} else if (itemPageName === 'Kerning') {
			// log(`deleting selectedKernGroupID: ${this.selectedKernGroupID}`);
			id = this.selectedKernGroupID;
			if (id) this.deleteItem(id, this.project.kerning);
		}

		const fallbackAcrossItemType = this.selectFallbackItem(itemPageName);
		// log(`fallbackAcrossItemType: ${fallbackAcrossItemType}`);
		if (fallbackAcrossItemType) {
			this.nav.page = 'Characters';
			this.navigate();
		}
		// log(`deleteSelectedItemFromProject`, 'end');
	}

	/**
	 *
	 * @param {String} itemID - ID of item to delete
	 * @param {Object} projectGroup - collection of project items
	 * @param {Boolean} unlinkComponentInstances
	 */
	deleteItem(itemID, projectGroup, unlinkComponentInstances = false) {
		const item = this.project.getItem(itemID);
		if (item) {
			let historyTitle = `Deleted ${item.displayType} ${itemID} : ${item.name}`;
			if (item?.usedIn?.length) {
				historyTitle += ', and unlinked instances where it was used as a component.';
				this.history.addWholeProjectChangePreState(historyTitle);
			} else {
				this.history.addState(historyTitle, true);
			}
			resolveItemLinks(item, unlinkComponentInstances);
			delete projectGroup[itemID];
			if (item?.usedIn?.length) this.history.addWholeProjectChangePostState();
		}
	}

	/**
	 * When an item is deleted, this finds the next best item to select.
	 * For Glyphs, there is additional logic to stay within the current
	 * selected range, and to special case Basic Latin order.
	 * For Ligatures, Components, and Kerns, it's just the first item.
	 * @param {String | false} page name of object type's page to fallback to
	 */
	selectFallbackItem(page = false) {
		// log(`ProjectEditor.selectFallbackItem`, 'start');
		const itemPageName = page || this.nav.page;
		// log(`itemPageName: ${itemPageName}`);
		let fallbackAcrossItemType = false;

		if (itemPageName === 'Components') {
			// log(`\n⮟this.project.components⮟`);
			// log(this.project.components);
			this.selectedComponentID = getFirstID(this.project.components);
			if (!this.selectedComponentID) fallbackAcrossItemType = true;
			// log(`new selectedComponentID: ${this.selectedComponentID}`);
		} else if (itemPageName === 'Ligatures') {
			// log(`\n⮟this.project.ligatures⮟`);
			// log(this.project.ligatures);
			// log(Object.keys(this.project.ligatures));
			this.selectedLigatureID = getFirstID(this.project.ligatures);
			if (!this.selectedLigatureID) fallbackAcrossItemType = true;
			// log(`new selectedLigatureID: ${this.selectedLigatureID}`);
		} else if (itemPageName === 'Kerning') {
			// log(`\n⮟this.project.kerning⮟`);
			// log(this.project.kerning);
			this.selectedKernGroupID = getFirstID(this.project.kerning);
			if (!this.selectedKernGroupID) fallbackAcrossItemType = true;
			// log(`new selectedKernGroupID: ${this.selectedKernGroupID}`);
		}

		// log(`fallbackAcrossItemType: ${fallbackAcrossItemType}`);

		if (itemPageName === 'Characters' || fallbackAcrossItemType) {
			const selectedRange = this.selectedCharacterRange;
			if (selectedRange) {
				// log(`Selected Range detected as ${selectedRange.name}`);
				let rangeList = selectedRange.getMemberIDs();
				for (let i = 0; i < rangeList.length; i++) {
					let id = `glyph-${rangeList[i]}`;
					// log(`checking id ${id}`);
					if (this.project.glyphs[id]) {
						this.selectedGlyphID = id;
						break;
					}
				}
			}
			// log(`new selectedGlyphID: ${this.selectedGlyphID}`);
		}

		// log(`ProjectEditor.selectFallbackItem`, 'end');
		return fallbackAcrossItemType;
	}

	// --------------------------------------------------------------
	// Multi-select
	// --------------------------------------------------------------

	/**
	 * Syncs changes to multiselected paths from path point selections
	 * @returns nothing
	 */
	selectPathsThatHaveSelectedPoints() {
		// log('ProjectEditor.selectPathsThatHaveSelectedPoints', 'start');
		const msPoints = this.multiSelect.points;
		const selectedPoints = msPoints.members;
		if (selectedPoints.length === 0) return;

		const msShapes = this.multiSelect.shapes;
		const selectedItemShapes = this.selectedItem.shapes;

		let parentPath;
		let changed = false;

		for (let p = 0; p < selectedPoints.length; p++) {
			parentPath = selectedPoints[p].parent;
			// if(!msShapes.isSelected(parentPath)) {
			// log(`selecting path`);
			// 	msShapes.add(parentPath);
			// 	changed = true;
			// }
			for (let p = 0; p < selectedItemShapes.length; p++) {
				if (selectedItemShapes[p].objType !== 'ComponentInstance') {
					if (parentPath === selectedItemShapes[p]) {
						// log(`selecting path!`);
						msShapes.add(selectedItemShapes[p]);
						changed = true;
					}
				}
			}
		}

		if (changed) msShapes.publishChanges();
		// log('ProjectEditor.selectPathsThatHaveSelectedPoints', 'end');
	}

	// --------------------------------------------------------------
	// Tool
	// --------------------------------------------------------------

	set selectedTool(newTool) {
		// log(`ProjectEditor.selectedTool SET to ${newTool}`);
		this._selectedTool = newTool;
	}

	get selectedTool() {
		return this._selectedTool;
	}

	// --------------------------------------------------------------
	// Views
	// --------------------------------------------------------------
	/**
	 * Sets the view for the current work item on the current page
	 * @param {Object} oa
	 */
	set view(oa) {
		// log(`ProjectEditor SET view`, 'start');
		let id = this.selectedItemID;

		// Ensure there are at least defaults
		if (!this._views[id]) {
			// log(`\t no view, getting default`);
			this._views[id] = this.view;
		}
		// log(`\t setting ${JSON.stringify(oa)}`);

		// Check for which to set
		if (Number.isFinite(oa.dx)) {
			// log(`oa.dx: ${oa.dx}`);
			this._views[id].dx = oa.dx;
		}

		if (Number.isFinite(oa.dy)) {
			// log(`oa.dy: ${oa.dy}`);
			this._views[id].dy = oa.dy;
		}

		if (Number.isFinite(oa.dz)) {
			// log(`oa.dz: ${oa.dz}`);
			this._views[id].dz = oa.dz;
		}

		if (this._views[id].default) delete this._views[id].default;
		// log(`set as ${JSON.stringify(this._views[id])}`);
		// log(`ProjectEditor SET view`, 'end');
	}

	/**
	 * Gets the current view for the current work item on the current page
	 */
	get view() {
		// log(`ProjectEditor GET view`, 'start');

		let id = this.selectedItemID;
		let re = false;

		if (this._views[id]) {
			re = this._views[id];
		} else {
			re = clone(this.defaultView);
		}

		// log(`returning ${JSON.stringify(re)}`);
		// log(`ProjectEditor GET view`, 'end');

		return re;
	}

	/**
	 * Check to see if a work item has a view set already
	 * @param {String} id - work item id to check
	 * @returns boolean
	 */
	viewExists(id) {
		return !!this._views[id];
	}

	updateViewZoom(zoomInput, center = {}) {
		// log(`updateViewZoom`, 'start');
		// log(`zoomInput: ${zoomInput}`);
		// log(`center: ${center.x}, ${center.y}`);

		zoomInput = parseFloat(zoomInput);
		const v = this.view;
		const cx = center.x;
		const cy = center.y;

		this.view = {
			dz: zoomInput * v.dz,
			dx: cx ? cx - (cx - v.dx) * zoomInput : v.dx,
			dy: cy ? cy - (cy - v.dy) * zoomInput : v.dy,
		};

		this.publish('editCanvasView', this.view);
		// log(`updateViewZoom`, 'end');
	}

	setViewZoom(zoomInput) {
		const newValue = parseFloat(zoomInput) / 100;
		this.view = { dz: newValue };
		this.publish('editCanvasView', this.view);
	}

	/**
	 * Calculates a view based on the screen size
	 * @param {Object} rect - width and height
	 * @returns {Object} - new View object: dx/dy/dz
	 */
	makeAutoFitView(rect = false) {
		// log(`ProjectEditor.makeAutoFitView`, 'start');
		// log(`rect:`);
		// log(rect);

		/*
			Gather measurements from project data (Em) units
		*/
		const isKern = this.selectedItem.objType === 'KernGroup';
		// log(`isKern: ${isKern}`);

		const emPadding = this.project.defaultAdvanceWidth / 2;
		let emWidth = emPadding * 2;
		let emLeftOffset = 0;
		const emHeight = this.project.totalVertical + emPadding * 2;

		if (isKern) {
			// Kerning
			emWidth += kernGroupDisplayWidth(this.selectedItem);
			emLeftOffset = kernGroupSideMaxWidth(this.selectedItem.leftGroup);
			emLeftOffset -= this.selectedItem.value;
		} else if (this.project.settings.app.contextCharacters.showCharacters) {
			// Context Characters
			let ctxChars = this.selectedItem.contextCharacters;
			// log(`ctxChars: ${ctxChars}`);
			let selChar = this.selectedItem.char;
			if (ctxChars === selChar) {
				emWidth += this.selectedItem.advanceWidth;
			} else {
				let selCharIndex = ctxChars.indexOf(selChar);
				// log(`selCharIndex: ${selCharIndex}`);
				// Context Characters do not contain the current selected char
				// Add it implicitly
				if (selCharIndex === -1) {
					ctxChars += selChar;
					selCharIndex = 1;
				}
				// Need to separate the two sides, because the
				// selected item char will not be combined with
				// the characters on either side to form ligatures
				let leftChars = ctxChars.substring(0, selCharIndex);
				let rightChars = ctxChars.substring(selCharIndex + 1);
				emWidth += getItemStringAdvanceWidth(leftChars);
				emWidth += this.selectedItem.advanceWidth;
				emWidth += getItemStringAdvanceWidth(rightChars);
				emWidth += calculateKernOffset(leftChars.charAt(leftChars.length), selChar);
				emWidth += calculateKernOffset(selChar, rightChars.charAt(0));
				// log(`leftChars: ${leftChars}`);
				// log(`rightChars: ${rightChars}`);

				emLeftOffset = getItemStringAdvanceWidth(leftChars);
			}
		} else {
			emWidth += this.selectedItem.advanceWidth || this.project.defaultAdvanceWidth;
		}

		// log(`emHeight: ${emHeight}`);
		// log(`emWidth: ${emWidth}`);
		// log(`emLeftOffset: ${emLeftOffset}`);

		/*
			Calculate measurements in Canvas (px) units
		*/

		//Zoom
		const newZ = Math.min(rect.height / emHeight, rect.width / emWidth);
		// log(`newZ: ${newZ}`);

		// Vertical
		const canvasPadding = emPadding * newZ;
		const canvasItemsHeight = emHeight * newZ;
		let newY = (rect.height - canvasItemsHeight) / 2;
		newY += canvasPadding;
		newY += this.project.settings.font.ascent * newZ;
		// log(`newY: ${newY}`);

		// Horizontal
		let canvasItemsWidth = emWidth * newZ;
		// log(`canvasItemsWidth: ${canvasItemsWidth}`);

		if (canvasItemsWidth === 0) canvasItemsWidth = rect.width / 3;
		let newX = (rect.width - canvasItemsWidth) / 2;
		newX += emLeftOffset * newZ;
		newX += canvasPadding;
		// log(`newX: ${newX}`);

		/*
			Assemble final view
		*/
		const newView = { dx: round(newX, 3), dy: round(newY, 3), dz: round(newZ, 3) };

		// log(`newView: ${JSON.stringify(newView)}`);
		// log(`ProjectEditor.makeAutoFitView`, 'end');
		return newView;
	}

	autoFitIfViewIsDefault() {
		// log(`ProjectEditor.autoFitIfViewIsDefault`, 'start');
		// log(`this.nav.isOnEditCanvasPage: ${this.nav.isOnEditCanvasPage}`);
		// log(`this.selectedItemID: ${this.selectedItemID}`);
		if (this.nav.isOnEditCanvasPage && this.selectedItemID) {
			// log(`this.view.default: ${this.view.default}`);
			if (this.view.default) {
				this.autoFitView();
			}
		}
		// log(`ProjectEditor.autoFitIfViewIsDefault`, 'end');
	}

	autoFitView() {
		// log(`ProjectEditor.autoFitView`, 'start');
		const bounds = this.getEditCanvasWrapperBounds();
		if (bounds) {
			this.view = this.makeAutoFitView(bounds);
			this.publish('editCanvasView', this.view);
		} else {
			console.warn('autoFitView called before DOM was ready');
			this.view = clone(this.defaultView);
		}
		// log(`ProjectEditor.autoFitView`, 'end');
		return this.view;
	}

	getEditCanvasWrapperBounds() {
		// log(`getEditCanvasWrapperBounds`, 'start');

		let wrapper = document.querySelector('.editor-page__edit-canvas-wrapper');
		// log(wrapper);
		if (wrapper) {
			// log(`getEditCanvasWrapperBounds`, 'end');
			return wrapper.getBoundingClientRect();
		}

		// log(`getEditCanvasWrapperBounds`, 'end');
		return false;
	}

	// --------------------------------------------------------------
	// Live Previews
	// --------------------------------------------------------------
	/**
	 * editor.livePreviews holds all the live previews for both the
	 * Live Previews page and the Pop Out Live Previews.
	 * editor.livePreviews[0] is reserved for the Live Previews Page.
	 * The rest are for the Pop Out Window.
	 */
	get livePreviews() {
		// log(`ProjectEditor GET livePreviews`, 'start');
		// log(`this._livePreviews: ${this._livePreviews}`);
		// log(`this._livePreviews.length: ${this._livePreviews.length}`);
		// log(`Array.isArray(this._livePreviews): ${Array.isArray(this._livePreviews)}`);
		// log(`this?.project?.settings?.app?.livePreviews`);
		// log(this?.project?.settings?.app?.livePreviews);
		if (
			!Array.isArray(this._livePreviews) ||
			this._livePreviews.length === 0 ||
			!this._livePreviews
		) {
			this._livePreviews = [];
			if (this.project?.settings?.app?.livePreviews.length) {
				this._livePreviews = this.project.settings.app.livePreviews.map(
					(preview) => new TextBlockOptions(preview)
				);
			}
			if (!this._livePreviews[0]?.text) {
				this._livePreviews[0] = new TextBlockOptions({
					text: 'the five boxing wizards jump quickly',
				});
			}
		}

		// log(`Returning:`);
		// log(this._livePreviews);
		// log(`ProjectEditor GET livePreviews`, 'end');
		return this._livePreviews;
	}

	set livePreviews(newPreviews) {
		if (!Array.isArray(newPreviews)) {
			this._livePreviews = [];
		} else {
			this._livePreviews = newPreviews.map((preview) => new TextBlockOptions(preview));
		}
	}

	get livePreviewPageOptions() {
		if (!this.livePreviews.length) {
			this.livePreviews[0] = new TextBlockOptions({
				text: 'the five boxing wizards jump quickly',
			});
		}

		return this.livePreviews[0];
	}

	set livePreviewPageOptions(newOptions) {
		this.livePreviews[0] = new TextBlockOptions(newOptions);
	}

	// --------------------------------------------------------------
	// Save
	// --------------------------------------------------------------

	/**
	 * Save a Glyphr Project Text File
	 * @param {Boolean} saveAsCopy - for Electron app, overwrite current working file
	 */
	async saveProjectFile(saveAsCopy = false) {
		// log(`ProjectEditor.saveProjectFile`, 'start');

		// log('' + this.project.settings.app.formatSaveFile);

		let saveData = this.project.save();

		const defaultValues = new GlyphrStudioProject({});
		saveData = removeDefaultValues(saveData, defaultValues, 'settings');

		if (this.project.settings.app.saveLivePreviews) {
			saveData.settings.app.livePreviews = [];
			this.livePreviews.forEach((preview) => {
				saveData.settings.app.livePreviews.push(preview.save());
			});
		} else {
			delete saveData.settings.app.livePreviews;
		}

		if (this.project.settings.app.formatSaveFile) saveData = json(saveData);
		else saveData = JSON.stringify(saveData);

		// log('saveProjectFile - \n'+saveData);

		await saveTextFile('gs2', saveData, saveAsCopy);
		showToast('Saved Glyphr Studio Project File');
		this.setProjectAsSaved();
		// log(`ProjectEditor.saveProjectFile`, 'end');
	}

	setProjectAsSaved() {
		this.project.resetSessionStateForAllItems();
		document.title = document.title.slice(0, document.title.indexOf(' •'));
	}
	setProjectAsUnsaved() {
		if (document.title.indexOf(' •') < 0) document.title += ' •';
	}
}

function removeDefaultValues(target, defaults, filterName) {
	Object.keys(target[filterName]).forEach((key) => {
		if (target[filterName][key] === defaults[filterName][key]) {
			delete target[filterName][key];
		}
	});

	return target;
}

// https://en.wikipedia.org/wiki/Typographic_ligature
export const ligatureToUnicode = {
	ff: '0xFB00',
	fi: '0xFB01',
	fl: '0xFB02',
	ft: '0xFB05',
	ffi: '0xFB03',
	ffl: '0xFB04',
};
