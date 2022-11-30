import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/UseToken';

const Login = () => {

    const { login } = useContext(AuthContext)

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [logInError, setLogInError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true })
    }

    const handleLogin = (data) => {
        console.log(data)
        setLogInError('')
        const email = data.email;
        const password = data.password;

        login(email, password)
            .then(result => {
                const user = result.user;
                setLoginUserEmail(email)

            })
            .catch(err => {
                console.error(err.message)
                setLogInError(err.message)
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span> </label>
                        <input type="email"
                            {...register("email", {
                                required: "Email address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span> </label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters or longer" }
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text"><small>Forgot password? </small></span> </label>
                    </div>
                    <input className='btn btn-accent w-full' value='Login' type='submit' />
                    <div>
                        {logInError && <p className='text-red-600'>{logInError}</p>}
                    </div>
                </form>
                <p className='text-center my-3'>New to doctors portal ? <Link className='text-secondary' to='/signup'>Create account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;