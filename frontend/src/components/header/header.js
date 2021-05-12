import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart-selector";
import CartDropDown from "../cart-dropdown/cart-dropdown";

const Header = ({ hidden }) => {
  return (
    <div className="header" id="top">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <CartIcon></CartIcon>
      </div>
      {hidden ? null : <CartDropDown></CartDropDown>}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
