import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {observer} from 'mobx-react-lite';

import storesContext from '@/contexts/stores';
import {useOnClickOutside} from '@/hooks';

import {HeartItem} from '@cmp';

function HeartButton() {
  const [popupActivity, setpopupActivity] = React.useState(false);
  const {
    favorites: {items, remove},
    cart
  } = React.useContext(storesContext);

  const ref = React.useRef();
  useOnClickOutside(ref, () => setpopupActivity(false));

  const changePopupActivity = () => setpopupActivity(!popupActivity);

  const itemsRender = items.map((pr) => (
    <HeartItem
      key={pr.id}
      inCart={cart.inCart(pr.id)}
      id={pr.id}
      imgUrl={pr.imgUrl}
      name={pr.name}
      addInCart={cart.add}
      removeFromCart={cart.remove}
      removeItem={remove}
    />
  ));

  return (
    <div ref={ref} className="header__heart">
      <div onClick={changePopupActivity}>
        <FavoriteBorderIcon fontSize="large"/>
        {
          items.length > 0 && <span className="header__heart-count">
            {items.length}
          </span>
        }
      </div>
      {popupActivity && <div className="header__heart-popup">
        <h3 className="header__heart-popup-title">Избранное</h3>
        {items.length === 0 ?
          <p className="header__heart-popup-text">
            Чтобы добавить товар в избранное,
            воспользуйтесь опцией "Сохранить на потом"
          </p> :
          <div className="header__heart-items">
            {itemsRender}
          </div>
        }
      </div>
      }
    </div>
  );
}

export default observer(HeartButton);
