import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaPlus,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>

      <Link to="/admin">
        <FaHome /> Dashboard
      </Link>

      <Link to="/admin/add-product">
        <FaPlus /> Add Product
      </Link>

      <Link to="/admin/products">
        <FaBox /> Products
      </Link>

      <Link to="/admin/orders">
        <FaShoppingCart /> Orders
      </Link>

      <Link to="/admin/users">
        <FaUsers /> Users
      </Link>
    </div>
  );
}

export default Sidebar;