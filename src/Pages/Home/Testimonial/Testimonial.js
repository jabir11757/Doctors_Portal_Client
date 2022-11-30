import React from 'react';
import Quote from '../../../assets/icons/quote.svg'
import People1 from '../../../assets/images/people1.png'
import People2 from '../../../assets/images/people2.png'
import People3 from '../../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Harry',
            feedback: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: People1
        },
        {
            _id: 2,
            name: 'Winson Harry',
            feedback: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: People1
        },
        {
            _id: 3,
            name: 'Winson Harry',
            feedback: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: People1
        }
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='lg:w-48 w-24' src={Quote} alt='' />
                </figure>
            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review key={review._id} review={review} />)
                }
            </div>
        </section>
    );
};

export default Testimonial;