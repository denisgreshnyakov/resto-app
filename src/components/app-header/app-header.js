import React from "react";
import cartIcon from "./shopping-cart-solid.svg";
import "./app-header.scss";
import { Link } from "react-router-dom";

const AppHeader = ({ total }) => {
  return (
    <header className="header">
      <a className="header__link" href="/">
        Menu
      </a>
      <a className="header__link" href="#">
        <img className="header__cart" src={cartIcon} alt="cart"></img>
        Total: {total} $
      </a>
    </header>
  );
};

export default AppHeader;
