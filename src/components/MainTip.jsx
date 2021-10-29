import React, { useRef, useState } from 'react';
import '../Styles/Components/MainTip.css';
import '../Styles/queries/mainQueries.css';

const MainTip = () => {
  const [result, setResult] = useState(0);
  const [origin, setOrigin] = useState(0);
  const [resultAll, setResultAll] = useState(0);
  const [personas, setPersonas] = useState(0);

  let resLonly = 0;
  let resAll = 0;
  let personsTarget = 0;

  const btn5 = useRef();
  const btn10 = useRef();
  const btn15 = useRef();
  const btn25 = useRef();
  const btn50 = useRef();
  const btnCustom = useRef();

  const handleChangeBill = (e) => {
    resLonly = parseInt(e.target.value);
    setResult(resLonly);
    setOrigin(resLonly);
  };
  const handleChangePeople = (e) => {
    personsTarget = parseInt(e.target.value);
    resAll = result / personsTarget;
    setPersonas(personsTarget);
    setResultAll(resAll.toFixed(2));
  };
  const changePeople = (number, value2) => {
    if (personas !== 0) {
      // Check if they are updating the data of what each personas will pay individually.
      personsTarget = parseInt(number);
      resAll = result / personsTarget;
      setResultAll(resAll.toFixed(2));
    }
  };
  const handleChangeCustom = (e) => {
    const btnTip = [
      btn5.current.classList,
      btn10.current.classList,
      btn15.current.classList,
      btn25.current.classList,
      btn50.current.classList,
    ];
    // check if there is no other button activated
    for (const item of btnTip) {
      if (item.contains('illuminate')) {
        item.toggle('illuminate');
      }
    }
    // Once the selected buttons have been removed, the calculation is performed
    e.target.classList.add('illuminate');
    let value = 1 + parseInt(e.target.value) / 100;
    let value2 = origin * value.toFixed(2);

    changePeople(personas, value2);

    setResult(value2.toFixed(2));
  };
  const handleClick = (e) => {
    const btnTip2 = [
      btn5.current.classList,
      btn10.current.classList,
      btn15.current.classList,
      btn25.current.classList,
      btn50.current.classList,
      btnCustom.current.classList,
    ];
    // check if there is no other button activated
    for (const item of btnTip2) {
      if (item.contains('illuminate')) {
        item.toggle('illuminate');
      }
    }
    // Once the selected buttons have been removed, the calculation is performed
    e.target.classList.toggle('illuminate');
    let value = 1 + parseInt(e.target.innerText) / 100;
    let value2 = origin * value.toFixed(2);

    changePeople(personas, value2);

    setResult(value2.toFixed(2));
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
          <bottom
            className="select__percent"
            ref={btn5}
            value="5"
            onClick={handleClick}
          >
            5%
          </bottom>
          <bottom className="select__percent" ref={btn10} onClick={handleClick}>
            10%
          </bottom>
          <bottom className="select__percent" ref={btn15} onClick={handleClick}>
            15%
          </bottom>
          <bottom
            className="select__percent"
            ref={btn25}
            value="25"
            onClick={handleClick}
          >
            25%
          </bottom>
          <bottom className="select__percent" ref={btn50} onClick={handleClick}>
            50%
          </bottom>
          <bottom className="select__percent select__percent-custom">
            <input
              className="innerText__text-custom"
              type="number"
              name="people"
              placeholder="Custom"
              id="people"
              ref={btnCustom}
              onChange={handleChangeCustom}
            />
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
            <p className="text__count">$ {result}</p>
          </section>
          <section className="see__textAll">
            <div className="textAll__text">
              <p className="text__personTip">Tip amount /</p>
              <p className="text__persons"> All</p>
            </div>
            <p className="text__countAll">$ {resultAll}</p>
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
