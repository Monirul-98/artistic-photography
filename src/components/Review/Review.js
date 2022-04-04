import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  const { name, img, reviewTxt, ratings } = review;
  return (
    <div className="w-2/3">
      <img className="user-image" src={img} alt="" />
      <h2>{name}</h2>
      <p>{reviewTxt}</p>
      <p>Rating:{ratings}</p>
    </div>
  );
};

export default Review;
