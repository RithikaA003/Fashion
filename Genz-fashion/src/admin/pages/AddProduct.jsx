import React, {
  useState,
} from "react";

import "./AddProduct.css";

import API from "../../api";

function AddProduct() {

  const [formData, setFormData] = useState({
    category: "",
    name: "",
    description: "",
    color: "",
    price: "",
    stock: "",
    image: null,
  });

  /* HANDLE INPUT */
  const handleChange = (e) => {

    if (e.target.name === "image") {

      setFormData({
        ...formData,
        image: e.target.files[0],
      });

    } else {

      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });

    }
  };

  /* SUBMIT */
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const data = new FormData();

      data.append(
        "category",
        formData.category
      );

      data.append(
        "name",
        formData.name
      );

      data.append(
        "description",
        formData.description
      );

      data.append(
        "color",
        formData.color
      );

      data.append(
        "price",
        formData.price
      );

      data.append(
        "stock",
        formData.stock
      );

      data.append(
        "image",
        formData.image
      );

      await API.post(
        "products/",
        data
      );

      alert(
        "Product Added Successfully"
      );

      setFormData({
        category: "",
        name: "",
        description: "",
        color: "",
        price: "",
        stock: "",
        image: null,
      });

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div className="add-product">

      <div className="product-container">

        <h1>Add Product</h1>

        <form onSubmit={handleSubmit}>

          {/* CATEGORY */}
          <div className="form-group">

            <label>
              Category
            </label>

            <input
              type="text"
              name="category"
              placeholder="Enter Category"
              value={formData.category}
              onChange={handleChange}
              required
            />

          </div>

          {/* PRODUCT NAME */}
          <div className="form-group">

            <label>
              Product Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter Product Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>

          {/* DESCRIPTION */}
          <div className="form-group">

            <label>
              Description
            </label>

            <textarea
              name="description"
              placeholder="Enter Description"
              value={formData.description}
              onChange={handleChange}
              required
            />

          </div>

          {/* COLOR */}
          <div className="form-group">

            <label>
              Color
            </label>

            <input
              type="text"
              name="color"
              placeholder="Enter Product Color"
              value={formData.color}
              onChange={handleChange}
              required
            />

          </div>

          {/* PRICE */}
          <div className="form-group">

            <label>
              Price
            </label>

            <input
              type="number"
              name="price"
              placeholder="Enter Price"
              value={formData.price}
              onChange={handleChange}
              required
            />

          </div>

          {/* STOCK */}
          <div className="form-group">

            <label>
              Stock
            </label>

            <input
              type="number"
              name="stock"
              placeholder="Enter Stock"
              value={formData.stock}
              onChange={handleChange}
              required
            />

          </div>

          {/* IMAGE */}
          <div className="form-group">

            <label>
              Product Image
            </label>

            <input
              type="file"
              name="image"
              onChange={handleChange}
              required
            />

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="submit-btn"
          >
            Add Product
          </button>

        </form>

      </div>

    </div>

  );
}

export default AddProduct;