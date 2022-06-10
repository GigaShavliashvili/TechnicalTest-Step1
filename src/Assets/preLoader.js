import React from "react";

const PreLoader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center h-100">
      <div
        className="spinner-border text-primary fs-1"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default PreLoader;
