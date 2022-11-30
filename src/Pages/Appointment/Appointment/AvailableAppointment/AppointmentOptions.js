import React from 'react';

const AppointmentOptions = ({ appointmentOptions, setTreatment }) => {
    const { slots, name, price } = appointmentOptions;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-center text-2xl text-secondary font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label onClick={() => setTreatment(appointmentOptions)} disabled={slots.length === 0} htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;