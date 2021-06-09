import React from 'react';
import {Link} from 'react-router-dom';
import SentimentDissatisfiedOutlinedIcon
  from '@material-ui/icons/SentimentDissatisfiedOutlined';

import {routesMap} from '@/router';

function E404() {
  return (
    <section className="E404">
      <div className="container">
        <div className="E404__wrap">
          <span className="E404__icon">
            <SentimentDissatisfiedOutlinedIcon fontSize="inherit" />
          </span>
          <span className="E404__text">404</span>
          <span className="E404__descr">
            Страница не найдена. Перейти на&ensp;
            <Link to={routesMap.home} className='E404__descr-back'>
              главную
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}

export default E404;
