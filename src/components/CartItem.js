import React from 'react';
import PropTypes from 'prop-types';

CartItem.defaultProps = {min: 1, isFavorite: false};
CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  min: PropTypes.number,
  maxAmount: PropTypes.number.isRequired,
  cnt: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
  onChangeCnt: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  addToFavorites: PropTypes.func.isRequired
};

function CartItem({
  id,
  min,
  maxAmount,
  cnt,
  price,
  imgUrl,
  name,
  isFavorite,
  onChangeCnt,
  onRemove,
  addToFavorites,
}) {
  const applyCurrent = (newCur) => {
    const validCurrent = Math.max(Math.min(newCur, maxAmount), min);
    onChangeCnt(validCurrent);
  };

  const inc = () => applyCurrent(cnt + 1);
  const dec = () => applyCurrent(cnt - 1);

  const toFavorites = () => addToFavorites(id);

  return (
    <div className="cart__product">
      <img
        src={imgUrl}
        alt="product-image"
        className="cart__product-img"
        width="100px"
        height="100px" />
      <div className="cart__product-wrap">
        <a
          href="#"
          className="cart__product-name"
        >{name}</a>
        <div className="cart__product-minmax">
          <button
            type="button"
            className="main-button cart__product-button"
            onClick={dec}
            disabled={cnt == min}
          >-</button>
          <span className="cart__product-count">{cnt}</span>
          <button
            type="button"
            className="main-button cart__product-button"
            onClick={inc}
            disabled={cnt == maxAmount}
          >+</button>
        </div>
        <div>
          <span className="cart__product-price">{price * cnt} &#8372;</span>
          <div className="cart__product-handlers">
            <button
              type="button"
              className="cart__product-handlers_like"
              onClick={toFavorites}
              disabled={isFavorite}
            >
              {isFavorite ? 'Сохранено' : 'Сохранить на потом'}
            </button>
            <a
              href="#"
              className="cart__product-handlers_del"
              onClick={onRemove}>
              Удалить
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
