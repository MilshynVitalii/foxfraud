import React from 'react';
import {Route, Link} from 'react-router-dom';
import {observer} from 'mobx-react-lite';

import {routesMap} from '@/router';
import storesContext from '@/contexts/stores';

import {CartButton, HeartButton, Categories, SortPopup} from '@cmp';

function Header() {
  const {
    filters: {filter, setSortBy, setCategory},
    cart: {items}
  } = React.useContext(storesContext);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <Link to={routesMap.home} className="header__logo">Фоксфрод</Link>
          <HeartButton />
          <Link to={routesMap.cart}>
            <CartButton cartLength={items.length}/>
          </Link>
        </div>
        <Route path='/' exact>
          <nav className="navigation">
            <Categories
              category={filter.category}
              setCategory={setCategory}
            />
            <SortPopup sortBy={filter.sortBy} setSortBy={setSortBy} />
          </nav>
        </Route>
      </div>
    </header>
  );
}

export default observer(Header);
