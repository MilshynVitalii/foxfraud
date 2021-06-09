import React from 'react';
import PropTypes from 'prop-types';

HeartItem.defaultProps = {inCart: false};
HeartItem.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inCart: PropTypes.bool,
  addInCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired
};

function HeartItem({
  id, imgUrl, name, inCart, addInCart, removeFromCart, removeItem
}) {
  const [itemInCart, setInCart] = React.useState(inCart);
  const [inFavorite, setInFavorite] = React.useState(true);

  const changeInCart = () => {
    itemInCart ? removeFromCart(id) : addInCart(id);
    setInCart(!itemInCart);
  };

  const changeInFavorite = () => {
    removeItem(id);
    setInFavorite(!inFavorite);
  };

  return (
    <div className="header__heart-item">
      <img
        src={imgUrl}
        alt="product-image"
        className="header__heart-item-img"
        width="100px"
        height="100px" />
      <a
        href="#"
        className="header__heart-item-name"
      >{name}</a>
      <div className="header__heart-item-checkboxs">
        <div className="header__heart-item-checkbox">
          <label className="header__heart-item-label">
            <input
              type="checkbox"
              name="in-cart"
              className="header__heart-item-input"
              checked={itemInCart}
              onChange={changeInCart}
            />
            <span className="header__heart-item-fakeinput"></span>
            <span className="header__heart-item-text">
              {inCart ? 'В корзине' : 'В корзину'}
            </span>
          </label>
        </div>
        <div className="header__heart-item-checkbox">
          <label className="header__heart-item-label">
            <input
              type="checkbox"
              name="in-favorites"
              className="header__heart-item-input"
              checked={inFavorite}
              onChange={changeInFavorite}
            />
            <span className="header__heart-item-fakeinput"></span>
            <span className="header__heart-item-text">В избранном</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default HeartItem;
