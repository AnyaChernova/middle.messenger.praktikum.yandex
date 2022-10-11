import Block from '../modules/Block';

export function renderDOM(query: string, block: Block<any>) {
	const root: HTMLElement | null = document.querySelector(query);

	root!.innerHTML = '';
	root!.appendChild(block.getContent());
}
