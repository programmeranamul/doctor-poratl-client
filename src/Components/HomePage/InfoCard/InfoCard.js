import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InfoCard.css";


const InfoCard = ({ info }) => {
  return (
    <div className="col-md-4 d-flex text-white px-2">
      <div className={`d-flex bg-info-${info.background} px-2 py-3 w-100 align-items-center`}>
        <div>
          <FontAwesomeIcon icon={info.icon} className="info-icon mr-3" />
        </div>
        <div>
          <h5>{info.title}</h5>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
