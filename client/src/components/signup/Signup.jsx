import React from 'react'
import { useForm } from 'react-hook-form';

const Signup = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className=' h-screen w-full flex items-center justify-center'>
            <form className=' w-[40%] h-[70%] bg-white'>
                <div className=' border-2 border-red-500'>
                    <label></label>
                    <input />
                </div>
                <div className=' border-2 border-red-500'>
                    <label></label>
                    <input />
                </div>
            </form>
        </div>
    )
}

export default Signup