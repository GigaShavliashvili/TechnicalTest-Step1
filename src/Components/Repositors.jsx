import React from "react";

const Repositors = ({ repo }) => {
  return (
    <div
      className="card p-2 col-lg-5 mt-1  shadow col-md-5 col "
      style={{ minWidth: "16.5rem" }}
    >
      <div
        className="card-body p-1 "
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <p className="text-success mb-0 text-end">{repo.visibility}</p>
        <h5 className="card-title fw-light mb-0 h6 text-primary">
          {repo.full_name}
        </h5>
        <p className="text-secondary fw-light mb-0">
          {typeof repo.description === "string"
            ? repo.description.substring(0, 60)
            : ""}
          ...
        </p>
        <div className="row mt-1 text-center">
          <div className="col text-secondary mb-0">
            forks: <span className="text-danger">{repo.forks}</span>
          </div>
          <div className="col text-secondary">
            watchers: <span className="text-danger">{repo.watchers}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repositors;
