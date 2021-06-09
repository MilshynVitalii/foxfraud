import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react-lite';

import storesContext from '@/contexts/stores';

ProductItem.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

function ProductItem({id, imgUrl, name, price}) {
  const {
    cart: {add: addToCart, inCart}
  } = React.useContext(storesContext);

  const onCartAdd = () => {
    addToCart(id);
  };

  return (
    <div className="products__item">
      <img
        src={imgUrl}
        width="160px"
        height="160px"
        alt="product-image"
        className="products__item-img" />
      <a href="#" className="products__item-name">{name}</a>
      <div className="products__item-buy">
        <span className="products__item-price">
          {price} &#8372;
        </span>
        <button
          type="button"
          className="main-button products__item-button"
          onClick={onCartAdd}
          disabled={inCart(id)}
        >{inCart(id) ? 'В корзине' : 'Купить'}</button>
      </div>
    </div>
  );
}

export default observer(ProductItem);
