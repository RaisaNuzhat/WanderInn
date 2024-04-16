import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);

    return (
        <div>
            <div className="navbar bg-[#233142]">
                <div className="flex-1">
                    <a className="btn btn-ghost lg:text-4xl md:text-xl text-xl font-Montserrat font-bold text-white">WanderInn</a>
                </div>
                <div className="flex-1 gap-2 justify-evenly">
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#f95959] lg:font-bold' : 'text-white lg:font-bold'}>Home</NavLink>
                    <NavLink to='/updateprofile' className={({ isActive }) => isActive ? 'text-[#f95959] lg:font-bold' : 'text-white lg:font-bold'}>Update Profile</NavLink>
                    <div>
                        {user?.email ? (
                            <div className="dropdown dropdown-end">




                               



                                <div className="tooltip tooltip-open tooltip-bottom" data-tip="hello">
                                <img className="w-10 rounded-full" alt="User Avatar" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
