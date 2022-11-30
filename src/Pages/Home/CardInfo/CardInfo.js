import React from 'react';

const CardInfo = ({ card }) => {
    const { icon, name, description, bgClass } = card;
    return (
        <div className={`card md:card-side ${bgClass} text-white p-6 shadow-xl`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default CardInfo;