import React, { useContext } from "react";
import { CartContext } from "../Context/Cart_Context";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, updateQty, total } =
    useContext(CartContext);

  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h3>Your cart is empty</h3>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">My Cart</h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="cart-item d-flex align-items-center justify-content-between mb-3"
        >
          <div className="cart-left d-flex align-items-center gap-3">
            <img
              src={item.image}
              alt={item.name}
              className="cart-img"
            />
            <div>
              <h6 className="mb-1">{item.name}</h6>
              <p className="mb-0">₹{item.price}</p>
            </div>
          </div>

          <div className="cart-qty d-flex align-items-center gap-2">
            <button
              className="btn btn-sm btn-secondary"
              onClick={() => updateQty(item.id, "dec")}
            >
              -
            </button>

            <span>{item.qty}</span>

            <button
              className="btn btn-sm btn-secondary"
              onClick={() => updateQty(item.id, "inc")}
            >
              +
            </button>
          </div>

          <button
            className="btn btn-sm btn-danger"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <h4 className="text-end mt-4">
        Total Amount: ₹{total}
      </h4>

      <div className="text-end mt-3">
        <Link to="/Billing"
          className="btn btn-dark"
          onClick={() => navigate("")}
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
