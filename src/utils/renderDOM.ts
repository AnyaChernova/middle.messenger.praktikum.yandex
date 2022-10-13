import { Block } from '../core/Block';

export function renderDOM(query: string, block: Block<any>) {
	const root: Nullable<HTMLElement> = document.querySelector(query);

	root!.innerHTML = '';
	root!.appendChild(block.getContent());
	block.dispatchComponentDidMount();
}
