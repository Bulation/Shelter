import Component from './component';
import SliderPagination from './sliderpagination';

export default class PetsPage {
  constructor(node) {
    this.node = node;
    this.friends = new Component(this.node, 'section', 'friends', '');
    this.friends.node.id = 'friends';
    this.friendsContainer = new Component(this.friends.node, 'div', 'friends-container our-pets-friends-container', '');
    this.friendsTitle = new Component(this.friendsContainer.node, 'h3', 'section-title friends__title', '');
    this.friendsTitleSpan = new Component(this.friendsTitle.node, 'span', 'friends__title-part', 'Our friends who ');
    this.friendsTitle.node.innerHTML += 'are looking for a house';
    this.friendsSlider = new Component(this.friendsContainer.node, 'div', 'friends-slider our-pets-slider', '');
    // this.friendsSliderItems = new SliderPagination(this.friendsSlider.node, 'div', 'friends-slider-items our-pets-friends-slider-items', '', 8);
    this.paginationWrapper = new Component(this.friendsContainer.node, 'div', 'friends-pagination-wrapper', '');
    this.pagination = new Component(this.paginationWrapper.node, 'div', 'friends-pagination', '');
    this.paginationItemFirst = new Component(this.pagination.node, 'div', 'friends-pagination__item friends-pagination__item_back', '<<');
    this.paginationItemSecond = new Component(this.pagination.node, 'div', 'friends-pagination__item friends-pagination__item_back', '<');
    this.paginationItemThird = new Component(this.pagination.node, 'div', 'friends-pagination__item friends-pagination__item_active', '1');
    this.paginationItemFourth = new Component(this.pagination.node, 'div', 'friends-pagination__item friends-pagination__item_up', '>');
    this.paginationItemFifth = new Component(this.pagination.node, 'div', 'friends-pagination__item friends-pagination__item_up', '>>');
  }

  destroy() {
    while (this.node.children.length) {
      this.node.removeChild(this.node.firstChild);
    }
  }
}
