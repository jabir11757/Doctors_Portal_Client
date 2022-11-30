import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../../context/AuthProvider';
import toast from 'react-hot-toast';


const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { slots, name: treatmentName, price } = treatment; // treatment is different name of appointment options 
    const { user } = useContext(AuthContext);
    const date = format(selectedDate, 'PP');

    const handleBook = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
            price

        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('Your booking confirmed')
                    refetch()
                }
                else {
                    toast.error(data.message)
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBook} className='grid grid-cols-1 gap-3 mt-10'>
                        <input disabled type="text" value={date} className="input w-full input-bordered " />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, index) => <option key={index} value={slot} selected>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" disabled defaultValue={user?.displayName} placeholder="Your name" className="input w-full input-bordered" />
                        <input name='email' type="email" disabled defaultValue={user?.email} placeholder="Your email" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone number" className="input w-full input-bordered" />
                        <input className='btn btn-accent w-full' type='submit' value='Submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;