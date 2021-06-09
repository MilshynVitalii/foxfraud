import {makeObservable, observable, action, runInAction} from 'mobx';

class Favorites {
  items = [];

  add(id) {
    if (!this.inFavorites(id)) {
      fetch('/products/?id=' + id)
          .then((res) => res.json())
          .then((product) => runInAction(() => {
            this.items.push({...product[0], cnt: 1});
          }));
    }
  }

  remove(id) {
    const i = this._findIndex(id);
    this.items.splice(i, 1);
  }

  inFavorites = (id) => {
    // eslint-disable-next-line
    return this._findIndex(id) !== -1;
  }

  _findIndex(id) {
    return this.items.findIndex((pr) => pr.id == id);
  }

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      items: observable,
      add: action.bound,
      remove: action.bound
    });
  }
}

export default Favorites;
