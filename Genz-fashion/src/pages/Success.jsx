import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="container">
      <h1>🎉 Order Success</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default Success;