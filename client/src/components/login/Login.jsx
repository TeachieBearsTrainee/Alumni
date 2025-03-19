import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // const finalData = { ...responseData, ...data };
      // const url = "http://localhost:6001/api/v1/register";
      axios.post('http://localhost:6001/api/v1/login', data)
        .then(response => console.log(response.data))
        .catch(error => console.error(error));
      alert("User signed in")
      // reset();
      navigate("/");
    }
    catch (errors) {
      console.log(errors)
    }
  }

  return (
    <>

      <div className="flex h-screen justify-center items-center relative">

        <div className="w-1/2 flex items-center justify-center">
          <div className="text-white w-auto h-4/5">

            <div className="flex flex-col items-center text-6xl font-medium gap-1">
              <h1 className="text-white">Hello</h1>
              <h1>Welcome Back</h1>
            </div>


            <div className="flex flex-col items-center text-3xl gap-3 mt-10">
              <h2>Sign In</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" flex flex-col gap-7">
                <div className="flex flex-col gap-0.4">
                  <label>Email:</label>
                  <input type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email format",
                      },
                    })}
                    className={`w-full bg-[#262626] text-white h-12 mt-3 rounded-[0.3rem] px-3  
                    ${errors.email ? "border-red-500 border-2" : ""}`}
                    placeholder="Enter Email Address"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>


                <div className="flex flex-col gap-0.4">
                  <label>Password:</label>
                  <input
                    {...register("password", {
                      required: "password is required",

                    })}
                    className={`w-full h-12 mt-3 rounded-[0.3rem] px-3  
                    ${errors.password ? "border-red-500 border-2" : "bg-[#262626] text-white"}`}
                    placeholder="Enter Password"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>

                <input
                  type="submit" disabled={isSubmitting}
                  value={isSubmitting ? "Submitting" : "Submit"}
                  className="w-full bg-[#262626] flex h-12 mt-3 rounded-[0.3rem]"
                />
              </div>
            </form>
          </div>
        </div>
        <Link to="/signup"><button className=" text-white">Sign in</button></Link>
      </div>

    </>
  );
};

export default Login;
