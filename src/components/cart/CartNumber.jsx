import React from "react";
import { useSelector } from "react-redux";
import Price from "../extra/Price";
function CartNumber() {
  const cartNumbers = useSelector((state) => state.cart);
  const { cartNumber } = cartNumbers;
  const items = [
    { title: "Subtotal", price: cartNumber.subTotal },
    { title: "Shipping", price: cartNumber.shipping },
    { title: "tax", price: cartNumber.tax },
    { title: "Total (INR)", price: cartNumber.total },
  ];
  return (
    <div id="cart-numbers">
      <ul className="list-group mb -3">
        {items.map((item) => (
          <li className="list-group-item d-flex justify-content-between">
            <span>{item.title}</span>
            <span className="text-muted">
              <Price value={item.price} decimal={2}></Price>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartNumber;
