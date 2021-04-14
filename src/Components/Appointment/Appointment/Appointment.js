import React, { useState } from 'react';
import Footer from '../../ShearedComponent/Footer/Footer';
import NavBar from '../../ShearedComponent/NavBar/NavBar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handelDateChange = (date) => {
        setSelectedDate(date)
      }
    return (
        <div>
           <NavBar />
           <AppointmentHeader handelDateChange={handelDateChange} selectedDate={selectedDate} />
           <BookAppointment selectedDate={selectedDate} />
           <Footer />
        </div>
    );
};

export default Appointment;