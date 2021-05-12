import React from "react";
import "./checkout.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-items/checkout-items";

import "./checkout.scss";

import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../redux/cart/cart-selector";

const CheckOut = ({ cartItems, total }) => {
  const changeCurrency = (price) => {
    let thaiBaht = price * 31.22;
    return thaiBaht.toFixed();
  };

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>Name</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartitem, idx) => (
        <CheckoutItem key={idx} item={cartitem} />
      ))}

      <div className="total">
        <span>Total: ฿ {changeCurrency(total)}</span>
      </div>
      <div className="row checkout">
        <button
          onClick={(e) => alert("Checkout Feature is not available yet")}
          className="btn btn-secondary"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotalPrice,
});

export default connect(mapStateToProps)(CheckOut);
