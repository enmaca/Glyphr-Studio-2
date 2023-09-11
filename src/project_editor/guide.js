/**
		Guide
		An object used by the UI for drawing guide
		lines on the edit canvas, and for saving
		custom guides to a Glyphr Studio Project.
**/

export const defaultCustomGuideColor = 'rgb(255, 100, 0)';
export const defaultSystemGuideColor = 'rgb(95, 121, 134)';
export const showSystemGuideDefaults = {
	ascent: false,
	capHeight: false,
	xHeight: false,
	baseline: true,
	descent: false,
	leftSide: true,
	rightSide: true
};

export class Guide {
	constructor(oa) {
		this.objType = 'Guide';
		this.name = oa.name;
		this.angle = oa.angle || 90;
		this.location = !isNaN(parseInt(oa.location)) ? parseInt(oa.location) : 200;
		this.color = oa.color || defaultCustomGuideColor;
		this.visible = !!oa.visible;
		this.readOnly = !!oa.readOnly;
	}

	save() {
		let result = {};

		let n = this.name;
		if (n !== 'Horizontal guide' && n !== 'Vertical guide' && n !== 'Guide') {
			result.name = this.name;
		}
		if (this.angle !== 90) result.angle = this.angle;
		if (this.location !== 200) result.location = this.location;
		if (this.color !== defaultCustomGuideColor) result.color = this.color;
		if (!this.visible) result.visible = this.visible;

		return result;
	}

	get name() {
		if (!this.name) {
			if (this.angle === 90) this._name = 'Horizontal guide';
			else if (this.angle === 0) this._name = 'Vertical guide';
			else this._name = 'Guide';
		}
		return this._name;
	}

	set name(newName = 'Guide') {
		this._name = newName;
	}
}