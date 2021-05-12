export const addItemsToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => cartItemToAdd.name === item.name
  );
  if (existingCartItem) {
    return cartItems.map((item) => {
      if (cartItemToAdd.name === item.name) {
        if (item.quantity >= cartItemToAdd.stock) {
          alert("Item is out of stock");
        } else {
          return { ...item, quantity: item.quantity + 1 };
        }
      }
      return item;
    });
  }
  if (cartItemToAdd.stock <= 0) {
    alert("Item is out of stock");
    return cartItems;
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.name === cartItemToRemove.name
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.name !== cartItemToRemove.name
    );
  }

  return cartItems.map((cartItem) =>
    cartItem.name === cartItemToRemove.name
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
