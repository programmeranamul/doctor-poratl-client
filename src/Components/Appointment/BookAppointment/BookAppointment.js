import React from "react";
import BookingForm from "../BookingForm/BookingForm";

const bookingData = [
  {
    id: 1,
    subject: "Teeth Orthodontics",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
  {
    id: 2,
    subject: "Cosmetic Dentistry",
    visitingHour: "10:50 AM - 11:30 AM",
    totalSpace: 10,
  },
  {
    id: 3,
    subject: "Teeth Cleaning",
    visitingHour: "5:00 PM - 6:00 PM",
    totalSpace: 10,
  },
  {
    id: 4,
    subject: "Cavity Protection",
    visitingHour: "7:00 AM - 8:30 AM",
    totalSpace: 10,
  },
  {
    id: 5,
    subject: "Teeth Orthodontics",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
  {
    id: 6,
    subject: "Teeth Orthodontics",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
];

const BookAppointment = ({ selectedDate }) => {
  return (
    <section className="py-5 container">
      <h3 className="text-center custom-color">
        Available Appointments on {selectedDate.toDateString()}
      </h3>
      <div className="row mt-5">
        {
          bookingData.map(booking => 
          <BookingForm key={booking.id} booking={booking} selectedDate={selectedDate} />
        )
        }
      </div>
    </section>
  );
};

export default BookAppointment;
