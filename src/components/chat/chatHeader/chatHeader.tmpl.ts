import { moreIcon } from '../../icons/more';

export const template: string = `
	<div class="chatPanel__header">
		<div class="media chatTab__media">
				{{#if title}}
				<div class="media__aside">{{{avatar}}}</div>
				<div class="media__main media__main--left">
					<div class="media__title">{{title}}</div>
				</div>
				{{/if}}
		</div>
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
