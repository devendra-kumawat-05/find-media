import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-10 bg-(--c1)">
      <h2 className="text-2xl font-medium">
        <span className="italic text-4xl">find</span>Media
      </h2>
      <div className="flex gap-5 items-center">
        <Link
          className="text-base font-medium bg-(--c2) rounded px-4 py-2 active:scale-95"
          to="/"
        >
          Search
        </Link>
        <Link
          className="text-base font-medium bg-(--c2) rounded px-4 py-2 active:scale-95"
          to="/collection"
        >
          Collection
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
