import React from "react";
import { connect } from "react-redux";

import {
  removeItemFromCart,
  addItemsToCart,
  removeItem,
} from "../../redux/cart/cart-action";

import "./checkout-items.scss";

const CheckoutItem = ({ item, clearItem, addItem, removeItem }) => {
  const { name, image, price, quantity, stock } = item;
  const changeCurrency = (price) => {
    let thaiBaht = price * 31.22;
    return thaiBaht.toFixed();
  };
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={image} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">฿ {changeCurrency(price)}</span>
      <div className="remove-button" onClick={() => clearItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(removeItemFromCart(item)),
  addItem: (item) => dispatch(addItemsToCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
