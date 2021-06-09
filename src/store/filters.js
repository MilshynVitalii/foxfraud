import {makeObservable, observable, action, runInAction} from 'mobx';

class FiltersStore {
  filter = {
    category: 'all',
    sortBy: 'price'
  };

  setCategory(type = 'all') {
    this.filter.category = type;
    this.fetchFiltered();
  }

  setSortBy(type) {
    this.filter.sortBy = type;
    this.fetchFiltered();
  }

  fetchFiltered() {
    const productsStore = this.rootStore.products.store;
    const category = this.filter.category;
    const sortBy = this.filter.sortBy;
    const url = '/products?' + `${category === 'all'? '' : 'type='}` +
      category +
      '&_sort=' +
      sortBy +
      '&_order=asc';

    productsStore.isLoading = true;
    fetch(url)
        .then((res) => res.json())
        .then((items) => runInAction(() => {
          productsStore.items = items;
          productsStore.isLoading = false;
        }));
  }

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      filter: observable,
      setCategory: action.bound,
      setSortBy: action.bound
    });
  }
}

export default FiltersStore;
