import React, { useContext, useEffect, useState } from "react";
import AppointMentByDate from "../AppointMentByDate/AppointMentByDate";
import Sidebar from "../SideBar/Sidebar";
import "./DashBoard.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Header from "../../../HomePage/Header/Header";
import { userContext } from "../../../../App";


const DashBoard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const [logedInUser, setLogedInUser] = useContext(userContext)
 

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
      fetch('https://lit-river-87243.herokuapp.com/appointsByDate', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ date: selectedDate, email :logedInUser.email })
      })
          .then(res => res.json())
          .then(data => setAppointments(data))
  }, [selectedDate])

  return (
    <main className="deshboard-page">
    
      <div className="row container-fluid">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-5 d-flex align-content-center justify-content-center">
          <Calendar onChange={handleDateChange} value={new Date()} className="border-0 shadow-lg" />
        </div>
        <div className="col-md-5">
          <AppointMentByDate appointments={appointments}/>
        </div>
      </div>
    </main>
  );
};

export default DashBoard;
