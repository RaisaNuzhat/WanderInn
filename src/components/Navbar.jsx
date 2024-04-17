import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);
   console.log(user)
    return (
        <div>
            <div className="navbar bg-[#233142]">
                <div className="flex-1">
                    <a className="btn btn-ghost lg:text-4xl md:text-xl text-xl font-Montserrat font-bold text-white">WanderInn</a>
                </div>
                <div className="flex-1 gap-2 justify-evenly">
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#f95959] lg:font-bold' : 'text-white lg:font-bold'}>Home</NavLink>
                    <NavLink to='/updateprofile' className={({ isActive }) => isActive ? 'text-[#f95959] lg:font-bold' : 'text-white lg:font-bold'}>Update Profile</NavLink>
                    <NavLink to='/booking' className={({ isActive }) => isActive ? 'text-[#f95959] lg:font-bold' : 'text-white lg:font-bold'}>Bookings</NavLink>
                    <div className="flex items-center justify-evenly">
                        {user?.email ? (
                            <div className="flex items-center justify-evenly gap-4">
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/sVJ3S81/cat-551554-1280.jpg" />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                {user.displayName}

                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>
                                <button onClick={logOut} className="btn bg-[#f95959] text-white border-none">Log Out</button>
                            </div>
                        ) : (
                            <Link to='/login' className="btn bg-[#f95959] text-white border-none">Log In</Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;