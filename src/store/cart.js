import {makeObservable, observable, computed, action, runInAction} from 'mobx';

class CartStore {
  items = [];

  get total() {
    return this.items.reduce((sum, pr) => (
      sum + pr.cnt * pr.price
    ), 0);
  }

  add(id) {
    if (!this.inCart(id)) {
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

  changeCnt(id, cnt) {
    if (this.inCart(id)) {
      this.items.find((pr) => pr.id == id).cnt = cnt;
    }
  }

  cartClear() {
    this.items = [];
  }

  inCart = (id) => {
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
      remove: action.bound,
      changeCnt: action.bound,
      cartClear: action.bound,
      total: computed
    });
  }
}

export default CartStore;
