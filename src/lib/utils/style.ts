import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const parseHsl = (hsl: string) => {
	const [h, s, l] = hsl.split(' ').map((v) => parseFloat(v));
	return { h, s, l };
};

export const getCSSVariableToHsla = (name: string, opacity: number = 1.0) => {
	const value = getComputedStyle(document.documentElement).getPropertyValue(`--${name}`);
	const { h, s, l } = parseHsl(value);
	return `hsl(${h}, ${s}%, ${l}%, ${opacity})`;
};
