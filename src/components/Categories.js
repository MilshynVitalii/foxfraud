import React from 'react';
import PropTypes from 'prop-types';

import {useOnClickOutside} from '@/hooks';

const categories = [
  {name: 'Смартфоны', type: 'phone'},
  {name: 'Ноутбуки', type: 'laptop'},
  {name: 'Мониторы', type: 'screen'}
];

Categories.defaultProps = {category: 'all'};
Categories.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired
};

function Categories({category, setCategory}) {
  const [activeMenu, setActiveMenu] = React.useState(false);
  const changeMenuActive = () => setActiveMenu(!activeMenu);

  const ref = React.useRef();
  useOnClickOutside(ref, () => setActiveMenu(false));

  const chooseCategory = (type) => {
    setCategory(type);
    setActiveMenu(false);
  };

  return (
    <div className="navigation__burger" ref={ref}>
      <div
        className="navigation__aside"
        onClick={changeMenuActive}>
        <span className="navigation__aside-burger">
          <span className="navigation__aside-burger-line"></span>
          <span className="navigation__aside-burger-line"></span>
          <span className="navigation__aside-burger-line"></span>
        </span>
        <span>Каталог товаров</span>
      </div>
      <ul className={
        `navigation__menu ${activeMenu ? 'active-menu' : ''}`
      }>
        <li
          className={
            `navigation__menu-item ${category === 'all' ? 'active' : ''}`
          }
          onClick={() => chooseCategory('all')}>Все</li>
        {
          categories.map(({name, type}) => (
            <li
              key={type}
              className={
                `navigation__menu-item ${
                  category === type ? 'active' : ''
                }`
              }
              onClick={() => chooseCategory(type)}
            >{name}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default Categories;
