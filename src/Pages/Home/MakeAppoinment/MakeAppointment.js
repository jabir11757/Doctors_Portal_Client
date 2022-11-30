import React from 'react';
import Appointment from '../../../assets/images/appointment.png'
import Doctor from '../../../assets/images/doctor.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-32' style={{ background: `url(${Appointment})` }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={Doctor} alt='' className="-mt-32 hidden md:block rounded-lg lg:w-1/2 shadow-2xl" />
                    <div>
                        <h4 className='text-lg text-primary font-bold'>Appointment</h4>
                        <h1 className="text-4xl font-3xl text-white font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;