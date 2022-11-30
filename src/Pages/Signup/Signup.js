import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast'
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/UseToken';


const Signup = () => {
    const { createUser, updateUser } = useContext(AuthContext)

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signUpError, setSignUpError] = useState('');

    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/')
    }


    const handleSignup = data => {
        console.log(data)
        setSignUpError('')
        const name = data.name;
        const email = data.email;
        const password = data.password;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast('User created successfully!')
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(name, email)
                    })
                    .catch(err => console.error(err))
                console.log(user)
            })
            .catch(err => {
                console.error(err)
                setSignUpError(err.message)

            })
    }

    const saveUser = (name, email) => {
        const user = { name, email };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>

                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span> </label>
                        <input type="name" {...register("name", {
                            required: "Name is required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span> </label>
                        <input type="email" {...register("email", {
                            required: "Email is required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span> </label>
                        <input type="password" {...register("password", {
                            required: "Password address is required",
                            minLength: {
                                value: 6, message: "Password must be 6 character long",
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must have uppercase and special characters" }
                            }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent mt-5 w-full' value='Sign Up' type='submit' />
                    <div>
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </div>
                </form>
                <p className='text-center my-3'>Already have an account ? <Link className='text-secondary' to='/login'>Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;