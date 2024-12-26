import React from "react";
import "./Cards.scss";
import {
  FaUserAlt,
  FaRegChartBar,
  FaMoneyBillWave,
  FaStoreAlt,
} from "react-icons/fa";

const Cards = () => {
  return (
    <>
      <div className="card">
        <div className="card__box">
          <div>
            <p className="card__box__text">Today’s Money</p>
            <h3 className="card__box__money">$53,000</h3>
          </div>
          <button className="card__box__btn">
            <FaMoneyBillWave />
          </button>
        </div>
        <div className="card__box">
          <div>
            <p className="card__box__text">Today’s Users</p>
            <h3 className="card__box__money">2,300 </h3>
          </div>
          <button className="card__box__btn">
            <FaUserAlt />
          </button>
        </div>
        <div className="card__box">
          <div>
            <p className="card__box__text">New Clients</p>
            <h3 className="card__box__money">+3,052 </h3>
          </div>
          <button className="card__box__btn">
            <FaRegChartBar />
          </button>
        </div>
        <div className="card__box">
          <div>
            <p className="card__box__text">Total Sales</p>
            <h3 className="card__box__money">$173,000</h3>
          </div>
          <button className="card__box__btn">
            <FaStoreAlt />
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
