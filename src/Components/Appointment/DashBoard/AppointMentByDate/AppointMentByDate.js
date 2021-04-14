import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointMentByDate = ({ appointments }) => {
    return (
        <div>
            <h3 className="text-center custom-color">Appointmets</h3>
            {
                appointments.length ? <AppointmentShortList appointments={appointments} /> : <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }

        </div>
    );
};

export default AppointMentByDate;