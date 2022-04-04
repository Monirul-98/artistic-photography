import React from "react";

const Home = () => {
  return (
    <div className="flex justify-between h-screen mx-10 ">
      <div className="text-left mt-16 w-1/2">
        <h1 className="text-6xl mb-3">
          <span className="text-violet-800">Artistic</span> <br />
          <span>Photography</span>
        </h1>
        <h4 className="text-2xl mb-3 text-gray-600">Quality Matters</h4>
        <p className="text-gray-800">
          Welcome and thank you for taking the time to view my work.When
          documenting your day, my goal is for you to feel comfortable in front
          of the camera and that you have a stress-free, fun experience while we
          capture your story, but most importantly, that you love your photos. I
          believe our experience together is just as important as amazing
          images.
        </p>
      </div>
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1625492922105-5914617fd869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
