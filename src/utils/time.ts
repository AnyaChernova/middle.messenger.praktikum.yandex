export const getTime = (date: string): string => {
	const dateObj = new Date(date);
	const hours = dateObj.getHours();
	const minutes = dateObj.getMinutes();
	return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
};
