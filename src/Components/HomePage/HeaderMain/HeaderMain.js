import React from "react";
import chair from "../../../images/chair.png";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <main className="row header-main">
      <div className="col-md-4 offset-md-1">
        <h2>
          Your New Smile <br /> Start Here
        </h2>
        <p className="text-secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
          repellat ipsa fugit maxime omnis vel?
        </p>
        <button className="btn btn-primary">GET APPOINTMENT</button>
      </div>
      <div className="col-md-6">
        <img src={chair} alt="Chair" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;

