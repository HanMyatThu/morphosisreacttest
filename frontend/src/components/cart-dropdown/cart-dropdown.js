import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.scss";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart-selector";
import { withRouter, useHistory } from "react-router-dom";
import { cartToggle } from "../../redux/cart/cart-action";

const CartDropdown = ({ cartItems, dispatch }) => {
  const history = useHistory();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem, idx) => (
            <CartItem key={idx} item={cartItem} />
          ))
        ) : (
          <div>
            <span className="empty-message"> Your cart is empty</span>
          </div>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(cartToggle());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
