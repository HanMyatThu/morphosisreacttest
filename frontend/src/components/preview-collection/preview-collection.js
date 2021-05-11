import React from "react";
import "./preview-collection.scss";
import CustomButton from "../custom-button/custom-button";

import { connect } from "react-redux";
import { addItemsToCart } from "../../redux/cart/cart-action";

const PreviewCollection = ({ item, addItemsToCart }) => {
  return (
    <div className="collection-item col-md-3 mt-3">
      <div className="card">
        <img src={item.image} className="card-img-top image" alt="..."></img>
        <div className="card-body text-center">
          <h5 className="card-title">{item.name}</h5>
          <h5 className="card-title">{item.material}</h5>
          <h5 className="card-title">{item.price}</h5>
          <h5 className="card-title">{item.stock}</h5>
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
