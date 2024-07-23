import React from "react";
import { useNavigate } from "react-router-dom";
import ProductButton from "./ProductButton";
import { useDispatch } from "react-redux";
import { setSingleProduct } from "../../features/product/productSlice";
import Price from "../extra/Price";
function Product(props) {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setSingleProduct(product.id));
    nav(`/single/${product.id}`);
  };

  const { product } = props;
  const imgPath = "/images/" + product.id + ".jpg";
  return (
    <div className="col ">
      <div className="card h-100" id="product">
        <img
          onClick={handleClick}
          src={imgPath}
          title={product.name}
          alt=""
          className="cardd-img-top pointer h-47 "
        />
        <div className="cart-body p-4">
          <div className="text-center bold">
            <h6 className="fw-bold">{product.name}</h6>
            <span>
              <Price value={product.price} decimal={0}></Price>
            </span>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
          <ProductButton product={product}></ProductButton>
        </div>
      </div>
    </div>
  );
}

export default Product;
