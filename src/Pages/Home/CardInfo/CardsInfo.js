import React from 'react';
import Clock from '../../../assets/icons/clock.svg'
import Phone from '../../../assets/icons/phone.svg'
import Marker from '../../../assets/icons/marker.svg'
import CardInfo from './CardInfo';

const CardsInfo = () => {

    const cardData = [
        {
            id: 1,
            name: "Opening Hour",
            description: "Open at 9 am & close at 8 pm",
            icon: Clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: "Visit our location",
            description: "Road-4/Block-A/House-3, Mirpur-2",
            icon: Phone,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: "Contact us now",
            description: "+88010002000",
            icon: Marker,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]
    return (
        <div className='grid gap-6 mt-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {
                cardData.map(card => <CardInfo key={card.id} card={card} />)
            }
        </div>
    );
};

export default CardsInfo;