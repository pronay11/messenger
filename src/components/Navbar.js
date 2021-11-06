import React from 'react'
import { auth } from '../Config'
import { ContextProvider } from '../context/ContextProvider'
const Navbar = () => {
    const {register,user,loader,logout} =React.useContext(ContextProvider);
    const userRegister=()=>{
        register();
    }
    const userLogout=()=>{
        logout();
    }
    const checkUser=()=>{
        return !loader ? (
            user?(
            <div className="Navbar__links">
                <li><span className="Navbar__img"> <img src={user.photoURL} alt=""></img></span></li>
                <li><button className="Navbar__btn" onClick={userLogout}>Logout</button></li>
            </div>
            ):(
             <div className="Navbar__links">
                <li><button className="Navbar__btn" onClick={userRegister}>Register with Google</button></li>
             </div>

            )
        ):(
            "..."
        )

    };
    return (
        <div className="Navbar">
           <div className="Navbar__container">
               <div className="Navbar__logo">Messenger</div>
              {checkUser()}
           </div>
        </div>
    )
}

export default Navbar
