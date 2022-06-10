import React from "react";
const UserCard = ({ user }) => {
  return (
    <div key={user.id} className="p-2 col-lg-3 col-md-4 col-sm-6  w-100">
      <div className="card w-100 h-100 shadow">
        <img src={user.avatar_url} alt="" />
        <div className="card-body fs-7">
          <h5 className=" h5 fw-light  text-primary">
            {user.login} <span className="text-muted fw-bold">/</span>{" "}
            {user.name}
          </h5>
          <div className="row">
            <p className=" text-secondary mt-2  mb-0">Organization</p>
            <div className="mt-1">Zero Organization</div>
            <p className=" text-secondary mt-2  mb-0">Github</p>
            <a href={`${user.html_url}`}>{user.html_url}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
