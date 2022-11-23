import { getByText } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Block } from './Block';
import { Route } from './Route';

describe('Route', () => {
	document.body.innerHTML = '<div class="app"></div>';
	const mock = jest.fn();

	class TestPage extends Block<Indexed> {
		constructor() {
			super({});
		}

		render() {
			const fragment = new DocumentFragment();
			const elem = document.createElement('div');
			elem.textContent = 'Test';
			fragment.appendChild(elem);
			return fragment;
		}

		componentWillUnmount() {
			mock();
		}
	}

	it('should render correct block', () => {
		const route = new Route(TestPage, '.app');
		route.render();

		expect(getByText(document.body, 'Test')).toBeInTheDocument();
	});

	it('should emit unmount event after leave', () => {
		const route = new Route(TestPage, '.app');
		route.render();
		route.leave();

		expect(mock).toHaveBeenCalled();
	});
});
