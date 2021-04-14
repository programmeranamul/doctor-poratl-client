import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Doctor = ({ doctor }) => {
  const { name, number, img } = doctor;
  return (
    <div className="col-md-4 px-4">
      <div className="card ">
        <div className="card-body text-center">
          {
            doctor.image ? <img src={`data:image/png;base64,${doctor.image.img}`} className="card-img" /> : <img src={`https://lit-river-87243.herokuapp.com/${img}`} alt={name} className="card-img" />
          }

          <h5>{name}</h5>
          <p>
            <FontAwesomeIcon className="text-primary mr-2" icon={faPhoneAlt} />
            {number}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
