export function hexToRGBA(hex = '#ffffff', opacity: number) {
	const r = parseInt(hex.slice(1, 3), 16);
	const g = parseInt(hex.slice(3, 5), 16);
	const b = parseInt(hex.slice(5, 7), 16);

	return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export function hslToHex(h: number, s: number, l: number) {
	const l2 = l / 100;
	const a = (s * Math.min(l2, 1 - l2)) / 100;
	const f = (n: number) => {
		const k = (n + h / 30) % 12;
		const color = l2 - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
		return Math.round(255 * color)
			.toString(16)
			.padStart(2, '0'); // convert to Hex and prefix "0" if needed
	};
	return `#${f(0)}${f(8)}${f(4)}`;
}

export function parseHSL(hsl: string) {
	const [h, s, l] = hsl.split(' ').map((v) => parseFloat(v));
	return { h, s, l };
}

export function parseCSSHslPropToHex(
	rootStyle: CSSStyleDeclaration,
	property: string,
) {
	const { h, s, l } = parseHSL(rootStyle.getPropertyValue(property).trim());
	return hslToHex(h, s, l);
}

export function lerp(start: number, end: number, amt: number) {
	return start + amt * (end - start);
}
