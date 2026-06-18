import React, { useEffect, useState } from "react";
import API from "../../api";
import "./Product.css";

function Product() {
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    stock: "",
    price: "",
  });

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

  const handleEdit = (item) => {
    setEditId(item.id);

    setFormData({
      name: item.name,
      stock: item.stock,
      price: item.price,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      await API.patch(`products/${editId}/`, formData);

      alert("Product Updated Successfully");

      setEditId(null);
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="product-container">
      {products.map((item) => (
        <div className="card" key={item.id}>
          <img
            src={
              item.image?.startsWith("http")
                ? item.image
                : `http://127.0.0.1:8000${item.image}`
            }
            alt={item.name}
            className="product-image"
          />

          {editId === item.id ? (
            <div className="edit-section">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Product Name"
              />

              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="Stock"
              />

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
              />

              <div className="button-group">
                <button
                  className="save-btn"
                  onClick={handleUpdate}
                >
                  Save
                </button>

                <button
                  className="cancel-btn"
                  onClick={() => setEditId(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="product-details">
              <h3>{item.name}</h3>

              <div className="stock">
                Stock Available: {item.stock}
              </div>

              <div className="price-section">
                <span className="price">
                  ₹ {item.price}
                </span>
              </div>

              <button
                className="edit-btn"
                onClick={() => handleEdit(item)}
              >
                Edit Product
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Product;