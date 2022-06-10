import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { GithubContext } from "../Context/fetchData";

import { SearchedResult } from "../Components";

const SearchBar = () => {
  const [userName, setUserName] = useState("");

  const { pathname } = useLocation();

  const { searchGithubUser, error, isLoading, githubUser } =
    React.useContext(GithubContext);

  const handlerChange = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  // if user change the page, search bar will be cleared.
  useEffect(() => {
    setUserName("");
  }, [pathname]);

  // fetching appropriate users by userName
  useEffect(() => {
    searchGithubUser(userName, 1);
  }, [userName]);

  return (
    <div className="input-group bg-primary w-100" style={{ maxWidth: "25rem" }}>
      <form
        id="search-autocomplete"
        className="form-outline  w-100"
        action=""
        onChange={(e) => handlerChange(e)}
      >
        <input
          type="search"
          defaultValue={userName}
          className="form-control"
          placeholder="Search..."
        />
      </form>
      {userName !== "" && (
        <SearchedResult
          error={error}
          isLoading={isLoading}
          githubUser={githubUser}
        />
      )}
    </div>
  );
};

export default SearchBar;
