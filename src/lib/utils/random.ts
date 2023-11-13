import * as crypto from 'crypto';

export function generateUniqueRandom(text: string) {
	const hash = crypto.createHash('sha256');
	hash.update(text);
	return hash.digest('hex');
}
