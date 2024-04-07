import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Authconfiguration/AuthConfiguration";

const NAvBar = () => {
  const {user,logOut} = useContext(AuthContext);
  const logout = () =>{
    logOut()
    .then()
    .catch(error=>{
      console.log(error.message)
    })
  }
    const links = 
    <>
    <li><NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "text-[#23BE0A] border border-[#23BE0A]"
                        : isPending
                        ? "pending"
                        : ""
                    } to={"./"}>Home</NavLink></li>
{
  user && <>
      <li><NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "text-[#23BE0A] border border-[#23BE0A]"
                        : isPending
                        ? "pending"
                        : ""
                    } to={"./listedbooks"}>Listed Books</NavLink></li>
    <li><NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "text-[#23BE0A] border border-[#23BE0A]"
                        : isPending
                        ? "pending"
                        : ""
                    } to={"./pagetoread"}>Pages to Read</NavLink></li>
  </>
}
    <li><NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "text-[#23BE0A] border border-[#23BE0A]"
                        : isPending
                        ? "pending"
                        : ""
                    } to={"./about"}>About</NavLink></li>
    <li><NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "text-[#23BE0A] border border-[#23BE0A]"
                        : isPending
                        ? "pending"
                        : ""
                    } to={"./contact"}>Contact</NavLink></li>
    </>
    return (
        <div className="mb-7 navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <Link to={'/'} className="btn btn-ghost lg:text-3xl lg:font-bold">BookVibe</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end md:navbar-end lg:navbar-end lg:flex lg:gap-4">
    {
      user ? <div className="flex items-center">
        <p>{user.email}</p>
        <p><button onClick={logout} className="btn bg-red-600 text-white text-[8px] lg:text-[14px]">Sign Out</button></p></div>
      : <Link to={'/login'}><a className="btn bg-[#23BE0A] text-white text-[8px] lg:text-[14px]">Sign In</a></Link>
    }
    <Link to={'/register'}><a className="btn bg-[#59C6D2] text-white text-[8px] lg:text-[14px]">Sign Up</a></Link>
  </div>
</div>
    );
};

export default NAvBar;