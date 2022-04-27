import Component from './component';
import CardView from './cardview';
import Popup from './popup';

export default class Slider extends Component {
  constructor(parent, tagName, className, content, itemsCount) {
    super(parent, tagName, className, content);
    this.friendsItems = [];
    this.count = itemsCount;
  }

  pushItems(el, wrapper) {
    const card = new CardView(wrapper, el);
    card.onOpen = () => {
      const popup = new Popup(document.body, 'div', 'popup', '', el);
      document.body.style.overflow = 'hidden';
      popup.onClose = () => {
        document.body.style.overflow = 'auto';
        popup.destroy();
      };
    };
  }
}
