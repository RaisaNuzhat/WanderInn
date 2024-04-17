import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [pass, setshowPass] = useState(false)
    const {
        register,
        handleSubmit,
        
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email,data.password)
        .then(
            result =>
            {
                console.log(result)
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
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
                                <input {...register("imageURL")} type="text" placeholder="image URL" className="input input-bordered" />

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