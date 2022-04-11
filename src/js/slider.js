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
  constructor(parent, tagName, className, content, itemsCount, names, alt) {
    super(parent, tagName, className, content);
    this.pathToImg = [Katrine, Jennifer, Woody, Sophia, Timmy, Charly, Scarlett, Freddie];
    this.friendsItems = [];
    for (let i = 0; i < itemsCount; i += 1) {
      const item = new Component(this.node, 'div', 'friends-slider-pet', '');
      const itemImgWrapper = new Component(item.node, 'div', 'friends-slider-pet__img-container', '');
      const itemImg = new Component(itemImgWrapper.node, 'img', 'friends-slider-pet__img', '');
      itemImg.node.src = this.pathToImg[i];
      itemImg.node.alt = alt[i];
      const title = new Component(item.node, 'h4', 'friends-slider-pet__name', names[i]);
      const link = new Component(item.node, 'a', 'btn friends-slider-pet__btn', 'Learn more');
      this.friendsItems.push(item);
    }
  }
}
