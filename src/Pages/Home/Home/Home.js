import React from 'react';
import Banner from '../Banner/Banner';
import CardsInfo from '../CardInfo/CardsInfo';
import Exception from '../Exception/Exception';
import MakeAppointment from '../MakeAppoinment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <CardsInfo />
            <Services />
            <Exception />
            <MakeAppointment />
            <Testimonial />
        </div>
    );
};

export default Home;