import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext)
    const error = useRouteError();
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <p className='text-red-500'>Something went wrong!</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h4 className='text-3xl'>Please <Link><button className='btn btn-outline' onClick={handleLogOut}>Sign Out</button></Link></h4>
        </div>
    );
};

export default DisplayError;