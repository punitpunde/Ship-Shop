import React from "react";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
function ProductButton(props) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const handleAddClick = () => {
    dispatch(addToCart(props.product));
  };
  const handleRemoveClick = () => {
    dispatch(removeFromCart(props.product));
  };
  const isPresentInCart = Boolean(
    cartItems.find((item) => item.id === props.product.id)
  );

  if (isPresentInCart) {
    return (
      <button
        className="btn-outline-danger d-block btn w-100 mb-3"
        onClick={handleRemoveClick}
      >
        Remove From Cart
      </button>
    );
  } else {
    return (
      <button
        className="btn-outline-success d-block btn w-100 mb-3"
        onClick={handleAddClick}
      >
        Add to Cart
      </button>
    );
  }
}

export default ProductButton;
