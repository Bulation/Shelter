import Header from './header';
import Main from './main';
import Footer from './footer';
import Component from './component';
import Slider from './slider';

export default class Controller {
  constructor(node) {
    this.node = node;
    this.header = new Header(this.node, 'header', 'header', '');
    this.main = new Main(this.node, 'main', '', '');
    this.footer = new Footer(this.node, 'footer', 'footer', '');
    this.header.containerLogo.node.onclick = () => {
      this.main.onNavigate('');
    };
    this.header.navigation.listItems[0].link.node.onclick = () => {
      this.main.onNavigate('');
    };
    this.header.navigation.listItems[1].link.node.onclick = () => {
      this.main.onNavigate('our-pets');
    };
    this.main.renderOurPets = () => {
      this.main.removeChildren();
      this.header.navigation.removeActiveClass();
      this.header.navigation.addPetsClass(1);
      this.header.navigation.addActiveClass(1);
      this.header.node.classList.add('our-pets-header');
      this.header.headerContainer.node.classList.add('our-pets-header-container');
      this.header.title.node.classList.add('our-pets-logo__title');
      this.header.subtitle.node.classList.add('our-pets-logo__subtitle');
      this.header.navigation.listItems[2].link.node.onclick = () => {
        this.main.onNavigate('');
        this.main.onNavigate('#help');
      };
      this.friends = new Component(this.main.node, 'section', 'friends', '');
      this.friends.node.id = 'friends';
      this.friendsContainer = new Component(this.friends.node, 'div', 'friends-container', '');
      this.friendsTitle = new Component(this.friendsContainer.node, 'h3', 'section-title friends__title', '');
      this.friendsTitleSpan = new Component(this.friendsTitle.node, 'span', 'friends__title-part', 'Our friends who ');
      this.friendsTitle.node.innerHTML += 'are looking for a house';
      this.friendsSlider = new Component(this.friendsContainer.node, 'div', 'friends-slider', '');
      this.friendsSliderItems = new Slider(this.friendsSlider.node, 'div', 'friends-slider-items our-pets-friends-slider-items', '', 8, ['Katrine', 'Jennifer', 'Woody', 'Sophia', 'Timmy', 'Charly', 'Scarlett', 'Freddie'], ['Grey cat with black eyes', 'White small dog with yellow ears and black eyes', 'Yellow medium dog', 'White small dog with black ears on hand', 'Grey cat', 'White dog lies', 'White small dog with yellow ears', 'Grey cat']);
      this.paginationWrapper = new Component(this.friendsContainer.node, 'div', 'friends-pagination-wrapper', '');
      this.pagination = new Component(this.paginationWrapper.node, 'div', 'friends-pagination', '');
      this.paginationItemFirst = new Component(this.pagination.node, 'div', 'friends-pagination__item friends-pagination__item_back', '<<');
      this.paginationItemSecond = new Component(this.pagination.node, 'div', 'friends-pagination__item friends-pagination__item_back', '<');
      this.paginationItemThird = new Component(this.pagination.node, 'div', 'friends-pagination__item friends-pagination__item_active', '1');
      this.paginationItemFourth = new Component(this.pagination.node, 'div', 'friends-pagination__item friends-pagination__item_up', '>');
      this.paginationItemFifth = new Component(this.pagination.node, 'div', 'friends-pagination__item friends-pagination__item_up', '>>');
    };
    window.onpopstate = () => {
      if (window.location.href.includes('our-pets')) {
        this.main.renderOurPets();
      } else {
        this.main.renderMainPage();
        this.header.navigation.removePetsClass();
        this.header.navigation.removeActiveClass();
        this.header.navigation.addActiveClass(0);
        this.header.node.classList.remove('our-pets-header');
        this.header.title.node.classList.remove('our-pets-logo__title');
        this.header.subtitle.node.classList.remove('our-pets-logo__subtitle');
      }
    };
  }
}
