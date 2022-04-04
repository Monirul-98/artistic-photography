import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  const { name, img, reviewTxt, ratings } = review;
  return (
    <div className="w-2/3 bg-slate-200 p-3 rounded-lg">
      <img className="w-full rounded-lg mb-3" src={img} alt="" />
      <div className="text-center">
        <figure>
          <blockquote className="relative p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
            <p className="mb-3"> {reviewTxt}</p>
          </blockquote>
          <figcaption className="text-2xl text-violet-900 font-semibold mb-3">
            {name}
          </figcaption>
        </figure>
        <p>Rating:{ratings}</p>
      </div>
    </div>
  );
};

export default Review;
