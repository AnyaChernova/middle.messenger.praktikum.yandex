export function isEmpty(value) {
	let empty = true;
	if (typeof value === 'object') {
		empty = !Boolean(value && (Object.keys(value).length || value.size));
	} else if (typeof value === 'string') {
		empty = !value.length;
	}

	return empty;
}
