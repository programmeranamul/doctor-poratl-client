import React, { useState } from "react";
import Calendar from "react-calendar";
import './AppointmentHeader.css'
import 'react-calendar/dist/Calendar.css';

import chair from "../../../images/chair.png";

const AppointmentHeader = ({handelDateChange, selectedDate}) => {
 
  return (
    <main className="row py-5">
      <div className="col-md-4 offset-md-1">
        <h2>Appointment</h2>
        <Calendar onChange={handelDateChange} value={selectedDate} className="shadow-lg border-0 mt-5"/>
      </div>
      <div className="col-md-6">
        <img src={chair} alt="Chair" className="img-fluid" />
      </div>
    </main>
  );
};

export default AppointmentHeader;

