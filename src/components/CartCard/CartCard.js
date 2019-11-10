import React from "react";

import "./cartCard.css";

const CartCard = props => {
  const { item, cart } = props;
  return (
    <div className="cart-card">
      <div style={{ flex: "1", marginRight: "10px" }}>
        <img className="cart-thumb" src={item.image} alt="img" />
      </div>
      <div style={{ flex: "8" }} className="course-container">
        <div className="cart-title">{item.name}</div>
      </div>
    </div>
  );
};

export default CartCard;
