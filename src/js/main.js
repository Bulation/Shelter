import Component from './component';
import Slider from './slider';
import NotOnlyImg from '../assets/img/not-only-dog.png';
import AboutImg from '../assets/img/about-pets.png';
import DonateImg from '../assets/img/donate.png';

export default class Main extends Component {
  constructor(parent, tagName, className, content) {
    super(parent, tagName, className, content);
    this.renderMainPage();
  }

  renderMainPage() {
    this.removeChildren();
    this.notOnly = new Component(this.node, 'section', 'not-only', '');
    this.notOnlyContainer = new Component(this.notOnly.node, 'div', 'container not-only-container', '');
    this.notOnlyDescription = new Component(this.notOnlyContainer.node, 'div', 'not-only__description', '');
    this.notOnlyTitle = new Component(this.notOnlyDescription.node, 'h2', 'not-only__title', 'Not only people need a house');
    this.notOnlyText = new Component(this.notOnlyDescription.node, 'p', 'not-only__text', 'We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!');
    this.notOnlyBtn = new Component(this.notOnlyDescription.node, 'a', 'btn not-only__btn', 'Make a friend');
    this.notOnlyBtn.node.href = '#friends';
    this.notOnlyImgContainer = new Component(this.notOnlyContainer.node, 'div', 'not-only__img-container', '');
    this.notOnlyImg = new Component(this.notOnlyImgContainer.node, 'img', 'not-only__pet-img', '');
    this.notOnlyImg.node.src = NotOnlyImg;
    this.notOnlyImg.node.alt = 'White dog with red ears';

    this.about = new Component(this.node, 'section', 'about', '');
    this.aboutContainer = new Component(this.about.node, 'div', 'container about-container', '');
    this.aboutImgContainer = new Component(this.aboutContainer.node, 'div', 'about__img-container', '');
    this.aboutImg = new Component(this.aboutImgContainer.node, 'img', 'about__pets-img', '');
    this.aboutImg.node.src = AboutImg;
    this.aboutImg.node.alt = 'Grey cat and white dog';
    this.aboutDescription = new Component(this.aboutContainer.node, 'div', 'about__description', '');
    this.aboutTitle = new Component(this.aboutDescription.node, 'h3', 'section-title about__title', 'About the shelter “Cozy House”');
    this.aboutTextFirst = new Component(this.aboutDescription.node, 'p', 'about__text', 'Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved.');
    this.aboutTextSecond = new Component(this.aboutDescription.node, 'p', '', 'We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals, they become attached to the pets and would hardly ever leave them alone.');

    this.friends = new Component(this.node, 'section', 'friends', '');
    this.friends.node.id = 'friends';
    this.friendsContainer = new Component(this.friends.node, 'div', 'friends-container', '');
    this.friendsTitle = new Component(this.friendsContainer.node, 'h3', 'section-title friends__title', '');
    this.friendsTitleSpan = new Component(this.friendsTitle.node, 'span', 'friends__title-part', 'Our friends who ');
    this.friendsTitle.node.innerHTML += 'are looking for a house';
    this.friendsSlider = new Component(this.friendsContainer.node, 'div', 'friends-slider', '');
    this.arrowLeftWrapper = new Component(this.friendsSlider.node, 'div', 'friends-slider__arrow-wrapper', '');
    this.arrowLeft = new Component(this.arrowLeftWrapper.node, 'span', 'friends-slider__arrow friends-slider__arrow_left', '');
    this.friendsSliderItems = new Slider(this.friendsSlider.node, 'div', 'friends-slider-items', '', 3, ['Katrine', 'Jennifer', 'Woody'], ['Grey cat with black eyes', 'White small dog with yellow ears and black eyes', 'Yellow medium dog']);
    this.arrowRightWrapper = new Component(this.friendsSlider.node, 'div', 'friends-slider__arrow-wrapper', '');
    this.arrowRight = new Component(this.arrowRightWrapper.node, 'span', 'friends-slider__arrow friends-slider__arrow_right', '');
    this.friendsLink = new Component(this.friendsContainer.node, 'a', 'btn friends__btn', 'Get to know the rest');
    this.friendsLink.node.href = '#';
    this.friendsLink.node.onclick = () => this.onNavigate('our-pets');

    this.help = new Component(this.node, 'section', 'help', '');
    this.help.node.id = 'help';
    this.helpContainer = new Component(this.help.node, 'div', 'help-container', '');
    this.helpTitle = new Component(this.helpContainer.node, 'h3', 'section-title help__title', 'How you can help our shelter');
    this.helpItemsContainer = new Component(this.helpContainer.node, 'div', 'help-items-container', '');
    this.helpItems = [];
    this.helpTitles = ['Pet food', 'Transportation', 'Toys', 'Bowls and cups', 'Shampoos', 'Vitamins', 'Medicines', 'Collars / leashes', 'Sleeping areas'];
    this.iconsClassnames = ['help-item__icon-food', 'help-item__icon-transportation', 'help-item__icon-toy', 'help-item__icon-cup', 'help-item__icon-shampoo', 'help-item__icon-vitamin', 'help-item__icon-medicines', 'help-item__icon-collars', 'help-item__icon-sleeping-area'];
    for (let i = 0; i < 9; i += 1) {
      const item = new Component(this.helpItemsContainer.node, 'div', 'help-item', '');
      const itemIcon = new Component(item.node, 'div', `help-item__icon ${this.iconsClassnames[i]}`, '');
      const itemTitle = new Component(item.node, 'h4', 'help-item__name', this.helpTitles[i]);
      this.helpItems.push(item);
    }

    this.donate = new Component(this.node, 'section', 'donate', '');
    this.donateContainer = new Component(this.donate.node, 'div', 'container donate-container', '');
    this.donatePetWrapper = new Component(this.donateContainer.node, 'div', 'donate-pet', '');
    this.donatePetImg = new Component(this.donatePetWrapper.node, 'img', 'donate-pet__img', '');
    this.donatePetImg.node.src = DonateImg;
    this.donatePetImg.node.alt = 'Yellow dog with black eyes lies';
    this.donateDescription = new Component(this.donateContainer.node, 'div', 'donate__description', '');
    this.donateTitle = new Component(this.donateDescription.node, 'h3', 'section-title donate__title', 'You can also make a donation');
    this.donateSubtitle = new Component(this.donateDescription.node, 'h5', 'donate__text', 'Name of the bank / Type of bank account');
    this.donateLink = new Component(this.donateDescription.node, 'a', 'donate__link', '8380 2880 8028 8791 7435');
    this.donateLink.node.href = '#';
    this.donateInfo = new Component(this.donateDescription.node, 'p', 'donate__info', 'Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.');
  }

  removeChildren() {
    while (this.node.firstChild) {
      this.node.firstChild.remove();
    }
  }

  onNavigate(pathname) {
    window.history.pushState(
      {},
      pathname,
      `https://rolling-scopes-school.github.io/bulation-JSFE2022Q1/shelter/${pathname}`,
    );
  }
}
