export const template: string = `
	<div class="modalContainer {{#if isOpen}} isOpen {{/if}}">
		<div class="modalContainer__overlay"></div>
		<div class="modalContainer__main">
			{{{closeBtn}}}
			<div class="modal">{{{content}}}</div>
		</div>
	</div>`;
