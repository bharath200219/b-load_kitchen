import React, { useState, useRef, useEffect } from "react";
import navLinks from "../data/navdata";
import { useCart } from "../context/CartContext";
import { FaShoppingCart, FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);
  const cartRef = useRef(null);
  const { cart, total, updateQuantity, removeFromCart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setShowCart(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">B-LOAD KITCHEN</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.id}>
                <a className="nav-link" href={link.href}>{link.name}</a>
              </li>
            ))}

            <li className="nav-item position-relative ms-3" ref={cartRef}>
              <button
                className="btn btn-outline-light position-relative"
                onClick={() => setShowCart(!showCart)}
              >
                <FaShoppingCart />
                {totalItems > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalItems}
                  </span>
                )}
              </button>

              {showCart && (
                <div
                  className="cart-dropdown bg-white shadow-lg rounded p-3 position-absolute end-0 mt-2"
                  style={{
                    width: "420px",
                    maxHeight: "500px",
                    overflowY: "auto",
                    zIndex: 1000,
                  }}
                >
                  <h5 className="mb-3 border-bottom pb-2">Cart Preview</h5>

                  {cart.length === 0 ? (
                    <p className="text-muted">Your cart is empty.</p>
                  ) : (
                    <>
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="d-flex align-items-center mb-3 border-bottom pb-2"
                        >
                          <img
                            src={`/${item.image}`}
                            alt={item.name}
                            style={{
                              width: "60px",
                              height: "60px",
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                          />
                          <div className="ms-3 flex-grow-1">
                            <h6 className="mb-0">{item.name}</h6>
                            <div className="d-flex align-items-center mt-1">
                              <button
                                className="btn btn-sm btn-outline-secondary me-1"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                disabled={item.quantity === 1}
                              >
                                <FaMinus />
                              </button>
                              <span className="mx-2">{item.quantity}</span>
                              <button
                                className="btn btn-sm btn-outline-secondary ms-1"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                              >
                                <FaPlus />
                              </button>
                            </div>
                          </div>
                          <div className="text-end">
                            <div className="fw-bold">₹{item.price * item.quantity}</div>
                            <button
                              className="btn btn-sm btn-danger mt-1"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </div>
                      ))}

                      <div className="d-flex justify-content-between fw-bold border-top pt-2">
                        <span>Total:</span>
                        <span>₹{total}</span>
                      </div>

                      <button className="btn btn-success w-100 mt-3" onClick={() => navigate("/checkout")}>
                        Checkout
                      </button>
                    </>
                  )}
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
