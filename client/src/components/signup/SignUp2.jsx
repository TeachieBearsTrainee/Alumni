import React from 'react'
import { useForm } from 'react-hook-form';
import { useLocation } from "react-router-dom";
import axios from "axios"

const SignUp2 = () => {

    const location = useLocation();
    const responseData = location.state?.updatedData || {};
    // console.log(responseData)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const finalData = { ...responseData, ...data };
            // const url = "http://localhost:6001/api/v1/register";
            axios.post('http://localhost:6001/api/v1/register', finalData, {
                withCredentials: true
            })
                .then(response => console.log(response.data))
                .catch(error => console.error(error));
            alert("User signed in")
            // reset();
        }
        catch (errors) {
            console.log(errors)
        }
    }


    return (
        <div className=' w-full h-screen flex items-center justify-center'>
            <form onSubmit={handleSubmit(onSubmit)} className=' w-[40%] h-[60%] border-2 border-gray-700 rounded-xl flex flex-col'>
                <div className=' flex h-[90%]'>
                    <div className=' w-[50%] text-gray-300  m-2 flex flex-col justify-between py-[7%] px-[2%]'>
                        <div className=' w-full flex flex-col '>
                            <lable >Full Name</lable>
                            <input className=' bg-white h-10 text-gray-800' {...register("fullname",
                                {
                                    required: "please enter name",
                                    minLength: { value: 3, message: "minimum length is 3" },
                                    maxLength: { value: 50, message: "maximum length is 50" },
                                }
                            )}></input>
                            {errors.fullname ? <p className=' text-red-600'>{errors.fullname.message}</p> : ""}
                        </div>
                        <div className=' w-full flex flex-col '>
                            <lable>Profile Picture</lable>
                            <input className=' bg-white h-10 text-gray-800'{...register("profilePic",
                                {
                                    required: false,
                                }
                            )}></input>
                        </div>
                        <div className=' w-full flex flex-col '>
                            <lable>Branch</lable>
                            <input className=' bg-white h-10 text-gray-800' {...register("branch",
                                {
                                    required: "please enter branch",
                                }
                            )}></input>
                            {errors.branch ? <p className=' text-red-600'>{errors.branch.message}</p> : ""}
                        </div>
                        <div className=' w-full flex flex-col '>
                            <lable>Graduation Year</lable>
                            <input className=' bg-white h-10 text-gray-800'{...register("graduationYear",
                                {
                                    required: "please enter graduation year",
                                    // minLength: { value: 2000, message: "You graduated too early" },
                                    // maxLength: { value: 2100, message: "way too old" },

                                }
                            )}></input>
                            {errors.graduationYear ? <p className=' text-red-600'>{errors.graduationYear.message}</p> : ""}
                        </div>
                    </div>
                    <div className=' w-[50%] text-gray-300  m-2 flex flex-col justify-between py-[7%] px-[2%]'>
                        <div className=' w-full flex flex-col '>
                            <lable>Bio</lable>
                            <input className=' bg-white h-10 text-gray-800'{...register("bio",
                                {
                                    required: "please enter bio",
                                    maxLength: { value: 500, message: "maximum words - 500" },

                                }
                            )}></input>
                            {errors.bio ? <p className=' text-red-600'>{errors.bio.message}</p> : ""}
                        </div>
                        <div className=' w-full flex flex-col '>
                            <lable>Degree</lable>
                            <input className=' bg-white h-10 text-gray-800'{...register("degree",
                                {
                                    required: false,
                                }
                            )}></input>
                            {errors.degree ? <p className=' text-red-600'>{errors.degree.message}</p> : ""}
                        </div>
                        <div className=' w-full flex flex-col '>
                            <lable>Graduation Certificate</lable>
                            <input className=' bg-white h-10 text-gray-800'{...register("graduationCertificate",
                                {
                                    required: false,
                                }
                            )}></input>
                            {errors.graduationCertificate ? <p className=' text-red-600'>{errors.graduationCertificate.message}</p> : ""}
                        </div>
                        <div className=' w-full flex flex-col '>
                            <lable>City</lable>
                            <input className=' bg-white h-10 text-gray-800'{...register("city",
                                {
                                    required: false,
                                }
                            )}></input>
                        </div>
                    </div>
                </div>
                <button className=' self-center text-white w-fit mb-6.5 px-4 py-2 rounded-xl border-2 border-gray-600'>Submit</button>
            </form>
        </div>
    )
}

export default SignUp2