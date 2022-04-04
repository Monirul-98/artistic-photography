import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {reviews.map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;
