import React from 'react';
import {observer} from 'mobx-react-lite';
import ContentLoader from 'react-content-loader';

import storesContext from '@/contexts/stores';

import {ProductItem} from '@cmp';


function Home() {
  const {
    products: {store: {items, isLoading}}
  } = React.useContext(storesContext);

  return (
    <section className='products'>
      <div className='container'>
        <h2 className='section-header'>Продукты</h2>
        <div className='products__wrap'>
          {isLoading ?
            Array(8).fill('').map((_, i) => (
              <ContentLoader
                key={i}
                speed={2}
                width={268}
                height={307}
                viewBox='0 0 270 307'
                backgroundColor='#dbdada'
                foregroundColor='#f3f3f3'
                className='products__item products__item_load'
              >
                <rect x='155' y='250' rx='3' ry='3' width='100' height='39' />
                <rect x='54' y='15' rx='3' ry='3' width='160' height='160' />
                <rect x='15' y='195' rx='3' ry='3' width='240' height='18' />
                <rect x='15' y='255' rx='3' ry='3' width='115' height='30' />
              </ContentLoader>)) :
            items.map((item) => (
              <ProductItem
                key={item.id}
                {...item}
              />
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default observer(Home);
