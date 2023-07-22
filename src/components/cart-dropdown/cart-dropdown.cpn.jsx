import React from "react";

import CustomButton from "../costum-button/costum-button.cpn";
import "./cart-dropdown.styles.scss";

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>Go to checkout</CustomButton>
  </div>
);
export default CartDropDown;
