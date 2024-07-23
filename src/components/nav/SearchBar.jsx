import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../../features/product/productSlice";
function SearchBar() {
  const { searchTerm } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex ms-md-0 ms-lg-3">
      <input
        className="form-control ms-md-auto me-2"
        type="search"
        placeholder=" --search products--"
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchBar;
