import React from "react";

import "./courseCard.css";

const CourseCard = props => {
  const { item, cart } = props;
  return (
    <div className="course-card">
      <div style={{ flex: "1", marginRight: "10px" }}>
        <img className="course-thumb" src={item.image} alt="img" />
        <button onClick={() => props.cartHandler(props.index)} className="cart">
          {cart}
        </button>
      </div>
      <div style={{ flex: "8" }} className="course-container">
        <div className="course-title">{item.name}</div>
        <div className="course-description">{item.description}</div>
        <div className="card-detail">
          <div>{item.author}</div>
          <div>{item.publishDate}</div>
          <div>{item.duration}</div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
