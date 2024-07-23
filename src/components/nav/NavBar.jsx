import React from "react";
import SearchBar from "./SearchBar";
import CategorySelector from "./CategorySelector";
import CartButton from "./CartButton";
import { useNavigate, useLocation } from "react-router-dom";

export default function NavBar(props) {
  const nav = useNavigate();
  const handleHomeNavigation = () => {
    nav("/");
  };
  const { pathname } = useLocation();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom fixed-top">
        <div className="container-fluid px-md-5">
          <span
            onClick={handleHomeNavigation}
            id="name"
            className="navbar-brand fw-bold pointer"
          >
            {props.title}
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            {pathname === "/" && (
              <>
                <CategorySelector></CategorySelector>
                <SearchBar></SearchBar>
              </>
            )}
            <CartButton></CartButton>
          </div>
        </div>
      </nav>
    </div>
  );
}
