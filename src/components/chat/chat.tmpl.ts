export const template: string = `
	<div class="chat">
		<div class="chat__aside">
			<div class="chat__header">
				<h2 class="title title--l">Messages</h2>
				{{{btnAdd}}}
				{{{modalAdd}}}
			</div>
			{{{chatList}}}
		</div>
		<div class="chat__main">
			<div class="chatPanel">
				{{{header}}}
				<div class="chatPanel__inner">
					{{#each messages}}
						{{{this}}}
					{{/each}}
				</div>
				<div class="chatPanel__footer">
					{{{field}}}
				</div>
			</div>
		</div>
	</div>`;
