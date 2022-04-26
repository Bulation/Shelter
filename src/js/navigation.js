import Component from './component';

export default class Navigation extends Component {
  constructor(parent, tagName, className, content, itemsCount, linksContent, links) {
    super(parent, tagName, className, content);
    this.list = new Component(this.node, 'ul', 'navigation__list', '');
    this.listItems = [];
    for (let i = 0; i < itemsCount; i += 1) {
      this.listItems.push(new Component(this.list.node, 'li', 'navigation__item', ''));
      this.listItems[i].link = new Component(this.listItems[i].node, 'a', 'navigation__link', linksContent[i]);
      this.listItems[i].link.node.href = links[i];
    }
  }

  addPetsClass(index) {
    this.listItems[index].link.node.classList.add('navigation__link_active');
    this.listItems[index].link.node.classList.add('navigation__link_active-pets');
    this.node.classList.add('our-pets-navigation');
    this.listItems.forEach((el) => {
      el.link.node.classList.add('navigation__link_pets');
    });
  }

  removePetsClass() {
    this.listItems.forEach((el) => {
      el.link.node.classList.remove('navigation__link_pets');
      el.link.node.classList.remove('navigation__link_active-pets');
      el.link.node.classList.remove('navigation__link_active');
    });
    this.node.classList.remove('our-pets-navigation');
  }

  addActiveClass(index) {
    this.listItems[index].link.node.classList.add('navigation__link_active');
  }

  removeActiveClass() {
    this.listItems.forEach((el) => {
      el.link.node.classList.remove('navigation__link_active');
    });
  }
}
