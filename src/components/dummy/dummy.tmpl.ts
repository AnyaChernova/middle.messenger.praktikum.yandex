import { backIcon } from '../icons/back';

export const template: string = `
	<div class="dummy text-center">
		<div class="title dummy__title">{{code}}</div>
		<div class="dummy__caption">{{title}}</div>
		<a href="/" class="link link--icon dummy__link">
			${backIcon}
			Back to chats
		</a>
	</div>`;
