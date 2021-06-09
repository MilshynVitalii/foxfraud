import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

import {declention} from '@/utils/functions';

CartButton.propTypes = {
  cartLength: PropTypes.number.isRequired
};


function CartButton({cartLength}) {
  return (
    <div className="header__cart">
      <ShoppingCart fontSize="large"/>
      <div className="header__cart-info">
        <div
          className="header__cart-info-descr"
        >{cartLength ? 'В корзине' : 'Корзина'}</div>
        <div className="header__cart-info-count">
          {
            cartLength ?
              `${cartLength} ${declention(cartLength, [
                'товаров',
                'товара',
                'товар'
              ])}` :
              'Добавить товары'
          }
        </div>
      </div>
    </div>
  );
}

export default CartButton;
