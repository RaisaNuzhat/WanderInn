import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [pass, setshowPass] = useState(false)
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('')
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    //navigation system
    const location = useLocation();
    const navigate = useNavigate();
    //console.log(location)
    const from = location?.state || "/"

    const onSubmit = (data) => {
        console.log(data)
        const { email, password, fullName, image } = data;
        setRegisterError('')
        setSuccess('')
        if (password.length < 6) {
            setRegisterError('password should be at least 6 characters long')
            return;
        }
        else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
            setRegisterError("Password should have at least one uppercase and one lowercase letter.");
            return;
        }
        createUser(email, password)
            .then(
                () => {
                    updateUserProfile(fullName, image) //updateprofile

                        .then(
                            () => {
                                setSuccess("Congratulations! registration successfull!")
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Registration Successful!',
                                    text: success,
                                }).then(() => {
                                    navigate(from);
                                });
                            }
                        )

                }
            )
            .catch(
                error => {
                    console.error(error)
                    setRegisterError(error.message)
                    Swal.fire({
                        icon: 'error',
                        title: 'Registration Error',
                        text: registerError,
                    });
                }
            )
    }
    return (
        <div>
            <Helmet>
                <title>
                    WanderInn|Register
                </title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Register for access to exclusive features and personalized experiences on WanderInn. <br /> Create your account today to unlock a world of possibilities</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input  {...register("fullName", { required: true })} type="text" placeholder="name" className="input input-bordered" />
                                {errors.fullName && <span className="text-red-500">This field is required</span>}

                            </div>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input {...register("image")} type="text" placeholder="image URL" className="input input-bordered" />

                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input  {...register("password", { required: true })} type={pass ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                                <span onClick={() => setshowPass(!pass)} className='cursor-pointer absolute right-5 top-2'>
                                    {
                                        pass ? <FaEye /> : <FaEyeSlash />
                                    }
                                </span>
                                {errors.password && <span className="text-red-500">This field is required</span>}
                                {
                                    registerError &&
                                    <p className='text-[14px] font-medium flex justify-center items-center container text-center text-red-500'>
                                        {registerError}
                                    </p>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#f95959] text-white">Register</button>
                            </div>

                            <div className="flex justify-center items-center">
                                <Link to='/login' href="#" className="label-text-alt link link-hover font-medium text-[18px]">Have an account? Sign In Here</Link>



                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
