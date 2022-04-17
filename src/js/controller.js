import EventEmitter from './event';
import MainPage from './main';
import OurPetsPage from './ourpets';

export default class Controller {
  constructor(node) {
    this.node = node;
    this.mainCycle();
    this.emitter = new EventEmitter();
    this.emitter.subscribe('', () => {
      this.main.destroy();
      this.mainCycle();
    });
    this.emitter.subscribe('our-pets', () => {
      this.main.destroy();
      this.petsCycle();
    });
  }

  mainCycle() {
    this.main = new MainPage(this.node);
    this.main.onOurPets = (path) => {
      this.main.destroy();
      this.onNavigate(path, { page: '/our-pets' });
    };
  }

  petsCycle() {
    this.main = new OurPetsPage(this.node);
    this.main.onMainPage = (path) => {
      this.main.destroy();
      this.onNavigate(path, { page: '/' });
    };
  }

  onNavigate(pathname, state) {
    window.history.pushState(
      state,
      pathname,
      `./${pathname}`,
    );
    window.onpopstate = () => {
      const arr = window.location.pathname.split('/');
      this.emitter.emit(arr[arr.length-1]);
    };
  }
}
