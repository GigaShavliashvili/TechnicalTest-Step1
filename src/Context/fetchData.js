import React, { useState } from "react";
import { USER__API, PER__PAGE } from "../Utils";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState([]);

  const [githubUserDetail, setGithubUserDetail] = useState([]);

  const [githubUserRepo, setGithubUserRepo] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);
  // error
  const [error, setError] = useState({ show: false, msg: "" });

  const toggleError = (show = false, msg = "") => {
    setError({ show, msg });
  };

  // Fetch Users During Seraching

  const searchGithubUser = (userName, page) => {
    console.log(userName);
    if (userName === "") {
      //if username has not a value search bar will be cleard.
      setGithubUser([]);
    } else {
      setIsLoading(true);

      fetch(
        `${USER__API}/search/users?q=${userName}&page=${page}&per_page=${PER__PAGE}`,
        {
          method: "GET",

          /*     headers: {
            Authorization: `token ${process.env.REACT_APP_USER_TOKEN}`,
          }, */
        }
      )
        .then((res) => res.json())
        .then((json) => {
          if (json.items.length !== 0) {
            setGithubUser(json.items);
          } else {
            toggleError(true, "there is no user with that username");
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  // Fetch User Detail for user Page

  const FetchGithubUserDetail = (userName) => {
    setIsLoadingDetail(true);
    fetch(`${USER__API}/users/${userName}`, {
      method: "GET",
      /*      headers: {
        Authorization: `token ${process.env.REACT_APP_USER_TOKEN}`,
      }, */
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.length !== 0) {
          setGithubUserDetail(json);
        } else {
          toggleError(true, "there is no user with that username");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoadingDetail(false);
      });
  };

  //fetch user's Repositories

  const FetchGithubUserRepo = (userName) => {
    fetch(`${USER__API}/users/${userName}/repos`, {
      method: "GET",
      /*     headers: {
        Authorization: `token ${process.env.REACT_APP_USER_TOKEN}`,
      }, */
    })
      .then((res) => res.json())
      .then((json) => {
        setGithubUserRepo(json);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        searchGithubUser,

        githubUserDetail,
        FetchGithubUserDetail,

        githubUserRepo,
        FetchGithubUserRepo,

        isLoading,
        isLoadingDetail,
        error,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
