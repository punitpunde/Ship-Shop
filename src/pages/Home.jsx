import React from "react";
import data from "../data";
import Products from "../components/products/Products";
// import Product from "../components/products/Product";
import { useSelector } from "react-redux";
function Home() {
  const { productsFromSearch } = useSelector((state) => state.products);
  return <Products products={productsFromSearch}></Products>;
}

export default Home;
