import React from "react";
import { useCart } from "../context/CartContext"; // Adjust the path if needed

const FoodCategory = ({ title, items, id }) => {
  const { addToCart } = useCart();

  return (
    <div id={id} className="container text-center mt-4">
      <h2 className="text-danger">{title}</h2>
      <div className="row justify-content-center">
        {items.map((item, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card shadow-sm">
              <img src={`/${item.img}`} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">₹{item.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, image: item.img })}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCategory;
