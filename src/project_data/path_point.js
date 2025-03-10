import {
	calculateAngle,
	calculateLength,
	parseNumber,
	round,
	xyPointsAreClose,
} from '../common/functions.js';
import { ControlPoint } from './control_point.js';
import { Coord } from './coord.js';
import { GlyphElement } from './glyph_element.js';

/**
 * Glyph Element > Path Point
 * A collection of these units make up a Path,
 * they have position and handles (or control
 * points). There are a few Path Point types, and
 * individual handles can be shown or hidden.
 */
export class PathPoint extends GlyphElement {
	/**
	 * Create a PathPoint
	 * @param {Object} arg
	 * @param {ControlPoint | Object | undefined =} arg.p - Main control point
	 * @param {ControlPoint | Object | undefined =} arg.h1 - First handle
	 * @param {ControlPoint | Object | undefined =} arg.h2 - Second handle
	 * @param {String =} arg.type - corner, flat, or symmetric
	 * @param {Number =} arg.projectUPM - project size for default handle lengths
	 * @param {Object =} arg.parent - link to the parent Path object
	 */
	constructor({ p, h1, h2, type = 'corner', projectUPM = 2048, parent = false } = {}) {
		// log(`PathPoint.constructor`, 'start');
		super();
		this.parent = parent;
		this.projectUPM = projectUPM;
		this.p = p;
		this.h1 = h1;
		this.h2 = h2;
		this.type = type;
		this.objType = 'PathPoint';

		if (this.hasOverlappingHandle('h1')) this.h1.use = false;
		if (this.hasOverlappingHandle('h2')) this.h2.use = false;
		// log(`PathPoint.constructor`, 'end');
	}

	// --------------------------------------------------------------
	// Common Glyphr Studio object methods
	// --------------------------------------------------------------

	/**
	 * Export object properties that need to be saved to a project file
	 * @param {Boolean} verbose - export some extra stuff that makes the saved object more readable
	 * @returns {*}
	 */
	save(verbose = false) {
		const re = {
			type: this.type,
			p: this.p.save(verbose),
		};

		if (this.h1.use || (!this.h1.use && !this.hasOverlappingHandle('h1'))) {
			re.h1 = this.h1.save(verbose);
		}
		if (this.h2.use || (!this.h2.use && !this.hasOverlappingHandle('h2'))) {
			re.h2 = this.h2.save(verbose);
		}

		if (verbose) re.objType = this.objType;
		// if (!verbose && this.__ID) delete this.__ID;

		return re;
	}

	/**
	 * Create a nicely-formatted string for this object
	 * @param {Number} level - how far down we are
	 * @param {Number | Boolean} num - increment designator for arrays
	 * @returns {String}
	 */
	print(level = 0, num = false) {
		let ind = '';
		for (let i = 0; i < level; i++) ind += '  ';
		let pNum = parseNumber(num) ? ` ${parseNumber(num)}` : '';
		let re = `${ind}{PathPoint${pNum}\n`;
		ind += '  ';

		re += `${ind}type: ${this.type}\n`;
		re += `${ind}p: ${this.p.print(level + 1)}\n`;

		re += `${ind}h1: ${this.h1.print(level + 1)}\n`;
		re += `${ind}h2: ${this.h2.print(level + 1)}\n`;

		re += `${ind.substring(2)}}/PathPoint${pNum}`;

		return re;
	}

	// --------------------------------------------------------------
	// Getters
	// --------------------------------------------------------------

	/**
	 * Get the main point
	 * @returns {ControlPoint}
	 */
	get p() {
		return this._p || new ControlPoint();
	}

	/**
	 * Get the first handle
	 * @returns {ControlPoint}
	 */
	get h1() {
		return this._h1 || new ControlPoint();
	}

	/**
	 * Get the second handle
	 * @returns {ControlPoint}
	 */
	get h2() {
		return this._h2 || new ControlPoint();
	}

	/**
	 * Get a point's type
	 * @returns {String} type - symmetric / flat / corner
	 */
	get type() {
		return this._type || 'corner';
	}

	/**
	 * Wrapper for p.xLock
	 */
	get xLock() {
		return this.p.xLock;
	}

	/**
	 * Wrapper for p.yLock
	 */
	get yLock() {
		return this.p.yLock;
	}

	/**
	 * Return a default name
	 */
	get name() {
		let pointNum = this.pointNumber === false ? '-1' : this.pointNumber;
		let parentName = this.parent.name;
		return `${parentName}: Path Point ${pointNum}`;
	}

	/**
	 * Figure out where this point is in the overall path
	 * @returns {Number | Boolean}
	 */
	get pointNumber() {
		if (!this.parent) return false;

		const pp = this.parent.pathPoints;
		if (!pp) return false;

		for (let p = 0; p < pp.length; p++) {
			if (pp[p] === this) return p;
		}

		return false;
	}

	/**
	 * Makes a default handle length that roughly
	 * scales with the project's UPM
	 */
	get defaultHandleLength() {
		// log(`defaultHandleLength`, 'start');
		// log(`this.projectUPM: ${this.projectUPM}`);
		let result;
		if (this.projectUPM < 100) result = 2;
		else if (this.projectUPM < 500) result = 10;
		else if (this.projectUPM < 1000) result = 50;
		else if (this.projectUPM < 2050) result = 100;
		else result = 200;
		// log(`result: ${result}`);
		// log(`defaultHandleLength`, 'end');
		return result;
	}

	// --------------------------------------------------------------
	// Setters
	// --------------------------------------------------------------

	/**
	 * set the main point
	 * @param {ControlPoint | undefined} newPoint
	 */
	set p(newPoint) {
		if (!newPoint) newPoint = new ControlPoint();
		newPoint.type = 'p';
		this._p = new ControlPoint(newPoint);
		this._p.parent = this;
	}

	/**
	 * set the first handle
	 * @param {ControlPoint | undefined} newPoint
	 */
	set h1(newPoint) {
		let needToInitialize = false;
		if (!newPoint) {
			newPoint = new ControlPoint();
			needToInitialize = true;
		}
		if (!newPoint.coord || needToInitialize) {
			newPoint.coord = new Coord({ x: this.p.x - this.defaultHandleLength, y: this.p.y });
			newPoint.use = false;
		}
		newPoint.type = 'h1';
		this._h1 = new ControlPoint(newPoint);
		this._h1.parent = this;
	}

	/**
	 * set the second handle
	 * @param {ControlPoint | undefined} newPoint
	 */
	set h2(newPoint) {
		let needToInitialize = false;
		if (!newPoint) {
			newPoint = new ControlPoint();
			needToInitialize = true;
		}
		if (!newPoint.coord || needToInitialize) {
			newPoint.coord = new Coord({ x: this.p.x + this.defaultHandleLength, y: this.p.y });
			newPoint.use = false;
		}
		newPoint.type = 'h2';
		this._h2 = new ControlPoint(newPoint);
		this._h2.parent = this;
	}

	/**
	 * Change a point's type
	 * @param {String} type - symmetric / flat / corner
	 */
	set type(type) {
		// log(`PathPoint SET type`, 'start');
		// log(`type: ${type}`);
		if (type === 'symmetric') this.makeSymmetric();
		else if (type === 'flat') this.makeFlat();
		else this._type = 'corner';
		// log(`PathPoint SET type`, 'end');
	}

	// --------------------------------------------------------------
	// Methods
	// --------------------------------------------------------------

	/**
	 * Updates position based on deltas
	 * @param {String} controlPoint - p / h1 / h2
	 * @param {Number} dx - delta x
	 * @param {Number} dy - delta y
	 */
	updatePathPointPosition(controlPoint = 'p', dx = 0, dy = 0) {
		// log(`PathPoint.updatePathPointPosition`, 'start');
		// log(`control point ${controlPoint} dx ${dx} dy ${dy}`);

		dx = parseNumber(dx);
		dy = parseNumber(dy);

		dx = Number.isFinite(dx) ? dx : 0;
		dy = Number.isFinite(dy) ? dy : 0;

		switch (controlPoint) {
			case 'p':
				// log('moving p / h1 / h2');
				this.p.coord.x += dx;
				this.p.coord.y += dy;

				this.h1.coord.x += dx;
				this.h1.coord.y += dy;

				this.h2.coord.x += dx;
				this.h2.coord.y += dy;
				break;

			case 'h1':
				// log('moving h1');
				this.h1.coord.x += dx;
				this.h1.coord.y += dy;
				if (this.h1.use) {
					if (this.type === 'symmetric') this.makeSymmetric('h1');
					else if (this.type === 'flat') this.makeFlat('h1');
				}
				break;

			case 'h2':
				// log('moving h2');
				this.h2.coord.x += dx;
				this.h2.coord.y += dy;
				if (this.h2.use) {
					if (this.type === 'symmetric') this.makeSymmetric('h2');
					else if (this.type === 'flat') this.makeFlat('h2');
				}
				break;
		}

		// log(`PathPoint.updatePathPointPosition`, 'end');
	}

	/**
	 * Moves one handle to be symmetrical with the other
	 * @param {String | Boolean =} hold - Handle to not move while making symmetric
	 * @returns {PathPoint}
	 */
	makeSymmetric(hold = false) {
		// log(`PathPoint.makeSymmetric`, 'start');
		// log(`hold: ${hold}`);
		this._type = 'symmetric';

		if (!hold) {
			hold = this.h1.use ? 'h1' : 'h2';
			if (!(this.h1.use || this.h2.use)) {
				if (
					// (this.h2.x + this.p.x + this.h1.x) / 3 === this.p.x &&
					// (this.h2.y + this.p.y + this.h1.y) / 3 === this.p.y
					xyPointsAreClose(this.p.coord, this.h1.coord) &&
					xyPointsAreClose(this.p.coord, this.h2.coord)
				) {
					// Handles and points are all in the same place
					this.h2.x -= 200;
					this.h1.x += 200;
					this.h1.use = true;
					this.h2.use = true;
					// log(`Handles and points are all in the same place`);
					// log('PathPoint.makeSymmetric', 'end');
					return this;
				}
			}
		}

		this.h1.use = true;
		this.h2.use = true;
		let newX, newY;
		let changed = false;
		switch (hold) {
			case 'h1':
				newX = this.p.x - this.h1.x + this.p.x;
				if (this.h2.x !== newX) {
					this.h2.x = newX;
					changed = true;
				}

				newY = this.p.y - this.h1.y + this.p.y;
				if (this.h2.y !== newY) {
					this.h2.y = newY;
					changed = true;
				}
				break;

			case 'h2':
				newX = this.p.x - this.h2.x + this.p.x;
				if (this.h1.x !== newX) {
					this.h1.x = newX;
					changed = true;
				}

				newY = this.p.y - this.h2.y + this.p.y;
				if (this.h1.y !== newY) {
					this.h1.y = newY;
					changed = true;
				}
				break;
		}

		this._type = 'symmetric';
		if (changed) {
			this.h1.use = true;
			this.h2.use = true;
		}

		// this.roundAll();
		// log(this);
		// log(`PathPoint.makeSymmetric`, 'end');
		return this;
	}

	/**
	 * Moves one handle to be inline with the other, while maintaining handle length
	 * @param {String | Boolean =} hold - handle to not move
	 * @returns {PathPoint}
	 */
	makeFlat(hold = false) {
		// log('PathPoint.makeFlat', 'start');
		// log(`Point position: ${this.p.x} / ${this.p.y}`);

		// log(`hold: ${hold}`);
		this._type = 'flat';

		if (this.isFlat()) {
			// log(`This path point is already flat.`);
			// log('PathPoint.makeFlat', 'end');
			return this;
		}

		if (!hold) {
			hold = this.h1.use ? 'h1' : 'h2';
			if (!(this.h1.use || this.h2.use)) {
				if (
					// 	(this.h2.x + this.p.x + this.h1.x) / 3 === this.p.x &&
					// 	(this.h2.y + this.p.y + this.h1.y) / 3 === this.p.y
					xyPointsAreClose(this.p.coord, this.h1.coord) &&
					xyPointsAreClose(this.p.coord, this.h2.coord)
				) {
					// Handles and points are all in the same place
					this.h2.x -= 300;
					this.h1.x += 100;
					// log(`Handles and points are all in the same place`);
					// log('PathPoint.makeFlat', 'end');
					return this;
				}
			}
			// log(`hold: ${hold}`);
		}

		this.h1.use = true;
		this.h2.use = true;

		const angle1 = calculateAngle(this.h1.coord, this.p.coord);
		const angle2 = calculateAngle(this.h2.coord, this.p.coord);
		const hyp1 = calculateLength(this.p.coord, this.h1.coord);
		const hyp2 = calculateLength(this.p.coord, this.h2.coord);

		// new values
		let newHx;
		let newHy;
		let newAdj;
		let newOpp;

		if (hold === 'h1') {
			// get new x and y for h2
			newAdj = Math.cos(angle1) * hyp2;
			newOpp = Math.tan(angle1) * newAdj;

			// Set values
			newHx = this.p.x + newAdj * -1;
			newHy = this.p.y + newOpp * -1;

			if (!isNaN(newHx) && !isNaN(newHy)) {
				if (this.h2.x !== newHx) {
					this.h2.x = newHx;
				}
				if (this.h2.y !== newHy) {
					this.h2.y = newHy;
				}
			}
		} else if (hold === 'h2') {
			// get new x and y for h2
			newAdj = Math.cos(angle2) * hyp1;
			newOpp = Math.tan(angle2) * newAdj;

			// Set values
			newHx = this.p.x + newAdj * -1;
			newHy = this.p.y + newOpp * -1;

			if (!isNaN(newHx) && !isNaN(newHy)) {
				if (this.h1.x !== newHx) {
					this.h1.x = newHx;
				}
				if (this.h1.y !== newHy) {
					this.h1.y = newHy;
				}
			}
		}

		// log(this);
		// log('PathPoint.makeFlat', 'end');

		return this;
	}

	/**
	 * Checks to see if two handles are flat
	 * @returns {Boolean}
	 * */
	isFlat() {
		// log(`PathPoint.isFlat`, 'start');
		// log(`Point position: ${this.p.x} / ${this.p.y}`);

		if (!this.h1.use || !this.h2.use) {
			// log(`Not using any handles to be flat, return false`);
			// log(`PathPoint.isFlat`, 'end');
			return false;
		}
		if (this.p.x === this.h1.x && this.p.x === this.h2.x) {
			// log(`X alignment, return true`);
			// log(`PathPoint.isFlat`, 'end');
			return true;
		}
		if (this.p.y === this.h1.y && this.p.y === this.h2.y) {
			// log(`Y alignment, return true`);
			// log(`PathPoint.isFlat`, 'end');
			return true;
		}

		const a1 = calculateAngle(this.h1.coord, this.p.coord);
		const a2 = calculateAngle(this.h2.coord, this.p.coord);
		// log('comparing ' + a1 + ' / ' + a2);

		const piTest = round(Math.abs(a1) + Math.abs(a2), 2);
		// log(`returning piTest === 3.14: ${piTest === 3.14}`);
		// log(`PathPoint.isFlat`, 'end');
		return piTest === 3.14;
	}

	/**
	 * When a handle's 'use' flag is toggled, make sure the
	 * handles coord is in the right place with regards to
	 * the overall point's type.
	 * @param {String} moveHandle - which handle to move
	 */
	reconcileHandle(moveHandle = 'h1') {
		// log(`PathPoint.reconcileHandle`, 'start');
		// log(`moveHandle: ${moveHandle}`);
		// log(`this.type: ${this.type}`);

		let holdHandle = moveHandle === 'h1' ? 'h2' : 'h1';

		if (this.type === 'symmetric') {
			this.makeSymmetric(holdHandle);
		} else if (this.type === 'flat') {
			this.makeFlat(holdHandle);
		}
		// log(`PathPoint.reconcileHandle`, 'end');
	}

	/**
	 * Figures out what type a point is based on handle positions
	 * @returns {String}
	 */
	resolvePointType() {
		// log('PathPoint.resolvePointType', 'start');

		if (this.isFlat()) {
			const h1Length = calculateLength(this.p.coord, this.h1.coord);
			const h2Length = calculateLength(this.p.coord, this.h2.coord);
			if (h1Length === h2Length) {
				// log('resolvePointType - setting to Symmetric');
				this._type = 'symmetric';
			} else {
				// log('resolvePointType - setting to Flat');
				this._type = 'flat';
			}
		} else {
			// log('resolvePointType - setting to Corner');
			this._type = 'corner';
		}

		// log('PathPoint.resolvePointType', 'end');
		return this.type;
	}

	/**
	 * Makes handles pointed at a specific point
	 * @param {Number} px - X value to point at
	 * @param {Number} py - Y value to point at
	 * @param {Number} length - Length the handle should end up
	 * @param {String} handle - Which handle to move
	 * @param {Boolean} doNotResolvePointType - After updating, skip auto-resolving the point type
	 * @returns {PathPoint}
	 */
	makePointedTo(px, py, length = 0, handle = 'h2', doNotResolvePointType = false) {
		// figure out angle
		const adj1 = this.p.x - px;
		const opp1 = this.p.y - py;

		const yMod = opp1 >= 0 ? -1 : 1;
		const xMod = -1;

		const hyp1 = Math.sqrt(adj1 * adj1 + opp1 * opp1);
		const angle1 = Math.acos(adj1 / hyp1);

		length = length || hyp1 / 3;

		// log('PathPoint.makePointedTo - x/y/l ' + px + ' ' + py + ' ' + length + ' - Before H1x/y ' + this.h1.x + ' ' + this.h1.y);
		this[handle].x = this.p.x + Math.cos(angle1) * length * xMod;
		this[handle].y = this.p.y + Math.sin(angle1) * length * yMod;
		// log('PathPoint.makePointedTo - after H1x/y ' + this.h1.x + ' ' + this.h1.y);

		if (!doNotResolvePointType) {
			if (this.type === 'corner') this.makeFlat(handle);
			else this.makeSymmetric(handle);
			// log('PathPoint.makePointedTo - after make symmetric H1x/y ' + this.h1.x + ' ' + this.h1.y);
		}

		return this;
	}

	/**
	 * Checks to see if the p and a handle share the same coordinate.
	 * Happens sometimes as a bug, handle should be treated as not existing.
	 * @param {String} hNumber h1 or h2
	 * @returns {Boolean}
	 */
	hasOverlappingHandle(hNumber) {
		if (!this[hNumber] || !this[hNumber].coord) return false;
		return xyPointsAreClose(this[hNumber].coord, this.p.coord);
	}

	/**
	 * Rotate Point and Handles around a center of rotation
	 * @param {Number} angle - how much to rotate (radians)
	 * @param {Object} about - x/y point center of rotation
	 * @returns {PathPoint}
	 */
	rotate(angle, about) {
		// log('PathPoint.rotate', 'start');
		this.p.rotate(angle, about);
		this.h1.rotate(angle, about);
		this.h2.rotate(angle, about);
		// log('this.p ' + json(this.p, true));
		// log('PathPoint.rotate', 'end');

		return this;
	}

	/**
	 * Resets handles to defaults
	 * @returns {PathPoint}
	 */
	resetHandles() {
		this.type = 'corner';
		this.h1.use = true;
		this.h2.use = true;
		this.h2.x = this.p.x - this.defaultHandleLength;
		this.h2.y = this.p.y;
		this.h1.x = this.p.x + this.defaultHandleLength;
		this.h1.y = this.p.y;

		return this;
	}

	/**
	 * Round all point x/y values to a certain precision
	 * @param {Number} precision - how many decimal places to round to
	 * @returns {PathPoint} - reference to this path point
	 */
	roundAll(precision = 9) {
		this.p.x = round(this.p.x, precision);
		this.p.y = round(this.p.y, precision);

		let h1use = this.h1.use;
		this.h1.use = true; // temporarily turn on so real x/y values are used
		this.h1.x = round(this.h1.x, precision);
		this.h1.y = round(this.h1.y, precision);
		this.h1.use = h1use; // revert to previous value

		let h2use = this.h2.use;
		this.h2.use = true; // temporarily turn on so real x/y values are used
		this.h2.x = round(this.h2.x, precision);
		this.h2.y = round(this.h2.y, precision);
		this.h2.use = h2use; // revert to previous value

		return this;
	}
}
