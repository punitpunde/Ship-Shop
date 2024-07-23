import React from "react";
import Product from "./Product";
function Products(props) {
  const { products } = props;
  return (
    <div className="px-lg-5 text-dark">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 gy-4 justify-conent-start">
        {products.map((product) => {
          return <Product product={product}></Product>;
        })}
      </div>
    </div>
  );
}

export default Products;
