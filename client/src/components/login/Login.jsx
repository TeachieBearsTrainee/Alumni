import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  return (
    <>
      {/* Background Video */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <video
          src="/images/loginanimation.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>

      {/* Foreground Content */}
      <div className="flex h-screen relative">
        {/* Left Image Section */}
        <div className="flex justify-center items-center ml-10">
          <img
            src="/images/login.png"
            alt="login image"
            className="w-[721px] h-[721px]"
          />
        </div>

        {/* Login Form Section */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="text-white w-auto h-4/5">
            {/* Welcome Text */}
            <div className="flex flex-col items-center text-6xl font-medium gap-1">
              <h1 className="text-white">Hello</h1>
              <h1>Welcome Back</h1>
            </div>

            {/* Sign-in Heading */}
            <div className="flex flex-col items-center text-3xl gap-3 mt-10">
              <h2>Sign In</h2>
            </div>

            {/* Login Form */}
            <form>
              {/* Email Input */}
              <div className="flex flex-col mt-5">
                <label htmlFor="email">Email:</label>
                <div className="relative w-full bg-[#262626] flex h-12 mt-3 rounded-[0.3rem]">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl text-white">
                    <MdOutlineMail />
                  </span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email Address"
                    required
                    className="pl-10 bg-transparent text-white w-full py-2 px-3"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="flex flex-col mt-4">
                <label htmlFor="password">Password:</label>
                <div className="relative w-full bg-[#262626] flex h-12 mt-3 rounded-[0.3rem]">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl text-white">
                    <RiLockPasswordLine />
                  </span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    required
                    className="pl-10 bg-transparent text-white w-full py-2 px-3"
                  />
                </div>
              </div>

              {/* Forgot Password */}
              <h4 className="flex justify-end py-4">Forgot password?</h4>

              {/* Submit Button */}
              <button className="bg-[#262626] text-white w-full py-2 px-3 h-12 rounded-[0.3rem]">
                Submit
              </button>
            </form>

            {/* Sign-up Option */}
            <div className="text-white flex flex-col justify-center items-center mt-7">
              <h1>Don't have an account yet?</h1>
              <h1>Sign Up</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
