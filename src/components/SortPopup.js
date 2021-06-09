import React from 'react';
import PropTypes from 'prop-types';

import {useOnClickOutside} from '@/hooks';

const items = [
  {name: 'цене', type: 'price'},
  {name: 'алфавиту', type: 'name'},
];

SortPopup.defaultProps = {sortBy: 'price'};
SortPopup.propTypes = {
  sortBy: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired
};

function SortPopup({sortBy, setSortBy}) {
  const [isPopupVisible, setPopupVisibility] = React.useState(false);
  const ref = React.useRef();
  useOnClickOutside(ref, () => setPopupVisibility(false));

  const onActiveItem = (type) => {
    setSortBy(type);
    setPopupVisibility(false);
  };

  const togglePopupVisibility = () => setPopupVisibility(!isPopupVisible);

  return (
    <div ref={ref} className="navigation__sort">
      <div className="navigation__sort-label">
        <span
          className={
            `navigation__sort-label_text ${isPopupVisible ? 'active' : ''}`
          }
        >Отсортировать по:</span>
        <span
          className="navigation__sort-label_active"
          onClick={togglePopupVisibility}
        >{items.find(({type}) => type === sortBy).name}</span>
      </div>
      {isPopupVisible && <div className="navigation__sort-popup">
        <ul className="navigation__sort-list">
          {
            items.map(({name, type}, i) => (
              <li
                key={type}
                className={
                  `navigation__sort-item 
                  ${type === sortBy ? 'active-item' : ''}`
                }
                onClick={() => onActiveItem(type)}
              >{name}</li>
            ))
          }
        </ul>
      </div>}
    </div>
  );
}

export default SortPopup;
