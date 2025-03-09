import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", address: "", mobile: "" });
  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.mobile.trim()) newErrors.mobile = "Mobile number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOrder = () => {
    if (!validateForm()) return;
    setOrderPlaced(true);
    clearCart();
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="text-center">
          <h2 className="text-success mb-3">✅ Order placed successfully!</h2>
          <p>Redirecting to homepage...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Checkout</h2>
      <div className="row">
        {/* Form Section */}
        <div className="col-md-6 mb-4">
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                name="name"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                onChange={handleChange}
                required
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                name="address"
                className={`form-control ${errors.address ? "is-invalid" : ""}`}
                onChange={handleChange}
                required
              />
              {errors.address && <div className="invalid-feedback">{errors.address}</div>}
            </div>
            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <input
                name="mobile"
                className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
                onChange={handleChange}
                required
              />
              {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
            </div>
            <div className="mb-3">
              <label className="form-label">Payment Mode</label>
              <input
                className="form-control"
                value="Cash on Delivery (COD)"
                readOnly
              />
            </div>
            <button
              type="button"
              className="btn btn-success w-100"
              onClick={handleOrder}
            >
              Order Now
            </button>
          </form>
        </div>

        {/* Cart Summary Section */}
        <div className="col-md-6">
          <h4>Order Summary</h4>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={item.id}
              >
                <div>
                  <strong>{item.name}</strong> x {item.quantity}
                </div>
                <div>₹{item.price * item.quantity}</div>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between">
              <strong>Total</strong>
              <strong>₹{total}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Checkout;