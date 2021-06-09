import ProductsStore from './products';
import FiltersStore from './filters';
import CartStore from './cart';
import Favorites from './favorites';

class RootStore {
  constructor() {
    this.products = new ProductsStore(this);
    this.filters = new FiltersStore(this);
    this.cart = new CartStore(this);
    this.favorites = new Favorites(this);
  }
}

export default new RootStore();
