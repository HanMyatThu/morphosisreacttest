import React from "react";
import "./cart-item.scss";

const CartItem = ({ item: { image, price, name, quantity } }) => {
  const changeCurrency = (price) => {
    let thaiBaht = price * 31.22;
    thaiBaht = thaiBaht.toFixed();
    return thaiBaht.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div className="cart-item">
      <img src={image} alt="cartItem"></img>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ฿ {changeCurrency(price)}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
