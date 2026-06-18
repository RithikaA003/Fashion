import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./ProductCard.css";
import API from "../api";

function ProductCard({ addToCart }) {

  const [products, setProducts] = useState([]);
  const [liked, setLiked] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {

    try {

      const response = await API.get("products/");
      setProducts(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  const handleCart = (product) => {

    addToCart(product);
    navigate("/cart");

  };

  const toggleLike = (id) => {

    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

  };

  return (

    <div className="product-container">

      {products.map((product) => (

        <div className="card" key={product.id}>

          <div
            className="heart"
            onClick={() => toggleLike(product.id)}
          >
            {liked[product.id]
              ? <FaHeart color="red" />
              : <FaRegHeart />
            }
          </div>

          <img src={ product.image?.startsWith("http")
          ? product.image
          : `http://127.0.0.1:8000${product.image}`
          }
          alt={product.name}
          className="product-image"
          />

          <div className="product-details">

            <h3>{product.name}</h3>

            <p>{product.category}</p>

            <p>{product.color}</p>

            <h4>₹ {product.price}</h4>

            <button
              onClick={() => handleCart(product)}
            >
              Add to Cart
            </button>

          </div>

        </div>

      ))}

    </div>

  );
}

export default ProductCard;