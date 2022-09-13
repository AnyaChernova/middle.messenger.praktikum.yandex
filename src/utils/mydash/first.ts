export function first<T>(list: T[]): T {
	if (!Array.isArray(list)) {
		return undefined;
	}

	return list.length ? list[0] : undefined;
}
