import { Block } from './Block';

describe('Block', () => {
	class Component extends Block<Indexed> {
		constructor(props: Indexed) {
			super(props);
		}
	}

	describe('init', () => {
		it('should init correct props and childes', () => {
			const testComponent = new Component({
				title: 'test',
				link: new Component({ src: '/' }),
			});

			// @ts-expect-error
			expect(testComponent.props).toEqual({ title: 'test' });
			// @ts-expect-error
			expect(testComponent.children.link).toBeInstanceOf(Block);
		});
	});

	describe('update', () => {
		it('should change props correctly', () => {
			const testComponent = new Component({ test: 1 });

			testComponent.setProps({ test: 2 });

			// @ts-expect-error
			expect(testComponent.props.test).toBe(2);
		});

		it('should call update event on props changed', () => {
			const testComponent = new Component({ test: 1 });
			const spy = jest.spyOn(testComponent, 'componentDidUpdate');

			testComponent.setProps({ test: 2 });

			expect(spy).toHaveBeenCalled();
		});

		it('should rerender on props changed', () => {
			const testComponent = new Component({ test: 1 });
			const spy = jest.spyOn(testComponent, 'render');

			testComponent.setProps({ test: 2 });

			expect(spy).toHaveBeenCalled();
		});

		it('should not rerender after set the same props', () => {
			const testComponent = new Component({ test: 1 });
			const spy = jest.spyOn(testComponent, 'render');

			testComponent.setProps({ test: 1 });

			expect(spy).toHaveBeenCalledTimes(0);
		});
	});

	describe('render', () => {
		it('should render correct template', () => {
			class ComponentBlock extends Block<Indexed> {
				constructor(props: Indexed) {
					super(props);
				}

				render() {
					const fragment = new DocumentFragment();
					const elem = document.createElement('div');
					elem.innerHTML = `<span>${this.props.title}</span>`;
					fragment.appendChild(elem);
					return fragment;
				}
			}

			const testComponent = new ComponentBlock({ title: 'test' });

			expect(testComponent.getContent().innerHTML).toBe('<span>test</span>');
		});
	});
});
