import React from "react";
import "./cart-item.scss";

const CartItem = ({ item: { image, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={image} alt="cartItem"></img>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;