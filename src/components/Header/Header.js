import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <nav className="my-5 md:sticky top-0 bg-white z-10">
      <ul className="md:flex justify-center items-center text-xl ">
        <li>
          <CustomLink to="/home">Home</CustomLink>
        </li>
        <li>
          <CustomLink to="/reviews">Reviews</CustomLink>
        </li>
        <li>
          <CustomLink to="/dashboard">Dashboard</CustomLink>
        </li>
        <li>
          <CustomLink to="/blogs">Blogs</CustomLink>
        </li>
        <li>
          <CustomLink to="/about">About</CustomLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
