import React from "react";
import { useDispatch } from "react-redux";
import { setQuantity } from "../../features/cart/cartSlice";
import Price from "../extra/Price";
function CartItem(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const handleClick = (qty) => {
    dispatch(setQuantity({ item, qty }));
  };
  return (
    <li className="list-group-item">
      <div className="d-flex my-0 justify-content-center align-items-center">
        <span className="fw-bold fs-6 me-auto">
          {item.name}(<Price value={item.price} decimal={2}></Price>)
        </span>
        <div className="btn-group">
          <button
            className="btn border"
            onClick={() => {
              handleClick(-1);
            }}
          >
            -
          </button>
          <button className="btn border" disabled>
            {item.quantity}
          </button>
          <button
            className="btn border"
            onClick={() => {
              handleClick(+1);
            }}
          >
            +
          </button>
        </div>
      </div>
      <p className="text-muted mb-0 col-3 w-100 description">
        {item.description}
      </p>
    </li>
  );
}

export default CartItem;
