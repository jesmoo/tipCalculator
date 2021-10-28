import React, { useRef, useState } from 'react';
import '../Styles/Components/MainTip.css';
import '../Styles/queries/mainQueries.css';

const MainTip = () => {
  let resut = 0;
  let resultOnly = 0;
  const setResultAllTips = useRef();
  const setResultLonlyTips = useRef();

  const handleChangeBill = (e) => {
    resut = e.target.value;
    console.log('a', resut);
  };
  console.log(resut);
  const handleChangePeople = (e) => {
    resultOnly = resut / e.target.value;
  };
  return (
    <main className="contianer__main">
      <h1>Tip calculator</h1>
      <div className="main__containerTip">
        <section className="tip__Bill">
          <p>Bill</p>
          <section className="bill__innerText">
            <span className="innerText__icon icon" />
            <input
              className="innerText__text"
              type="number"
              name="bill"
              id="bill"
              onChange={handleChangeBill}
            />
          </section>
        </section>
        <section className="tip__select">
          <p>Select Tip %</p>
          <bottom className="select__percent"> 5%</bottom>
          <bottom className="select__percent">10%</bottom>
          <bottom className="select__percent">15%</bottom>
          <bottom className="select__percent">25%</bottom>
          <bottom className="select__percent">50% </bottom>
          <bottom className="select__percent select__percent-custom">
            Custom
          </bottom>
        </section>
        <section className="tip__people">
          <p>Number of people</p>
          <section className="people__innerText">
            <span className="people__icon icon" />
            <input
              className="innerText__text"
              type="number"
              name="people"
              id="people"
              onChange={handleChangePeople}
            />
          </section>
        </section>
        <section className="tip__see">
          <section className="see__textLonly">
            <div className="textLonly__text">
              <p className="text__personTip">Tip amount /</p>
              <p className="text__persons"> person</p>
            </div>
            <p className="text__count">$ {resultOnly}</p>
          </section>
          <section className="see__textAll">
            <div className="textAll__text">
              <p className="text__personTip">Tip amount /</p>
              <p className="text__persons"> All</p>
            </div>
            <p className="text__countAll">$ {resut}</p>
          </section>
          <section className="see__reset">
            <bottom className="reset__btn">Reset</bottom>
          </section>
        </section>
      </div>
    </main>
  );
};

export default MainTip;
