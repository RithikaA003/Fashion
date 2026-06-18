import React from "react";
import "./Dashboard.css";

import {
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaPlus,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Dashboard() {

  return (

    <div className="dashboard">

      {/* HEADER */}
      <div className="dashboard-header">

        <h1>Admin Dashboard</h1>

        <p>
          Welcome Back Admin 👋
        </p>

      </div>

      {/* CARDS */}
      <div className="dashboard-cards">

        {/* PRODUCTS */}
        <div className="dashboard-card products">

          <FaBoxOpen className="card-icon" />

          <h2>Total Products</h2>

          <h1>120</h1>

          <Link
            to="/admin/products"
            className="card-btn"
          >
            View Products
          </Link>

        </div>

        
        </div>


      {/* QUICK ACTIONS */}
      <div className="quick-actions">

        <h2>Quick Actions</h2>

        <div className="action-buttons">

          <Link
            to="/admin/add-product"
            className="action-btn"
          >
            <FaPlus />
            Add Product
          </Link>

          <Link
            to="/admin/products"
            className="action-btn"
          >
            <FaBoxOpen />
            Products
          </Link>


        </div>

      </div>

    </div>

  );
}

export default Dashboard;