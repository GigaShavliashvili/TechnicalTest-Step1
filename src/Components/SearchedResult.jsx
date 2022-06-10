import React from "react";
import { Link } from "react-router-dom";

import PreLoader from "../Assets/preLoader";

const SearchedResult = ({ error, isLoading, githubUser }) => {
  //searching results
  return (
    <div
      className="p-2 position-fixed bg-light mt-5 w-100 shadow h-75 overflow-hidden overflow-scroll"
      style={{ zIndex: "1", maxWidth: "25rem" }}
    >
      {error.show ? (
        <>
          <p>{error.msg}</p>
        </>
      ) : (
        !isLoading && (
          <>
            {githubUser?.map((user) => {
              return (
                <Link
                  to={`user/${user?.login}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="text-dark border-bottom d-flex align-items-center 
                  justify-content-between
                  p-2"
                    key={user?.id}
                  >
                    <p>{user?.login}</p>
                    <img
                      src={user?.avatar_url}
                      alt=""
                      width="50px"
                      height="50px"
                    />
                  </div>
                </Link>
              );
            })}
          </>
        )
      )}
      {isLoading && <PreLoader />}
    </div>
  );
};

export default SearchedResult;
