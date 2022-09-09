export function isEmpty(value) {
	let noEmpty = false;
	if (typeof value === 'object') {
		noEmpty = Boolean(value && (Object.keys(value).length || value.size));
	} else if (typeof value === 'string') {
		noEmpty = Boolean(value.length);
	}

	return !noEmpty;
}
