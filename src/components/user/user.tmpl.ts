export const template: string = `
	<div class="media {{userClass}}">
		<div class="media__aside">{{{avatar}}}</div>
		<div class="media__main media__main--left">
			<div class="media__title {{titleClass}}">{{name}}</div>
			<div class="media__caption">{{status}}</div>
		</div>
	</div>`;
