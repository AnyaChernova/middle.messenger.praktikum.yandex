export const template: string = `
		<form class="formBox">
				<div class="formBox__header">
					<h2 class="title title--l">Get’s started.</h2>
					<div class="formBox__caption text-gray">
						{{#if isLogin}}
							Don’t have an account? <a href="register.html" class="link">Sign up</a>
						{{else}}
							Already have an account? <a href="login.html" class="link">Sign in</a>
						{{/if}}
					</div>
				</div>
				<div class="formCard">
					{{{fields}}}
				</div>
				<div class="formBox__footer">
					<button class="btn w-full">
						{{#if isLogin}}
							Sign in
						{{else}}
							Sign up
						{{/if}}
					</button>
				</div>
			</form>`;
