import React from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const BookingForm = ({ booking,selectedDate }) => {
  const { subject, visitingHour, totalSpace } = booking;

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="col-md-4 mb-5">
      <div className="card text-center border-0 shadow p-3">
        <div className="card-body">
          <h4 className="card-title custom-color">{subject}</h4>
          <h5>{visitingHour}</h5>
          <p>{totalSpace} SPACES AVAILABLE</p>
          <button className="btn custom-button text-white font-weight-bold" onClick={openModal}>
            Book Appointment
          </button>
          <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} subject={subject} selectedDate={selectedDate}/>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
