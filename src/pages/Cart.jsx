import React from "react";
import NoContent from "../components/extra/NoContent";
import { useSelector } from "react-redux";
import CartItem from "../components/cart/CartItem";
import CartNumber from "../components/cart/CartNumber";
import CartBuyButton from "../components/cart/CartBuyButton";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  if (cartItems.length === 0) {
    return (
      <NoContent
        text="Nothing in your cart !"
        btnText="Browse Products"
      ></NoContent>
    );
  }

  return (
    <div className="row py-3">
      <div className="col-12 col-md-10 col-xl-8 mx-auto">
        <div
          id="cart"
          className="border p-3 bg-white text-dark my-3 my-md-0 rounded"
        >
          <h4 className="mb-3 px-1 text-center">Cart </h4>
          <ul className="list-group mb-3">
            {cartItems.map((item) => {
              return <CartItem key={item.id} item={item}></CartItem>;
            })}
          </ul>
          <CartNumber></CartNumber>
          <CartBuyButton></CartBuyButton>
        </div>
      </div>
    </div>
  );
}

export default Cart;
