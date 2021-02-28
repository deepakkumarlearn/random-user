import React from "react";

function RandomUser({ details }) {
  return (
    <div className="container">
      <div className="row" height="500" width="500">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <div className="card">
            <img
              src={details.picture?.large}
              className="rounded-circle"
              alt="..." style={{marginTop:-100, marginLeft:130}} height="100" width="100"
            />
            <div className="card-body">
              <h5 className="card-title text-secondary">{details.name?.first}</h5>
              <p className="card-text text-secondary">
              {details.phone}
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">{details.registered?.date}</small>
            </div>
            <a
              className="btn btn-success btn-large"
              href="http://localhost:3000/"
            >
              Reload
            </a>
          </div>
          
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}

export default RandomUser;
