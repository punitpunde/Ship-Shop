import React from "react";
import { useParams } from "react-router-dom";
import ProductButton from "../components/products/ProductButton";
import Line from "../components/extra/Line";
import Products from "../components/products/Products";
import { useSelector, useDispatch } from "react-redux";
import Price from "../components/extra/Price";
function Single() {
  const { id } = useParams();

  const { singleSimilarProducts, single } = useSelector(
    (state) => state.products
  );
  const imgPath = "/images/" + single.id + ".jpg";
  const dispatch = useDispatch();

  return (
    <div
      id="single"
      className="row justify-content-center align-items-center text-white mx-auto"
    >
      <div className="col-md-6 ">
        <img
          src={imgPath}
          alt={single.name}
          className="cart-img-top mb-5 mb-md-0 p-0 p-lg-5"
        />
      </div>
      <div className="col-md-6 text-center text-md-start">
        <h2 className="fs-1 fw-bold">{single.name}</h2>
        <div className="fs-5 mb-2">
          <Price value={single.price} decimal={2} />
        </div>
        <p className="lead mb-5">{single.description}</p>
        <ProductButton product={single}></ProductButton>
      </div>
      <Line></Line>
      <h2 className="text-white my-4  text-center">
        Similar Products Like This
      </h2>
      <Products products={singleSimilarProducts}></Products>
    </div>
  );
}

export default Single;
