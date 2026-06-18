import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart({ cart, updateQty, removeFromCart }) {
  const navigate = useNavigate();

  const itemTotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const delivery = cart.length > 0 ? 10 : 0;
  const total = itemTotal + delivery;

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 Cart</h1>

      <div className="cart-layout">

        {/* LEFT - TABLE */}
        <div className="cart-left">
          <div className="cart-table">

            <div className="cart-header">
              <p>Item</p>
              <p>Img</p>
              <p>Price</p>
              <p>Qty</p>
              <p>Total</p>
              <p>Action</p>
            </div>

            {cart.map((item) => (
              <div key={item.id} className="cart-row">

                <p className="item-name">{item.name}</p>

                <img src={item.image} alt={item.name} />

                <p>₹{item.price}</p>

                <div className="qty">
                  <button
                    onClick={() =>
                      item.qty > 1
                        ? updateQty(item.id, item.qty - 1)
                        : removeFromCart(item.id)
                    }
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button onClick={() => updateQty(item.id, item.qty + 1)}>
                    +
                  </button>
                </div>

                <p>₹{item.price * item.qty}</p>

                <button
                  className="remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>

              </div>
            ))}

          </div>
        </div>

        {/* RIGHT - BILL */}
        <div className="cart-right">
          <div className="bill-section">

            <h2>Bill Details</h2>

            <div className="bill-row">
              <span>Item Total</span>
              <span>₹{itemTotal}</span>
            </div>

            <div className="bill-row">
              <span>Delivery Fee</span>
              <span>₹{delivery}</span>
            </div>

            <div className="bill-row total">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button onClick={() => navigate("/checkout")}>
              Proceed to Checkout
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Cart;