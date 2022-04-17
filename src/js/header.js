import Component from './component';
import Navigation from './navigation';

export default class Header extends Component {
  constructor(parent, tagName, className, content, ourPetsClass) {
    super(parent, tagName, className, content);
    this.headerContainer = new Component(this.node, 'div', 'container header-container', '');
    this.containerLogo = new Component(this.headerContainer.node, 'a', 'logo', '');
    this.containerLogo.node.href = '#';
    this.title = new Component(this.containerLogo.node, 'h1', 'logo__title', 'Cozy House');
    this.subtitle = new Component(this.containerLogo.node, 'p', 'logo__subtitle', 'Shelter for pets in Boston');
    this.navigation = new Navigation(this.headerContainer.node, 'nav', `navigation ${ourPetsClass}`, '', 4, ['About the shelter', 'Our pets', 'Help the shelter', 'Contacts'], ['#index.html', '#', '#help', '#footer']);
    this.burger = new Component(this.headerContainer.node, 'div', 'burger', '');
    this.burgerItem = new Component(this.burger.node, 'span', 'burger__item', '');
    this.burger.node.onclick = () => {
      this.onBurger();
    };
    this.navigation.listItems.forEach((el) => {
      el.node.onclick = () => {
        if (this.burger.node.classList.contains('burger_active')) {
          this.onBurger();
        }
      };
    });
    this.parent.onclick = (e) => {
      if (!e.target.closest('.navigation, .burger, .logo') && this.parent.classList.contains('body_overlay')) {
        this.onBurger();
      }
    };
    this.containerLogo.node.onclick = () => {
      if (this.burger.node.classList.contains('burger_active')) {
        this.onBurger();
      }
    }
    window.addEventListener('resize', () => {
      if (document.documentElement.clientWidth >= 768 && this.burger.node.classList.contains('burger_active')) {
        this.onBurger();
      }
    });
  }

  onBurger() {
    this.navigation.node.classList.toggle('navigation_burgered');
    if (!this.navigation.node.classList.contains('navigation_burgered')) {
      this.navigation.node.classList.add('navigation_inactive');
    } else {
      this.navigation.node.classList.remove('navigation_inactive');
    }
    this.headerContainer.node.classList.toggle('header-container_burgered');
    this.containerLogo.node.classList.toggle('logo_burgered');
    this.parent.classList.toggle('body_overlay');
    this.burger.node.classList.toggle('burger_active');
  }
}
