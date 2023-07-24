export const addItemToCart = (cartItems, cartItemToAdd) => {
	if (!Array.isArray(cartItems)) {
		console.error('cartItems must be an array.');
		return cartItems; // or throw an error, depending on your use case
	  }
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1 }];

};
