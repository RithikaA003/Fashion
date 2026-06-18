import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route,  Link} 
from "react-router-dom";

import Navbar from "./components/Navbar";
// import Header from "./components/Header";
import LoginPopup from "./components/LoginPopup";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
// import Explore from "./pages/Explore";

/* Admin Pages */
import Dashboard from "./admin/pages/Dashboard";
import AddProduct from "./admin/pages/AddProduct";
import ProductList from "./admin/pages/Product";
import Product from "./admin/pages/Product";

function App() {

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [category, setCategory] = useState("all");

  /* Login Popup */
  const [showLogin, setShowLogin] = useState(false);

  /* Load Local Storage */
  useEffect(() => {

    const savedCart = JSON.parse(localStorage.getItem("cart"));
    const savedWish = JSON.parse(localStorage.getItem("wishlist"));

    if (savedCart) {
      setCart(savedCart);
    }

    if (savedWish) {
      setWishlist(savedWish);
    }

  }, []);

  /* Save Cart */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /* Save Wishlist */
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  /* Add To Cart */
  const addToCart = (product) => {

    const exist = cart.find(
      (item) => item.id === product.id
    );

    if (exist) {

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        { ...product, qty: 1 }
      ]);

    }
  };

  /* Update Quantity */
  const updateQty = (id, qty) => {

    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, qty }
          : item
      )
    );

  };

  /* Remove From Cart */
  const removeFromCart = (id) => {

    setCart(
      cart.filter((item) => item.id !== id)
    );

  };

  /* Add To Wishlist */
  const addToWishlist = (product) => {

    const exist = wishlist.find(
      (item) => item.id === product.id
    );

    if (!exist) {
      setWishlist([...wishlist, product]);
    }

  };

  /* Remove Wishlist */
  const removeFromWishlist = (id) => {

    setWishlist(
      wishlist.filter((item) => item.id !== id)
    );

  };

  return (

    <BrowserRouter>

      {/* LOGIN POPUP */}
      {showLogin && (
        <LoginPopup
          setShowLogin={setShowLogin}
        />
      )}

      {/* NAVBAR */}
      <Navbar
        cartCount={cart.length}
        wishlistCount={wishlist.length}
        setShowLogin={setShowLogin}
      />

      {/* <div style={{
        padding: '20px',
        display: 'flex',
        gap: '20px'
      }}>

        <Link to='/'>Dashboard</Link>
        <Link to='/products'>Products</Link>
        <Link to='/add-product'>Add Product</Link>
        <Link to='/orders'>Orders</Link>

      </div> */}


      {/* HEADER */}
      {/* <Header /> */}

      {/* CATEGORY */}
      {/* <Explore
        category={category}
        setCategory={setCategory}
      /> */}

      {/* ROUTES */}
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              category={category}
              setCategory={setCategory}
            />
          }
        />

        {/* CART */}
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              updateQty={updateQty}
              removeFromCart={removeFromCart}
            />
          }
        />

        {/* CHECKOUT */}
        <Route
          path="/checkout"
          element={
            <Checkout cart={cart} />
          }
        />

        {/* SUCCESS */}
        <Route
          path="/success"
          element={<Success />}
        />

        {/* ADMIN DASHBOARD */}
        <Route
          path="/admin"
          element={<Dashboard />}
        />

        {/* ADD PRODUCT */}
        <Route
          path="/admin/add-product"
          element={<AddProduct />}
        />

        {/* PRODUCT LIST */}
        <Route
          path="/admin/products"
          element={<Product/>}
        />


      </Routes>

    </BrowserRouter>

  );
}

export default App;