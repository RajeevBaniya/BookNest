import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logOut} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    const handleLogout = () => {
        logOut().then(() => {
            // Sign-out successful.
            alert('Sign-out successful!');
            navigate(from, {replace: true})
          }).catch((error) => {
            // An error happened.
          });          
    }
  return (
    <div className='h-screen bg-gradient-to-r from-teal-200 to-cyan-400 flex items-center justify-center'>
      <p className='text-black underline text-3xl mb-14 font-semibold items-center'>Are you sure ? You will no longer be logged in</p>
        <button className='bg-red-600 hover:bg-red-700 px-8 py-2 text-white rounded absolute mt-9' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout