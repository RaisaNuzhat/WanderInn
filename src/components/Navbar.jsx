
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div >
            <div className="navbar bg-[#233142]">
                <div className="flex-1">
                    <a className="btn btn-ghost lg:text-4xl md:text-xl text-xl font-Montserrat font-bold text-white">WanderInn</a>
                </div>
                <div className="flex-1 gap-2 justify-evenly">
                <NavLink to='/' className={({isActive})=>isActive  ? 'text-[#f95959] lg:font-bold  ':' text-white lg:font-bold '}>Home</NavLink>
                <NavLink to='/updateprofile' className={({isActive})=>isActive  ? 'text-[#f95959] lg:font-bold  ':' text-white lg:font-bold '}>Update Profile</NavLink>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    username
                                    
                                </a>
                            </li>
                            
                            
                        </ul>
                    </div>
                    <Link  to='/login'  className="btn bg-[#f95959] text-white border-none">Log In</Link>
                    <Link  to=''  className="btn bg-[#f95959] text-white border-none">Log Out</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
