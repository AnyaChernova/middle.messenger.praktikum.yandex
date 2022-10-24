import { moreIcon } from '../../icons/more';

export const template: string = `
	<div class="chatPanel__header">
		<article class="media chatTab__media">
				{{#if title}}
				<aside class="media__aside">{{{avatar}}}</aside>
				<main class="media__main media__main--left">
					<h3 class="media__title">{{title}}</h3>
				</main>
				{{/if}}
		</article>
		<div class="dropdown">
			<button class="btn btn--round dropdown__open">
				${moreIcon}
			</button>
			<div class="dropdown__content{{#if isOpenDropdown}} dropdown__content--open{{/if}}">
				{{{usersBtn}}}
				{{{deleteChatBtn}}}
			</div>
		</div>
		{{{usersModal}}}
		{{{chatDeleteModal}}}
	</div>`;
