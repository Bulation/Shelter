import Component from './component';
import Jennifer from '../assets/img/jennifer.png';
import Katrine from '../assets/img/katrine.png';
import Woody from '../assets/img/woody.png';
import Freddie from '../assets/img/freddie.png';
import Sophia from '../assets/img/sophia.png';
import Timmy from '../assets/img/timmy.png';
import Charly from '../assets/img/charly.png';
import Scarlett from '../assets/img/scarlett.png';

export default class Slider extends Component {
  constructor(parent, tagName, className, content, itemsCount, names, alt, ourPetsClass) {
    super(parent, tagName, className, content);
    this.names = names;
    this.alt = alt;
    this.ourPetsClass = ourPetsClass;
    this.pathToImg = [Katrine, Jennifer, Woody, Sophia, Timmy, Charly, Scarlett, Freddie];
    this.friendsItems = [];
    this.count = itemsCount;
    if (document.documentElement.clientWidth <= 600) {
      this.pushItems(0, this.count - 5);
    } else if (document.documentElement.clientWidth < 768) {
      this.pushItems(0, this.count - 3);
    } else {
      this.pushItems(0, this.count);
    }
    window.addEventListener('resize', () => {
      if (document.documentElement.clientWidth <= 768 && window.location.pathname.endsWith('our-pets')
        && this.friendsItems.length === 8) {
        const items = this.friendsItems;
        items[items.length - 2].destroy();
        items[items.length - 1].destroy();
        this.friendsItems = this.friendsItems.slice(0, -2);
      }
      if (document.documentElement.clientWidth <= 600 && window.location.pathname.endsWith('our-pets') && this.friendsItems.length === 6) {
        const items = this.friendsItems;
        items[items.length - 3].destroy();
        items[items.length - 2].destroy();
        items[items.length - 1].destroy();
        this.friendsItems = this.friendsItems.slice(0, -3);
      }
      if (document.documentElement.clientWidth > 600 && window.location.pathname.endsWith('our-pets') && this.friendsItems.length === 3) {
        this.pushItems(3, 6);
      }
      if (document.documentElement.clientWidth > 768 && window.location.pathname.endsWith('our-pets') && this.friendsItems.length === 6) {
        this.pushItems(6, 8);
      }
    });
  }

  pushItems(start, end) {
    for (let i = start; i < end; i += 1) {
      const item = new Component(this.node, 'div', `friends-slider-pet ${this.ourPetsClass}`, '');
      const itemImgWrapper = new Component(item.node, 'div', 'friends-slider-pet__img-container', '');
      const itemImg = new Component(itemImgWrapper.node, 'img', 'friends-slider-pet__img', '');
      itemImg.node.src = this.pathToImg[i];
      itemImg.node.alt = this.alt[i];
      const title = new Component(item.node, 'h4', 'friends-slider-pet__name', this.names[i]);
      const link = new Component(item.node, 'a', 'btn friends-slider-pet__btn', 'Learn more');
      this.friendsItems.push(item);
    }
  }
}
