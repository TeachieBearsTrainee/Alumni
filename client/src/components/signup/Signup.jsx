import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        const updatedData = { ...data };
        delete updatedData.password2;
        console.log(updatedData)
        navigate("/signup2", { state: { updatedData: updatedData } });
    }

    return (
        <div className=' text-gray-700 h-screen w-full flex items-center justify-center'>
            <form className='  flex flex-col justify-between items-center w-[30%] h-[45%] rounded-2xl border-2 border-gray-700 px-9.5 py-6'
                onSubmit={handleSubmit(onSubmit)}>
                <div className=' w-full '>
                    <label className=' text-white'>Email: </label>
                    <input type='email' className={errors.email ? 'border-2 border-red-600 w-full bg-white' : "w-full bg-white"}  {...register("email",
                        {
                            required: "please enter email",
                            minLength: { value: 5, message: "minumum length is 5" },
                            // maxLength: { value: 40, message: "maximum length is 40" },
                        })}
                    />
                    {errors.email && <p className=' text-sm font-normal text-red-600'>{errors.email.message}</p>}
                </div>
                <br></br>
                <div className='w-full '>
                    <label className=' text-white'>Password: </label>
                    <input className={errors.password ? 'border-2 border-red-600 w-full bg-white' : "w-full bg-white"}   {...register("password",
                        {
                            required: "please enter password",
                            minLength: { value: 8, message: "minumum length is 8" },
                            maxLength: { value: 12, message: "maximum length is 12" },
                        })} />
                    {errors.password && <p className='text-sm font-normal text-red-600'>{errors.password.message}</p>}
                </div>
                <br></br>
                <div className='w-full '>
                    <label className=' text-white'>Confirm Password </label>
                    <input className={errors.password2 ? 'border-2 border-red-600 w-full bg-white' : "w-full bg-white"}  {...register("password2", {
                        required: "please enter password",
                        minLength: { value: 8, message: "minumum length is 8" },
                        maxLength: { value: 18, message: "maximum length is 18" },
                        validate: (value) =>
                            value === watch("password") || "password missedmatched",
                    })} />
                    {errors.password2 && <p className='text-sm font-normal text-red-600'>{errors.password2.message}</p>}
                    {/* {"password" == password2 ? <p>password not matching</p> : <p>ok</p>} */}
                </div>
                <button type='submit' className=' p-3 bg-[#DDEB9D] text-gray-500 rounded-xl'>Next</button>
            </form >
        </div >
    )
}

export default Signup