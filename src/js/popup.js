import Component from './component';

export default class Popup extends Component {
  constructor(parent, tagName, className, content, data) {
    super(parent, tagName, className, content);
    const overlay = new Component(this.node, 'div', 'popup-overlay', '');
    const dataContainer = new Component(overlay.node, 'div', 'popup-wrapper', '');
    this.data = data;
    if (window.innerWidth >= 768) {
      this.imgContainer = new Component(dataContainer.node, 'div', 'popup-img-container', '');
      this.img = new Component(this.imgContainer.node, 'img', 'popup-img-container__img', '');
      this.img.node.src = data.img;
    }
    this.descriptionContainer = new Component(dataContainer.node, 'div', 'popup-description-container', '');
    this.title = new Component(this.descriptionContainer.node, 'div', 'popup__title', data.name);
    this.type = new Component(this.descriptionContainer.node, 'div', 'popup__type', `${data.name} - ${data.breed}`);
    this.description = new Component(this.descriptionContainer.node, 'div', 'popup__description', data.description);
    this.feature = new Component(this.descriptionContainer.node, 'ul', 'popup-features', '');
    this.age = new Component(this.feature.node, 'li', 'popup-features__age', `Age: ${data.age}`);
    this.inoculations = new Component(this.feature.node, 'li', 'popup-features__inoculations', '');
    this.inoculations.node.textContent = `Inoculations: ${this.pushFeatures(this.data.inoculations)}`;
    this.diseases = new Component(this.feature.node, 'li', 'popup-features__diseases', '');
    this.diseases.node.textContent = `Diseases: ${this.pushFeatures(this.data.diseases)}`;
    this.parasites = new Component(this.feature.node, 'li', 'popup-features__parasites', '');
    this.parasites.node.textContent = `Parasites: ${this.pushFeatures(this.data.parasites)}`;
    this.closeButton = new Component(dataContainer.node, 'button', 'popup__close', 'x');
    this.closeButton.node.onclick = () => this.onClose();
    this.node.onclick = (e) => {
      if (e.target.classList.contains('popup')) {
        this.onClose();
      }
    };
  }

  pushFeatures(feature) {
    let text = '';
    feature.forEach((el) => {
      text += `${el}, `;
    });
    text = text.slice(0, -2);
    return text;
  }
}
