import {makeObservable, observable, computed, action, runInAction} from 'mobx';

class ProductsStore {
  store = {
    items: [],
    isLoading: true
  };

  load() {
    fetch('/products')
        .then((res) => res.json())
        .then((items) => runInAction(() => {
          this.store.items = items;
          this.store.isLoading = false;
        }));
  }

  get item() {
    return (id) => this.store.items.find((pr) => pr.id == id);
  }

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      store: observable,
      load: action,
      item: computed
    });
  }
}

export default ProductsStore;
