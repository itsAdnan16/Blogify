import React from 'react';
import {useDispatch} from 'react-redux';
import {logout} from '/../../store/authSlice.js'
import authService  from '../../appwrite/auth';

function LogoutBtn(){

    const dispatch = useDispatch();

    const LogoutHansler = ()=>{
        authService.logout()
        .then(()=>{
                dispatch(logout())
        } )
        //you need to implement catch part here by yourself
    }
    return (
        <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={LogoutHansler}>
                Logout

        </button>
    )
}

export default LogoutBtn