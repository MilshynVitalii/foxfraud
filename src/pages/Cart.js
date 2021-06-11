import React from 'react';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react-lite';

import storesContext from '@/contexts/stores';
import {routesMap} from '@/router';
import {declention} from '@/utils/functions';

import {CartItem} from '@cmp';

function Cart() {
  const {
    cart: {items, total, changeCnt, remove, cartClear},
    favorites: {add, inFavorites}
  } = React.useContext(storesContext);

  const products = items.map((pr) => (
    <CartItem
      key={pr.id}
      {...pr}
      onChangeCnt={(cnt) => changeCnt(pr.id, cnt)}
      onRemove={() => remove(pr.id)}
      addToFavorites={add}
      isFavorite={inFavorites(pr.id)}
    />)
  );

  const itemsAmount = products.length > 0;

  const clearOnClick = () => itemsAmount && cartClear();

  return (
    <section className="cart">
      <div className="container">
        <h2 className="section-header">Корзина</h2>
        <div className="cart__wrap">
          <div className="cart__aside">
            <div className="cart__aside-products">
              {
                itemsAmount ?
                  `В корзине ${products.length} ${declention(products.length, [
                    'товаров',
                    'товара',
                    'товар'
                  ])}`:
                  'В корзине нет товаров'
              }
            </div>
            {
              !itemsAmount || <div className="cart__aside-price">
                {total} &#8372;
              </div>
            }
            <Link
              to={itemsAmount ? routesMap.result : routesMap.home}
              className="main-button cart__aside-button"
              onClick={clearOnClick}
            >
              {itemsAmount ?
                'Оформить заказ':
                'Добавить товары'}
            </Link>
          </div>
          <div className="cart__main">
            {
              itemsAmount ? products : <div className="cart__main-empty">
                <img
                  src="./assets/img/cute-fox.png"
                  alt="fox-image"
                  className="cart__main-empty-logo"
                  width="100px"
                  height="100px"
                />
                <div>В корзине нет товаров</div>
                <div>
                  Вы можете продолжить покупки в&nbsp;
                  <Link to={routesMap.home}>
                    <span className="cart__main-empty-link">
                      каталоге товаров
                    </span>
                  </Link>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default observer(Cart);
