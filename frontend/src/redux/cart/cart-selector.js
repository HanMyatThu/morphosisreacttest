import { createSelector } from "reselect";

//input select

const selectState = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectState],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectState],
  (cart) => cart.hidden
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulateQuantity, cartitem) => accumulateQuantity + cartitem.quantity,
      0
    )
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulateQuantity, cartitem) =>
        accumulateQuantity + cartitem.quantity * cartitem.price,
      0
    )
);
