import Slider from './slider';

export default class SliderPagination extends Slider {
  constructor(parent, tagName, className, content, itemsCount, names, alt, ourPetsClass) {
    super(parent, tagName, className, content, itemsCount, names, alt);
    if (window.innerWidth <= 767) {
      this.pushItems(0, this.count - 5);
    } else if (window.innerWidth <= 1279) {
      this.pushItems(0, this.count - 2);
    } else {
      this.pushItems(0, this.count);
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 1279 && this.friendsItems.length === 8) {
        const items = this.friendsItems;
        items[items.length - 2].destroy();
        items[items.length - 1].destroy();
        this.friendsItems = this.friendsItems.slice(0, -2);
      }
      if (window.innerWidth <= 767 && this.friendsItems.length === 6) {
        const items = this.friendsItems;
        items[items.length - 3].destroy();
        items[items.length - 2].destroy();
        items[items.length - 1].destroy();
        this.friendsItems = this.friendsItems.slice(0, -3);
      }
      if (window.innerWidth > 767 && this.friendsItems.length === 3) {
        this.pushItems(3, 6);
        this.friendsItems.forEach((item) => item.node.classList.add(`${ourPetsClass}`));
      }
      if (window.innerWidth > 1279 && this.friendsItems.length === 6) {
        this.pushItems(6, 8);
        this.friendsItems.forEach((item) => item.node.classList.add(`${ourPetsClass}`));
      }
    });
    this.friendsItems.forEach((item) => item.node.classList.add(`${ourPetsClass}`));
  }
}
