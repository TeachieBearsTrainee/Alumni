import React from 'react'
import { SlSocialFacebook } from "react-icons/sl";
import { PiGithubLogo } from "react-icons/pi";
import { PiTelegramLogoLight } from "react-icons/pi";
import { BiLogoInstagram } from "react-icons/bi";
import { SiFigma } from "react-icons/si";

const Footer = () => {
    return (
        <div className=' relative inset-x-0 bottom-0 h-[8%]'>
            <div className=' flex flex-col items-center  inset-x-0 bottom-0 w-full h-[44vh] bg-gradient-to-r from-[#10393B] to-[#13686C] '>
                <div className=' pl-[5%] pr-[5%] absolute -top-15 w-[87%] h-[16vh] flex bg-gradient-to-r from-[#6adabc] to-[#c3d889] justify-between items-center rounded-lg'>
                    <h1 className=' font-medium text-lg'>Take a Good Design Today</h1>
                    <div className=' flex gap-4'>
                        <p className=' content-center text-base'>Lets do it! -</p>
                        <button className=' px-8 py-2 text-white text-sm rounded-4xl bg-gradient-to-r from-[#C15A01] to-[#F4892C] '>Get Started</button>
                    </div>
                </div>
                <div className='flex justify-between text-white items-center w-full pl-[6%] pr-[6%] mt-[4.5%]'>
                    <div className=' flex gap-13 items-center'>
                        <h1 className=' text-4xl'>Alumini</h1>
                        <p className=' w-[20%] font-thin text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ex id libero nobis natus nulla minus ducimus</p>
                        <div className=' flex flex-col gap-3 font-thin text-base'>
                            <p className=' font-bold mb-2.5 mt-9'>Company</p>
                            <p className=' text-xs'>About Us</p>
                            <p className=' text-xs'>Careers</p>
                            <p className=' text-xs'>FAQs</p>
                            <p className=' text-xs'>Teams</p>
                            <p className=' text-xs'>Contact Us</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 absolute left-270 bottom-18'>
                        <div className='  '>
                            <p className=' pb-1.5 font-bold'>lets do it!</p>
                            <div className=' flex'>
                                <SlSocialFacebook className=' text-2xl mr-3.5 font-thin' />
                                <PiGithubLogo className=' text-2xl mr-3.5 font-thin' />
                                <PiTelegramLogoLight className=' text-2xl mr-3.5 font-thin' />
                                <BiLogoInstagram className=' text-2xl mr-3.5 font-thin' />
                                <SiFigma className=' text-2xl mr-3.5 font-thin' />
                            </div>


                        </div>
                        <p className=' font-medium'>Subscribe</p>
                        <p className=' w-[80%] font-light text-sm'>Subscribe to stay tuned for new web design and latest updates. Lets do it!</p>
                        <span className=' w-[100%]'>
                            <input placeholder=' Enter your email address' className=' h-6  bg-white text-gray-400 text-sm w-[55%] font-light' />
                            <button className=' w-[25%] h-6 bg-gradient-to-r from-[#C15A01] to-[#F4892C] text-xs font-light'>Subscribe</button>
                        </span>
                    </div>
                </div>
                <div className=' border-t-1  border-[#36848d] flex w-full bottom-0 absolute  justify-between pl-[6%] pr-[6%] h-[10%] pt-3 '>
                    <div className=' flex text-white font-thin text-xs gap-10'>
                        <p>Private Policy</p>
                        <p>Terms of Use</p>
                        <p>Sales and Refunds</p>
                        <p>Legal</p>
                        <p>Site Map</p>
                    </div>
                    <p className=' text-gray-200 font-thin text-xs'>2021 All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer