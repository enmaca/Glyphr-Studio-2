
/**
 * Validate if the URL has a font ID
 */
export function hasFontId() {
	const url = new URL(window.location.href);
	const params = new URLSearchParams(url.search);
	return params.has('id')
}
