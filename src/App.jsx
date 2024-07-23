import React, { useEffect } from "react";
import NavBar from "./components/nav/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Cart from "./pages/Cart";
import { useDispatch, useSelector } from "react-redux";
import { setCartNumbers } from "./features/cart/cartSlice";
export default function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(setCartNumbers());
  }, [cartItems]);
  return (
    <div className="wrapper bg-dark text-white">
      <NavBar title="Ship-Shop"></NavBar>
      <div className="container mt-5 py-5 px-3 px-md-5">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/single/:id" element={<Single></Single>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
      </div>
    </div>
  );
}
