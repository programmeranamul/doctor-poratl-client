import React from 'react';
import './ServicesDetails.css'

const ServicesDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center pt-3 pb-2 px-2">
            <img src={service.image} alt="service-image" className="service-image"/>
            <h5 className="my-3">{service.name}</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, error inventore quis corporis provident sint!</p>
        </div>
    );
};

export default ServicesDetails;