import { FontEditNavigator } from './font-edit-navigator.js';
import { ProjectEditor } from './project_editor.js';

export class FontEditProjectEditor extends ProjectEditor {

	constructor(newProjectEditor) {
		super(newProjectEditor)
		this.nav = new FontEditNavigator();
	}

}
