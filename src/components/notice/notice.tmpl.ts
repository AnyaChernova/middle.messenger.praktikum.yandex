export const template: string = `
	{{#if noticeError}}
			<div class="notice notice--error notice--active">{{noticeError}}</div>
	{{ else if noticeSuccess}}
			<div class="notice notice--success notice--active">{{noticeSuccess}}</div>
	{{ else }}
			<div class="notice"></div>
	{{/if}}
`;
