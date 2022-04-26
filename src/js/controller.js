import MainPage from './main';
import Header from './header';
import Component from './component';
import Footer from './footer';
import PetsPage from './ourpets';

export default class Controller {
  constructor(node) {
    this.node = node;
    this.header = new Header(this.node, 'header', 'header', '');
    this.main = new Component(this.node, 'main', '', '');
    this.footer = new Footer(this.node, 'footer', 'footer', '');
    if (localStorage.getItem('page') === 'main') {
      this.mainCycle();
    } else {
      this.petsCycle();
    }
  }

  mainCycle() {
    const mainPage = new MainPage(this.main.node);
    localStorage.setItem('page', 'main');
    this.header.navigation.removePetsClass();
    this.header.navigation.addActiveClass(0);
    this.header.removePetsClass();
    this.header.navigation.listItems[1].link.node.onclick = () => {
      mainPage.onOurPets();
    };
    mainPage.onOurPets = () => {
      mainPage.destroy();
      this.petsCycle();
    };
  }

  petsCycle() {
    localStorage.setItem('page', 'pets');
    const petsPage = new PetsPage(this.main.node);
    this.header.containerLogo.node.onclick = () => {
      petsPage.onMainPage();
    };
    this.header.navigation.listItems[0].link.node.onclick = () => {
      petsPage.onMainPage();
    };
    this.header.navigation.listItems[2].link.node.onclick = () => {
      petsPage.onMainPage();
    };
    this.header.navigation.removeActiveClass();
    this.header.navigation.addPetsClass(1);
    this.header.addPetsClass();
    petsPage.onMainPage = () => {
      petsPage.destroy();
      this.mainCycle();
    };
  }
}
