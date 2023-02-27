import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";

export default function CartLink() {
  const { cartItems } = React.useContext(CartContext);

  return (
    <div className="cart-link-container">
      <Link to="/cart"><a class="shopping-cart" href="cart.html"><i class="fas fa-shopping-cart"></i></a></Link>
      <span className="cart-link-total">{cartItems}</span>
    </div>
  );
}
