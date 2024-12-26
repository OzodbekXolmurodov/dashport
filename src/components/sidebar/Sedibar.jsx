import React from "react";
import "./Sidebar.scss";
import {
  IoHome,
  IoStatsChartSharp,
  IoBuild,
  IoDocument,
} from "react-icons/io5";
import { FaCreditCard, FaUserLarge } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import logo from "../../assets/images/Logo.png";
import { NavLink } from "react-router-dom";
import { useStore } from "../../zustend";

const Sidebar = () => {
  const onLogout = useStore((state) => state.logout);

  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <NavLink to="/">
          <img className="logo" src={logo} alt="Logo" />
        </NavLink>
        <hr className="sidebar__border" />
        <ul className="sidebar__group">
          <li>
            <NavLink to="/layout/home" className="sidebar__item">
              <div className="sidebar__icon">
                <IoHome />
              </div>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/layout/tables" className="sidebar__item">
              <div className="sidebar__icon">
                <IoStatsChartSharp />
              </div>
              <span>Tables</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/layout/billing" className="sidebar__item">
              <div className="sidebar__icon">
                <FaCreditCard />
              </div>
              <span>Billing</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/layout/rtl" className="sidebar__item">
              <div className="sidebar__icon">
                <IoBuild />
              </div>
              <span>RTL</span>
            </NavLink>
          </li>
          <h3 className="account-title">ACCOUNT PAGES</h3>
          <li>
            <NavLink to="/layout/profile" className="sidebar__item">
              <div className="sidebar__icon">
                <FaUserLarge />
              </div>
              <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/layout/sign-in" className="sidebar__item">
              <div className="sidebar__icon">
                <IoDocument />
              </div>
              <span>Sign In</span>
            </NavLink>
          </li>
          <li onClick={onLogout}>
            <NavLink className="sidebar__item">
              <div className="sidebar__icon">
                <IoIosRocket />
              </div>
              <span>Sign Up</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
