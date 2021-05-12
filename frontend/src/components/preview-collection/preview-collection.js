import React from "react";
import "./preview-collection.scss";
import CustomButton from "../custom-button/custom-button";

import { connect } from "react-redux";
import { addItemsToCart } from "../../redux/cart/cart-action";

const PreviewCollection = ({ item, addItemsToCart }) => {
  const changeCurrency = (price) => {
    let thaiBaht = price * 31.22;
    return thaiBaht.toFixed();
  };
  const dateFormat = (date) => {
    date = new Date(date);
    var dd = String(date.getDate()).padStart(2, "0");
    var mm = String(date.getMonth() + 1).padStart(2, "0");
    var yyyy = date.getFullYear();

    var formattedDate = mm + "-" + dd + "-" + yyyy;
    return formattedDate;
  };
  return (
    <div className="collection-item col-md-3 mt-3 col-sm-4">
      <div className="card">
        <img src={item.image} className="card-img-top image" alt="..."></img>
        <div className="card-body item-details text-left">
          <span className="pl-5">Date : {dateFormat(item.createdAt)}</span>
          <p className="description">Product: {item.name}</p>
          <span>Material: {item.material}</span>
          <h6 className="card-title">Current Stock: {item.stock}</h6>
          <h6 className="price">฿ {changeCurrency(item.price)}</h6>
          <CustomButton
            className="btn btn-outline-secondary custom-button"
            onClick={() => addItemsToCart(item)}
          >
            Add To Card
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemsToCart: (item) => dispatch(addItemsToCart(item)),
});

export default connect(null, mapDispatchToProps)(PreviewCollection);
