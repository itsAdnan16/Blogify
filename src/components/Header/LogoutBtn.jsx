import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch();
    function logoutHandler(){
        authService.logout()
        .then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button 
    onClick={logoutHandler}
    className='block px-6 py-2 text-white
     hover:bg-[#ABC8C0] hover:text-black 
     rounded-full duration-200'
     >Logout</button>
  )
}

export default LogoutBtn