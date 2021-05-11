import React from "react";
import "./cart-icon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { cartToggle } from "../../redux/cart/cart-action";
import { selectCartItemCount } from "../../redux/cart/cart-selector";

const cartIcon = ({ cartToggle, itemCount }) => {
  return (
    <div className="cart-icon" onClick={cartToggle}>
      <ShoppingIcon />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  cartToggle: () => dispatch(cartToggle()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
