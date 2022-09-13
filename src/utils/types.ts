type avatarType = {
	class?: string,
	url: string,
	size: number
}

type pageType = {
	main?: boolean,
	settings?: boolean,
	profile?: boolean,
	password?: boolean,
	title?: string
}

type fieldType = {
	inputClass?: string,
	labelClass?: string,
	name?: string,
	type?: string,
}

export {avatarType, pageType, fieldType};
