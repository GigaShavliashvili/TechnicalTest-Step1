import React from "react";
import { SearchBar } from "./index";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className=" d-flex p-2 shadow bg-light justify-content-between gap-3 align-items-center fixed-top w-100 ">
      <SearchBar />
      <Link to="/">
        <h4 role="button">Home</h4>
      </Link>
    </div>
  );
};

export default Header;
