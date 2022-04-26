import Component from './component';

export default class CardView {
  constructor(parent, el) {
    this.item = new Component(parent.node, 'div', 'friends-slider-pet', '');
    this.itemImgWrapper = new Component(this.item.node, 'div', 'friends-slider-pet__img-container', '');
    this.itemImg = new Component(this.itemImgWrapper.node, 'img', 'friends-slider-pet__img', '');
    this.itemImg.node.src = el.img;
    this.itemImg.node.alt = el.alt;
    this.title = new Component(this.item.node, 'h4', 'friends-slider-pet__name', el.name);
    this.link = new Component(this.item.node, 'a', 'btn friends-slider-pet__btn', 'Learn more');
    this.item.node.onclick = () => this.onOpen();
  }
}
