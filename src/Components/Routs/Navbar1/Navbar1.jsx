import { NavLink, useNavigate } from "react-router-dom";
import './Navber1.css'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar1 = () => {
    const { UserLogOut,user } = useContext(AuthContext);

    const hendlelogout = () => {
        UserLogOut()
        .then(result=>{
            console.log(result)
        })
        .then(error=>{
            console.log(error)
        })
    }
    const Links = <div>
        <NavLink className="mr-4 text-base font-normal" to="/" >Home</NavLink>
        <NavLink className="mr-4 text-base font-normal" to="/donation" >Donation</NavLink>
        <NavLink className="text_base font-normal mr-4" to="/statistics" >Statistics</NavLink>
       
        {user?<button className="btn btn-sm" onClick={hendlelogout}>Logout</button>:<>
        <NavLink className="mr-4 text-base font-normal" to="/login" >Login</NavLink>
        <NavLink className=" text-base font-normal" to="/signup" >Signup</NavLink></>}
</div>
    return (
        <nav>
            <div className="navbar bg-base-100 flex justify-between py-5 shadow-md">
                <div className="navbar-start ml-1 md:ml-5">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content lg:hidden mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {/* {Links} */}
                            <NavLink to="/"><li>Home</li></NavLink>
                            <NavLink to="/donation"><li>Donation</li></NavLink>
                            <NavLink to="/statistics" ><li>Statistics</li></NavLink>
                        </ul>
                    </div>
                    <img className=" w-[200px] h-12  md:w-[252px] md:h-12" src="/Logo.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex mr-5 ">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar1;