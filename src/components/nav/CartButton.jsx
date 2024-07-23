import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function CartButton() {
  const nav = useNavigate();
  const handleCartClick = () => {
    nav("/cart");
  };
  const { cartItems } = useSelector((state) => state.cart);
  const bgcolor = cartItems.length === 0 ? "none" : "white";
  return (
    <button
      onClick={handleCartClick}
      type="button"
      className="btn btn-outline-success d-md-block mt-3 mt-lg-0"
    >
      <i className="bi bi-cart3"></i>
      <span className="mx-2">Checkout</span>
      <span className={`badge text-success bg-${bgcolor}`}>
        {cartItems.length}
      </span>
    </button>
  );
}

export default CartButton;
