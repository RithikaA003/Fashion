import React, { useState } from "react";
import "./Checkout.css";

function Checkout({ cart }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: ""
  });

  // ✅ calculate total
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ WhatsApp Order
  const handleOrder = () => {
    const { name, phone, address, city, pincode } = form;

    if (!name || !phone || !address || !city || !pincode) {
      alert("Please fill all address fields");
      return;
    }

    // 🧾 Build order message
    let message = `🛒 *New Order*\n\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x ${item.qty} = ₹${
        item.price * item.qty
      }\n`;
    });

    message += `\n💰 Total: ₹${total}\n\n`;

    message += `📍 *Delivery Address*\n`;
    message += `Name: ${name}\n`;
    message += `Phone: ${phone}\n`;
    message += `Address: ${address}\n`;
    message += `City: ${city}\n`;
    message += `Pincode: ${pincode}`;

    // ⚠️ Replace with YOUR WhatsApp number (with country code)
    const adminNumber = "9605064782";

    const url = `https://wa.me/${adminNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="checkout-container">
      <h1 className="title">Checkout</h1>

      <div className="checkout-layout">

        {/* LEFT - ADDRESS */}
        <div className="checkout-left">
          <h3>📍 Delivery Address</h3>

          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Full Address"
            value={form.address}
            onChange={handleChange}
          ></textarea>

          <div className="row">
            <input
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
            />
            <input
              name="pincode"
              placeholder="Pincode"
              value={form.pincode}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* RIGHT - SUMMARY */}
        <div className="checkout-right">

          <h3>🧾 Order Summary</h3>

          {cart.map((item) => (
            <div key={item.id} className="summary-row">
              <span>{item.name} x {item.qty}</span>
              <span>₹{item.price * item.qty}</span>
            </div>
          ))}

          <div className="summary total">
            <p>Total Amount</p>
            <h2>₹{total}</h2>
          </div>

          <button className="order-btn" onClick={handleOrder}>
            Place Order via WhatsApp
          </button>

        </div>

      </div>
    </div>
  );
}

export default Checkout;