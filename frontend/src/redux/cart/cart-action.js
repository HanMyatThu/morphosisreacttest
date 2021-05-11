import { cartActionTypes } from "./cart-types.js";

export const cartToggle = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItemsToCart = (item) => ({
  type: cartActionTypes.ADD_ITEMS,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});
