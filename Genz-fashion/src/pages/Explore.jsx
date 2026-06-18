import React from "react";
import { useNavigate } from "react-router-dom";
import "./Explore.css";
import all from "../assets/dress_items/all.jpg";
import shirt from "../assets/dress_items/shirt.jpg";
import tshirt from "../assets/dress_items/tshirt.jpg";

const Explore = ({ category, setCategory }) => {
  const navigate = useNavigate();

  const categories = [
    { name: "all", label: "All", img: all },
    { name: "shirt", label: "Shirt", img: shirt },
    { name: "tshirt", label: "T-Shirt", img: tshirt },
  ];

  return (
    <div className="explore">
      <h4>Dress ✨</h4>

      <div className="dress-items">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`dress-item ${category === item.name ? "active" : ""}`}
            onClick={() => {
              setCategory(item.name);
              navigate("/");
            }}
          >
            <img src={item.img} alt={item.label} />
            <h5>{item.label}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;