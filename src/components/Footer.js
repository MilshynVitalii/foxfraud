import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrap">
          <div className="footer__col footer__logo">
            <h1 className="footer__col-logo">Фоксфрод</h1>
            <span className="footer__col-rights">
              Все права защищены "Фоксфрод" Copyright 2021
            </span>
          </div>
          <div className="footer__col">
            <span className="footer__col-descr">Информационная служба:</span>
            <a
              href="tel:0800300333"
              className="footer__col-phone"
            >0 800 300-333</a>
          </div>
          <div className="footer__col">
            <span className="footer__col-descr">Email:</span>
            <a
              href="mailto:info@foxfraud.com.ua"
              className="footer__col-mail"
            >info@foxfraud.com.ua</a>
          </div>
          <div className="footer__col">
            <span
              className="footer__col-descr"
            >График работы Call-Центра:</span>
            <span className="footer__col-time">Пн-Вс 08:30-22:00</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
