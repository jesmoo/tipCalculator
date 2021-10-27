import React from 'react';
import '../Styles/Components/Header.css';

const Header = () => {
  return (
    <>
      <header>
        <section className="header--section">
          <a href="https://www.jesmoo.xyz/">
            <span className="section--span" title="Go home"></span>
          </a>
          <div className="header--menu">
            <a href="https://www.jesmoo.xyz/about.html" title="About me">
              <h3>about</h3>
            </a>
            <section className="donatios--menu">
              <a href="https://paypal.me/jesmoo?locale.x=es_XC" title="Paypal">
                <h3>paypal</h3>
              </a>
              <a
                href="https://www.buymeacoffee.com/jesmoo"
                className="donatios--coffe"
                title="Buy me a coffe:D"
              >
                <h3>Coffe</h3>
              </a>
            </section>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
