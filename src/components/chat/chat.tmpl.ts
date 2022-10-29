import { searchIcon } from '../icons/search';

export const template: string = `
	<div class="chat">
		<div class="chat__aside">
			<div class="chat__header">
				<h2 class="title title--l">Messages</h2>
				{{{btnAdd}}}
				{{{modalAdd}}}
			</div>
			{{{chats}}}
		</div>
		{{#if isInit}}
		<div class="chat__main">
			<div class="chatPanel">
				{{#if isEmpty}}
				<div class="chatPanel__dummy">
					<div class="dummy text-center">
						<div class="dummy__icon">${searchIcon}</div>
						<div class="dummy__caption">No chat yet. <br> Add chat and start chatting!</div>
						{{{link}}}
					</div>
					</div>
				{{else }}
				{{{header}}}
				{{{messages}}}
				<div class="chatPanel__footer">
					{{{field}}}
				</div>
				{{/if}}
			</div>
		</div>
		{{/if}}
	</div>`;
