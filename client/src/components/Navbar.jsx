import React from 'react'
import { GiHumanTarget } from "react-icons/gi";
import { CiBellOn } from "react-icons/ci";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (

        <div className="w-full  z-50  top-0 left-0 bg-white/30 backdrop-blur-xs sticky">
            <div className="h-16 px-[100px] py-[20px] flex justify-between items-center text-white">
                {/* Logo */}
                <h1 className="text-lg font-bold">Alumni</h1>

                {/* Navigation Links */}
                <nav className="flex items-center gap-x-6">
                    <Link to="/home" className="hover:text-blue-400">Home</Link>
                    <Link to="/" className="hover:text-blue-400">About Us</Link>
                    <Link to="/subscription" className="hover:text-blue-400">Subscription</Link>
                    <a href="#" className="hover:text-blue-400">Alumni Connections</a>

                    {/* Icons */}
                    <a href="#" className="hover:text-blue-400 text-2xl"><GiHumanTarget /></a>
                    <a href="#" className="hover:text-blue-400 text-2xl"><CiBellOn /></a>

                    {/* Login Button */}
                    <button className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Login</button>
                </nav>
            </div>

        </div>
    )
}

export default Navbar