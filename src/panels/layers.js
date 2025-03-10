import { getCurrentProject, getCurrentProjectEditor } from '../app/main.js';
import { addAsChildren, makeElement } from '../common/dom.js';
import { eventHandlerData } from '../edit_canvas/events.js';
import { addChildActions, getActionData } from './actions.js';
import { makeCard_itemNavigation } from './card_glyph.js';
import { panelsEventHandlerData } from './panel_events.js';
import { refreshPanel } from './panels.js';

// --------------------------------------------------------------
// Layer panel
// --------------------------------------------------------------

export function makePanel_Layers() {
	// log(`makePanel_Layers`, 'start');
	let rowsArea = makeElement({ className: 'panel__card full-width item-links__rows-area' });
	const editor = getCurrentProjectEditor();
	const project = getCurrentProject();
	let selected = editor.selectedItem;
	let paths = selected.shapes;

	// log(`\n⮟eventHandlerData⮟`);
	// log(eventHandlerData);

	if (eventHandlerData?.newBasicPath?.objType) {
		// log(`Handling new basic path`);
		let path = eventHandlerData.newBasicPath;
		let row = makeElement();
		row.setAttribute('class', 'item-link__row layer-panel__new-path');
		row.classList.add('layer-panel__selected');
		row.appendChild(
			makeElement({
				className: 'item-link__thumbnail',
				innerHTML: project.makeItemThumbnail(path),
			})
		);

		row.appendChild(
			makeElement({
				className: 'item-link__title',
				innerHTML: path.name,
			})
		);

		rowsArea.appendChild(row);
	}

	// log(`\n⮟paths⮟`);
	// log(paths);
	if (paths.length > 0) {
		for (let i = paths.length - 1; i >= 0; i--) {
			let item = paths[i];
			let row = makeElement({ attributes: { 'target-path-index': i } });

			if (item.objType === 'ComponentInstance') {
				row.setAttribute('class', 'item-link__row layer-panel__component-row');
			} else {
				row.setAttribute('class', 'item-link__row layer-panel__path-row');
			}

			if (editor.multiSelect.shapes.isSelected(item)) {
				row.classList.add('layer-panel__selected');
			}

			editor.subscribe({
				topic: 'whichShapeIsSelected',
				subscriberID: `layersPanel.item-link-row-${i}`,
				callback: () => {
					// log(`Layer subscription callback for selectedPath`, 'start');

					let isSelected = editor.multiSelect.shapes.isSelected(item);
					// log(`isSelected: ${isSelected}`);
					// log(row.classList.toString());
					row.classList.toggle('layer-panel__selected', isSelected);
					// log(`Layer subscription callback for selectedPath`, 'end');
				},
			});

			row.addEventListener('click', () => {
				if (panelsEventHandlerData.isCtrlDown) {
					editor.multiSelect.shapes.toggle(item);
				} else {
					editor.multiSelect.shapes.select(item);
				}
				editor.publish('whichShapeIsSelected', item);
			});

			const thumbnail = makeElement({
				className: 'item-link__thumbnail',
				attributes: { 'target-path-index': i },
				innerHTML: project.makeItemThumbnail(item),
			});
			row.appendChild(thumbnail);

			row.appendChild(
				makeElement({
					className: 'item-link__title',
					innerHTML: `${item.name}`,
				})
			);

			let subtitle = 'Path';
			if (item.link) subtitle = `Component instance&emsp;|&emsp;${project.getItem(item.link).name}`;
			row.appendChild(
				makeElement({
					className: 'item-link__subtitle',
					innerHTML: subtitle,
				})
			);

			rowsArea.appendChild(row);
		}
	} else {
		rowsArea.appendChild(
			makeElement({
				content: `No paths exist yet.  You can create one with the New Path tools on the canvas, or by pressing "add new path" below.`,
			})
		);
	}

	// Overall, watch for changes:
	editor.subscribe({
		topic: ['currentPath', 'currentItem'],
		subscriberID: 'layersPanel',
		callback: () => {
			refreshPanel();
		},
	});

	// log(`makePanel_Layers`, 'end');
	return [rowsArea, makeActionArea_Layers(), makeCard_itemNavigation(editor.selectedItem)];
}

function makeActionArea_Layers() {
	const editor = getCurrentProjectEditor();

	let actionsCard = makeElement({
		className: 'panel__card full-width',
		content: '<h3>Actions</h3>',
	});

	let actionsArea = makeElement({
		tag: 'div',
		className: 'panel__actions-area',
	});
	addChildActions(actionsArea, getActionData('addShapeActions'));

	let selectedPaths = editor.multiSelect.shapes.members;
	let totalPaths = editor.selectedItem.shapes.length;
	if (totalPaths > 1 && selectedPaths.length) {
		addChildActions(actionsArea, getActionData('layerActions'));
	}

	addAsChildren(actionsCard, actionsArea);
	return actionsCard;
}
