import Component from './component';
import FooterPet from '../assets/img/footer-puppy.png';

export default class Footer extends Component {
  constructor(parent, tagName, className, content) {
    super(parent, tagName, className, content);
    this.node.id = 'footer';
    this.footerContainer = new Component(this.node, 'div', 'container footer-container', '');
    this.connection = new Component(this.footerContainer.node, 'div', 'connection', '');
    this.connectionTitle = new Component(this.connection.node, 'h3', 'section-title connection__title footer__title', 'For questions and suggestions');
    this.contactsContainer = new Component(this.connection.node, 'address', 'contacts-container', '');
    this.contactsLinkFirst = new Component(this.contactsContainer.node, 'a', 'footer__link contacts-container__mail', 'email@shelter.com');
    this.contactsLinkFirst.node.href = 'mailto:email@shelter.com';
    this.contactsLinkSecond = new Component(this.contactsContainer.node, 'a', 'footer__link contacts-container__phone', '+13 674 567 75 54');
    this.contactsLinkSecond.node.href = 'tel:+136745677554';
    this.address = new Component(this.footerContainer.node, 'div', 'address', '');
    this.addressTitle = new Component(this.address.node, 'h3', 'section-title address__title footer__title', 'We are waiting for your visit');
    this.locationsContainer = new Component(this.address.node, 'address', 'locations-container', '');
    this.locationFirst = new Component(this.locationsContainer.node, 'a', 'footer__link locations-container__location', '1 Central Street, Boston (entrance from the store)');
    this.locationFirst.node.href = 'https://goo.gl/maps/tuQYr1CWrdTqHMfe6';
    this.locationSecond = new Component(this.locationsContainer.node, 'a', 'footer__link locations-container__location locations-container__london', '18 South Park, London');
    this.locationSecond.node.href = 'https://goo.gl/maps/EjZwZZmJ36Jxsec96';
    this.footerPetWrapper = new Component(this.footerContainer.node, 'div', 'footer-pet', '');
    this.footerPetImg = new Component(this.footerPetWrapper.node, 'img', 'footer-pet__img', '');
    this.footerPetImg.node.src = FooterPet;
    this.footerPetImg.node.alt = 'Yellow dog shows its tongue';
  }
}
