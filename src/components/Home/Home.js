import React from "react";
import { useNavigate } from "react-router-dom";
import useReview from "../../hooks/useReview";
import Review from "../Review/Review";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  const [reviews, setReviews] = useReview();
  const navigate = useNavigate();
  const seeMoreBtn = () => {
    const path = "/reviews";
    navigate(path);
  };
  return (
    <section className="mb-10">
      <div className="flex justify-between h-screen m-10 ">
        <div className="text-left mt-16 w-1/2">
          <h1 className="text-6xl mb-3">
            <span className="text-violet-800">Artistic</span> <br />
            <span>Photography</span>
          </h1>
          <h4 className="text-2xl mb-3 text-gray-600">Quality Matters</h4>
          <p className="text-gray-800 mb-3">
            Welcome and thank you for taking the time to view my work.When
            documenting your day, my goal is for you to feel comfortable in
            front of the camera and that you have a stress-free, fun experience
            while we capture your story, but most importantly, that you love
            your photos. I believe our experience together is just as important
            as amazing images.
          </p>
          <button className="bg-violet-300 px-8 py-4  text-yellow-50 rounded-lg">
            View My Work
          </button>
        </div>
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1625492922105-5914617fd869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
            alt=""
          />
        </div>
      </div>
      {/*..................... 
      Customer reviews
      .......................*/}
      <h2 className="text-4xl text-violet-900 italic p-6 border-4 border-b-indigo-500 w-1/2 mx-auto">
        Customers Review
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-10">
        {reviews
          .map((review) => <Review key={review.id} review={review}></Review>)
          .slice(0, 3)}
      </div>
      <button
        className="px-6 py-3 bg-violet-400 text-white rounded-lg"
        onClick={seeMoreBtn}
      >
        See More
      </button>
    </section>
  );
};

export default Home;
