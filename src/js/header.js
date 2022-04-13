import Component from './component';
import Navigation from './navigation';

export default class Header extends Component {
  constructor(parent, tagName, className, content) {
    super(parent, tagName, className, content);
    this.headerContainer = new Component(this.node, 'div', 'container header-container', '');
    this.containerLogo = new Component(this.headerContainer.node, 'a', 'logo', '');
    this.containerLogo.node.href = '#index.html';
    this.title = new Component(this.containerLogo.node, 'h1', 'logo__title', 'Cozy House');
    this.subtitle = new Component(this.containerLogo.node, 'p', 'logo__subtitle', 'Shelter for pets in Boston');
    this.navigation = new Navigation(this.headerContainer.node, 'nav', 'navigation', '', 4, ['About the shelter', 'Our pets', 'Help the shelter', 'Contacts'], ['#index.html', '#', '#help', '#footer']);
    this.navigation.addActiveClass(0);
    this.burger = new Component(this.headerContainer.node, 'div', 'burger', '');
    this.burgerItem = new Component(this.burger.node, 'span', 'burger__item', '');
  }
}
