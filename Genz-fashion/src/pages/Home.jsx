import React, { useState } from "react";

import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Explore from "../pages/Explore";

import "./Home.css";

function Home({
  addToCart,
  addToWishlist,
  category,
  setCategory
}) {

  const [search, setSearch] = useState("");

  return (

    <div className="home-container">

      <Header />

      <Explore
        category={category}
        setCategory={setCategory}
      />

      <h1 className="title">
        🔥 Urban Stich
      </h1>

      <input
        className="search-bar"
        placeholder="Search stylish outfits..."
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      {/* ONLY ONE PRODUCT CARD */}
      <ProductCard
        addToCart={addToCart}
        addToWishlist={addToWishlist}
        search={search}
        category={category}
      />

    </div>

  );
}

export default Home;