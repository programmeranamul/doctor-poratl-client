import React from 'react';
import doctor from '../../../images/doctor.png'
import './Appointment.css'

const Appointment = () => {
    return (
        <section className="my-5  appointment-section">
            <div className="row">
                <div className="col-md-5">
                    <img src={doctor} alt="Doctor Image"/>
                </div>
                <div className="col-md-7 py-5">
                    <h5 className="custom-color">APPOINTMENT</h5>
                    <h1 className="text-white my-4">Make an appointment <br/>Today</h1>
                    <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sunt tempora architecto reiciendis! Aperiam, voluptas.</p>
                    <button className="btn custom-button text-white mt-3">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default Appointment;