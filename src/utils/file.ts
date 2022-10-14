export const humanFileSize = (size: number): string => {
	if (+size === 0) return '0 B';
	let i = Math.floor(Math.log(size) / Math.log(1024));
	return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
}

export const fileExtension = (filename: string = ''): string => {
	return filename.substring(filename.lastIndexOf('.') + 1, filename.length) || '?';
}
