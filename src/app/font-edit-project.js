import { makeElement } from '../common/dom.js';
import { fetchFont } from '../formats_io/font-edit-fetch-font.js';
import { ioFont_importFont } from '../formats_io/otf/font_import.js';



/**
 * Loads font based on the font id in the URL
 */
export async function loadFont() {
	const url = new URL(window.location.href);
	const params = new URLSearchParams(url.search);
	const fontId = params.get('id')
	if(!fontId) throw new Error("No font id found in url");

	const font = await fetchFont(fontId)
	ioFont_importFont(font);
}

/**
 * Page maker when a font is not found
 * @returns {Element}
 */
export function makeFontIdNotFoundPage() {
	const content = makeElement({
		tag: 'div',
		id: 'fontIdNotFound__page',
		innerHTML: `
			<h1>Font ID not found</h1>
		`,
		style: `
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
		`
	});

	return content;
}

/**
 * Page maker when project is loading a font
 * @returns {Element}
 */
export function makeLoadingFontPage() {
	const content = makeElement({
		tag: 'div',
		id: 'fontLoader__page',
		innerHTML: `
			<div id='fontLoader__pageContainer'>
				<span id='loader'></span>
				<h1>Loading font</h1>
			</div>
		`,
		style: `
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
		`
	});

	return content;
}