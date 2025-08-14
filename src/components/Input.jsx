import React, { useId } from 'react'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Input = React.forwardRef(({
    label,
    type = 'text',
    className = "",
    error,
    ...props
}, ref) => {
    const id = useId();
    const [visible, setVisible] = useState(false);

    const isPasswordType = type === 'password';
    // console.log(isPasswordType);
    return (
        <div className='w-full'>
            {label && <label
                className='inline-block mb-1 pl-1'
                htmlFor={id}>
                {label}
            </label>
            }
            <div className='relative'>
            <input
                type={isPasswordType && visible ? 'text' : type}
                className={`px-3 py-2 rounded-lg bg-[#DAF7DC] text-black outline-none
             duration-200 border border-gray-200 w-full
             ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
            {error && <p className="text-red-600 text-sm mt-1">{error.message}</p>}
            { isPasswordType && (
                <button
                    type="button"
                    onClick={() => setVisible((prev) => !prev)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    tabIndex={-1} // avoid interfering with form navigation
                >
                    {visible ? <FaEyeSlash /> : <FaEye />}
                </button>
             )} 
             </div>
        </div>)
})
export default Input