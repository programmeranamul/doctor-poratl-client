import React from 'react';
import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';

const infoData = [
    {
        "title" : "Opening Hours",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing!",
        "background" : "primary",
        "icon" : faClock
    },
    {
        "title" : "Visit Our Location",
        "description" : "Sundarjong, Gaibandha, Bangladesh",
        "icon" : faMapMarkerAlt,
        "background" : "secondary"
    },
    {
        "title" : "Contact us now",
        "description" : "+880 1717 598 323",
        "background" : "primary",
        "icon" : faPhoneAlt
    }
]

const BussnessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75\">
            {
                infoData.map((info, index )=> <InfoCard info={info} key={index} />)
            }
            </div>
        </section>
    );
};

export default BussnessInfo;