import React from "react";
import { useNavigate } from "react-router-dom";

const FoodDetail = ({ foodItem }) => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2>{foodItem.name}</h2>
      <p>Price: ₹{foodItem.price}</p>
      <button className="btn btn-success mt-3" onClick={() => {
        console.log("Adding to cart:", foodItem.id); // Debugging log
        navigate(`/cart?add=${foodItem.id}`);
      }}>
        Add to Cart
      </button>
    </div>
  );
};

export default FoodDetail;
