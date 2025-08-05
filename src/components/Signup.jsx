import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm()

    const signup = async (data) => {
        setError('')
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className='flex items-center justify-center'>
            <div className={`mx-auto w-full max-w-lg
            bg-[#ABC8C0] rounded-xl p-10 border-black/10`}>
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-[50px]'>
                        <Logo width='100%' />
                    </span>
                </div>
                <h2 className='text-center text-2xl
                    font-bold leading-tight'>
                    Sign up to create account
                </h2>
                <p className='mt-2 text-center text-base
                    text-black/60'>
                    Already have an account?&nbsp;
                    <Link
                        to='/login'
                        className='font-medium text-primary
                        transition-all duration-200
                        hover:underline'
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className='text-red-600 mt-8
                             text-center'>{error}</p>}

                <form onSubmit={handleSubmit(signup)}>
                    <div className='space-y-5'>
                        <Input 
                            label = 'Full Name: '
                            placeholder = "Enter your full name"
                            {...register("name",{
                                required:'Name is required',
                            })}
                            error={errors.name}
                            />
                            
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email",{
                                required: 'Email is required',
                                validate:{
                                    matchPattern: (value) =>
                                        /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                            error={errors.email}
                            />
                        <Input 
                            label="Password: "
                            placeholder="password..."
                            type='password'
                            {...register("password", {
                                required: 'Password is required',
                                validate: {
                                    matchPattern: (val) => {
                                        if (!val) return "Password is required";
                                        if (val.length < 8) return "Must be at least 8 characters";
                                        if (!/[A-Z]/.test(val)) return "Must contain at least one uppercase letter";
                                        if (!/[a-z]/.test(val)) return "Must contain at least one lowercase letter";
                                        if (!/\d/.test(val)) return "Must contain at least one number";
                                        if (/\s/.test(val)) return "No spaces allowed";
                                        return true;
                                    }

                                }
                            })}
                            error={errors.password}
                            />
                            <Button
                            type="submit"
                            className="w-full"
                            >Create Account</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Signup