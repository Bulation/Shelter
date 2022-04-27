import Component from './component';
import Slider from './slider';
import CardsModel from './cardsmodel';

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
    this.friendsSliderItems = new Slider(this.friendsSlider.node, 'div', 'friends-slider-items our-pets-friends-slider-items', '', 8);
    let itemsCount;
    let pagesCount;
    if (window.innerWidth <= 767) {
      itemsCount = 3;
      pagesCount = 16;
    } else if (window.innerWidth <= 1279) {
      itemsCount = 6;
      pagesCount = 8;
    } else if (window.innerWidth >= 1280) {
      itemsCount = 8;
      pagesCount = 6;
    }
    const model = new CardsModel();
    model.onUpdate = (page) => {
      this.paginationItemThird.node.textContent = page + 1;
      this.paginationItemFirst.node.onclick = '';
      this.paginationItemSecond.node.onclick = '';
      this.paginationItemFourth.node.onclick = '';
      this.paginationItemFifth.node.onclick = '';
      const gap = getComputedStyle(this.friendsSliderItems.node).getPropertyValue('column-gap');
      this.friendsSliderItems.node.style.transform = `translate(calc(-100% * ${page} - calc(${gap} * ${page})))`;
      this.friendsSliderItems.node.ontransitionend = () => {
        if (page !== 0) {
          this.paginationItemFirst.node.onclick = () => {
            model.setPage(0);
          };
          this.paginationItemSecond.node.onclick = () => {
            model.setPage(model.getPage() - 1);
          };
          this.paginationItemFirst.node.classList.remove('friends-pagination__item_forbidden');
          this.paginationItemFirst.node.classList.add('friends-pagination__item_permit');
          this.paginationItemSecond.node.classList.remove('friends-pagination__item_forbidden');
          this.paginationItemSecond.node.classList.add('friends-pagination__item_permit');
        } else {
          this.paginationItemFirst.node.onclick = '';
          this.paginationItemSecond.node.onclick = '';
          this.paginationItemFirst.node.classList.add('friends-pagination__item_forbidden');
          this.paginationItemFirst.node.classList.remove('friends-pagination__item_permit');
          this.paginationItemSecond.node.classList.add('friends-pagination__item_forbidden');
          this.paginationItemSecond.node.classList.remove('friends-pagination__item_permit');
        }
        if (page !== pagesCount - 1) {
          this.paginationItemFourth.node.onclick = () => {
            model.setPage(model.getPage() + 1);
          };
          this.paginationItemFifth.node.onclick = () => {
            model.setPage(pagesCount - 1);
          };
          this.paginationItemFourth.node.classList.remove('friends-pagination__item_forbidden');
          this.paginationItemFourth.node.classList.add('friends-pagination__item_permit');
          this.paginationItemFifth.node.classList.remove('friends-pagination__item_forbidden');
          this.paginationItemFifth.node.classList.add('friends-pagination__item_permit');
        } else {
          this.paginationItemFourth.node.onclick = '';
          this.paginationItemFifth.node.onclick = '';
          this.paginationItemFourth.node.classList.add('friends-pagination__item_forbidden');
          this.paginationItemFourth.node.classList.remove('friends-pagination__item_permit');
          this.paginationItemFifth.node.classList.add('friends-pagination__item_forbidden');
          this.paginationItemFifth.node.classList.remove('friends-pagination__item_permit');
        }
      };
    };
    model.load();
    model.setRandomPaginationData(itemsCount, pagesCount);
    model.randomData.forEach((arr) => {
      const wrapper = new Component(this.friendsSliderItems.node, 'div', 'our-pets-friends-slider-pet-wrapper friends-slider-pet-wrapper', '');
      arr.forEach((el) => {
        this.friendsSliderItems.pushItems(el, wrapper);
      });
      for (let i = 0; i < wrapper.node.children.length; i += 1) {
        wrapper.node.children[i].classList.add('our-pets-friends-slider-item');
      }
      this.friendsSliderItems.friendsItems.push(wrapper);
    });
    this.paginationWrapper = new Component(this.friendsContainer.node, 'div', 'friends-pagination-wrapper', '');
    this.pagination = new Component(this.paginationWrapper.node, 'div', 'friends-pagination', '');
    this.paginationItemFirst = new Component(this.pagination.node, 'div', 'friends-pagination__item friends-pagination__item_forbidden', '<<');
    this.paginationItemSecond = new Component(this.pagination.node, 'div', 'friends-pagination__item friends-pagination__item_forbidden', '<');
    this.paginationItemThird = new Component(this.pagination.node, 'div', 'friends-pagination__item friends-pagination__item_active', '1');
    this.paginationItemFourth = new Component(this.pagination.node, 'div', 'friends-pagination__item friends-pagination__item_permit', '>');
    this.paginationItemFourth.node.onclick = () => {
      model.setPage(model.getPage() + 1);
    };
    this.paginationItemFifth = new Component(this.pagination.node, 'div', 'friends-pagination__item friends-pagination__item_permit', '>>');
    this.paginationItemFifth.node.onclick = () => {
      model.setPage(pagesCount - 1);
    };
  }

  destroy() {
    while (this.node.children.length) {
      this.node.removeChild(this.node.firstChild);
    }
  }
}
