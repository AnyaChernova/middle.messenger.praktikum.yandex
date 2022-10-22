export const monthFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const dayFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const getTime = (date: string): string => {
	const dateObj = new Date(date);
	const hours = dateObj.getHours();
	const minutes = dateObj.getMinutes();
	return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
};

export const getDay = (date: string): string => {
	const dateObj = new Date(date);
	return day[dateObj.getDay()];
};

export const getDayFull = (date: string): string => {
	const dateObj = new Date(date);
	return dayFull[dateObj.getDay()];
};

export const getDayStringFull = (date: string): string => {
	const dateObj = new Date(date);
	return `The ${dateObj.getDate()}th of ${monthFull[dateObj.getMonth()]}`;
}

export const getDayString = (date: string): string => {
	const dateObj = new Date(date);
	return `${dateObj.getDate()} ${month[dateObj.getMonth()]}`;
}

export const diffDays = (dateL: string, dateR: string): number => {
	const dateObjL = new Date(dateL).getTime();
	const dateObjR = new Date(dateR).getTime();
	const diffTime = Math.abs(dateObjL - dateObjR);
	return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export const isSameDay = (dateL: string, dateR: string): boolean => {
	const dateObjL = new Date(dateL);
	const dateObjR = new Date(dateR);
	return (dateObjL.getDate() === dateObjR.getDate()
		&& dateObjL.getMonth() === dateObjR.getMonth()
		&& dateObjL.getFullYear() === dateObjR.getFullYear());
}
