import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import "./Review.css";

const Review = ({ review }) => {
  const { name, img, reviewTxt, ratings } = review;
  return (
    <div className="w-2/3 bg-slate-200 p-3 rounded-lg mx-auto">
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
        <Rating
          initialRating={ratings}
          emptySymbol={<FontAwesomeIcon icon={faHeart} />}
          fullSymbol={
            <FontAwesomeIcon style={{ color: "darkviolet" }} icon={faHeart} />
          }
          readonly
        ></Rating>
      </div>
    </div>
  );
};

export default Review;
