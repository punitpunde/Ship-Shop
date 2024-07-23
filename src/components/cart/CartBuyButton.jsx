import { result } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function CartBuyButton() {
  const nav = useNavigate();
  const handleClick = async () => {
    const result = await Swal.fire({
      title: "Do you want to place the order ?",
      showDenyButton: true,
      confirmButtonText: "Place Order",
      denyButtonText: "Don't Place",
      icon: "question",
    });

    if (result.isConfirmed) {
      const result = await Swal.fire({
        title: "Done",
        text: "Order Placed",
        icon: "success",
      });
      nav("/");
      window.location.reload();
    }
    if (result.isDenied) {
      const result = await Swal.fire({
        title: "Failure",
        text: "Order not Placed",
        icon: "info",
      });
    }
  };
  return (
    <button
      className="btn btn-success d-block w-100 fw-bold mt-3"
      onClick={handleClick}
    >
      Buy Now
    </button>
  );
}

export default CartBuyButton;
