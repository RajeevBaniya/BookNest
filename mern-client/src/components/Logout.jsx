import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logOut} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    
    useEffect(() => {
        // Automatically log out when the component mounts
        logOut().then(() => {
            // Sign-out successful.
            navigate(from, {replace: true})
          }).catch((error) => {
            // An error happened.
            console.error("Logout error:", error);
            navigate("/");
          });
    }, []);
    
    return (
        <div className='h-screen bg-gradient-to-r from-teal-200 to-cyan-400 flex items-center justify-center'>
            <p className='text-black text-3xl mb-14 font-semibold items-center'>Logging out...</p>
        </div>
    )
}

export default Logout
