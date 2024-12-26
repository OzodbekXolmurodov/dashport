import React from "react";
import "./Header.scss";
import { FiSearch } from "react-icons/fi";
import { FaUserLarge } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { TbBellFilled } from "react-icons/tb";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__left__content">
          <h3 className="header__left__content__text">Dashboard</h3>
        </div>
        <nav className="header__right__content">
          <form className="header__right__content__form" action="">
            <button className="header__right__content__form__btn">
              <FiSearch />
            </button>
            <input
              className="header__right__content__form__input"
              placeholder="Type here"
              type="text"
            />
          </form>
          <div className="header__right__content__group">
            <FaUserLarge className="header__right__content__group__icon" />
            <p className="header__right__content__group__text">Sign In</p>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
