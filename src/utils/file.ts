export const fileSize = {
	B: 1,
	kB: 1024,
	MB: 1024 * 1024,
	GB: 1024 * 1024 * 1024,
	TB: 1024 * 1024 * 1024 * 1024,
};

export const humanFileSize = (size: number): string => {
	if (+size === 0) return '0 B';
	const i = Math.floor(Math.log(size) / Math.log(1024));
	// @ts-ignore
	return `${(size / 1024 ** i).toFixed(2) * 1} ${['B', 'kB', 'MB', 'GB', 'TB'][i]}`;
};

export const fileExtension = (filename: string = ''): string => filename.substring(filename.lastIndexOf('.') + 1, filename.length) || '?';
