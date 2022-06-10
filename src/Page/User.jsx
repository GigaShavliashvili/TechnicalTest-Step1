import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { GithubContext } from "../Context/fetchData";

import { UserCard, Repositors } from "../Components";

import PreLoader from "../Assets/preLoader";
const User = () => {
  const { userName } = useParams();

  const {
    FetchGithubUserDetail,
    githubUserDetail,

    FetchGithubUserRepo,
    githubUserRepo,

    error,
    isLoadingDetail,
  } = React.useContext(GithubContext);

  // Fetch userInformation and repositories
  useEffect(() => {
    FetchGithubUserDetail(userName);
    FetchGithubUserRepo(userName);
  }, [userName]);

  return (
    <div className="container mt-5 pt-2">
      {!error.show ? (
        !isLoadingDetail ? (
          <div className="row w-100  m-0">
            <div className="col-lg-4">
              <p className="text-center display-6 ">User Info</p>
              <UserCard user={githubUserDetail} />
            </div>
            <div className="col-lg-8">
              <p className="text-center display-6 ">Repositors</p>
              <div className="row gap-3 justify-content-center">
                {githubUserRepo.length > 0 ? (
                  githubUserRepo.slice(0, 6).map((repo) => {
                    return <Repositors key={repo.id} repo={repo} />;
                  })
                ) : (
                  <PreLoader />
                )}
              </div>
            </div>
          </div>
        ) : (
          <PreLoader />
        )
      ) : (
        <h2>{error.meg}</h2>
      )}
    </div>
  );
};

export default User;
