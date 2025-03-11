import React from 'react'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutUs = () => {

    const boxRef1 = useRef();
    const boxRef2 = useRef();
    const boxRef3 = useRef();
    const boxRef4 = useRef();

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(boxRef1.current, {
            scrollTrigger: boxRef1.current,
            x: -1300,
            delay: 1,
            duration: 2,
            ease: "expo",
        })

        gsap.from(boxRef2.current, {
            scrollTrigger: boxRef2.current,
            x: 1400,
            delay: 1,
            duration: 2,
            ease: "expo"
        })

        gsap.from(boxRef3.current, {
            scrollTrigger: boxRef3.current,
            x: -1400,
            delay: 1,
            duration: 2,
            ease: "expo"
        })

        gsap.from(boxRef4.current, {
            scrollTrigger: boxRef4.current,
            x: 1400,
            delay: 1,
            duration: 1.5,
            ease: "expo"
        })
    })

    return (
        <div>
            <div className='  pb-[2%]  w-full h-700'>
                <div className=' flex flex-col items-center justify-center bg-[url(../public/images/aboutImage.jpg)] 
                                w-full h-[22%] bg-no-repeat bg-contain mb-[5%]'>
                    <div className=' w-[45%] flex flex-col justify-center items-center z-100 gap-5'>
                        <h1 className=' text-white text-[500%] font-bold' >About Us</h1>
                        <p className=' text-white text-center font-bold pl-[8%] pr-[8%]'>From preschool to pre-tertiary, our students enjoy fun,
                            interactive and relevant lessons and are empowered to think beyond the
                            confines of the classroom.</p>
                        <button className=' text-white bg-[#19575b] pt-1 pb-1 pl-5 pr-5 rounded-md font-medium'>See More</button>
                    </div>
                </div>
                <div className=' flex flex-col pl-[6%] pr-[6%]'>
                    <div className=' flex flex-col items-center gap-3'>
                        <h1 className=' text-white text-4xl font-bold'>
                            Preparing Students to Achieve Success
                        </h1>
                        <img src=" ../images/aboutUsUnderline-Photoroom.png" alt='underline' />
                    </div>
                    <div ref={boxRef1} className=' flex mt-[3%] items-center'>
                        <div className=' flex flex-col text-white gap-3 w-[72%]'>
                            <h1 className=' font-bold text-3xl  '>Developing Confident and Successful Learners</h1>
                            <div className=' w-[35%] h-1 bg-[#19575b] rounded-2xl'></div>
                            <p className=' w-[70%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi id dicta veniam blanditiis, eum labore pariatur. Ut consectetur iusto ea excepturi, velit laboriosam veritatis odit, vel numquam quaerat repellendus sunt!</p>
                            <button className=' rounded-3xl text-white pt-3 pb-3 pl-10 pr-10 w-[20%] bg-[#1d656a] text-sm font-medium'>View More</button>
                        </div>
                        <div>
                            <img src="./images/aboutusImg1-removebg-preview.png" alt="" />
                        </div>
                    </div>

                    <div ref={boxRef2} className=' flex mt-[3%] items-center'>
                        <div>
                            <img src="./images/aboutusImg2.jpg" alt="" />
                        </div>
                        <div className=' flex flex-col text-white gap-3 w-[72%] text-right justify-end items-end'>
                            <h1 className=' font-bold text-3xl  '>Enjoy Learning with a Unique Classroom Experience</h1>
                            <div className=' w-[35%] h-1 bg-[#19575b] rounded-2xl'></div>
                            <p className=' w-[70%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi id dicta veniam blanditiis, eum labore pariatur. Ut consectetur iusto ea excepturi, velit laboriosam veritatis odit, vel numquam quaerat repellendus sunt!</p>
                            <button className=' rounded-3xl text-white pt-3 pb-3 pl-10 pr-10 w-[20%] bg-[#1d656a] text-sm font-medium'>View More</button>
                        </div>

                    </div>

                    <div ref={boxRef3} className=' flex mt-[3%] items-center'>
                        <div className=' flex flex-col text-white gap-3 w-[72%]'>
                            <h1 className=' font-bold text-3xl  '>Passionate Teachers That Make a Difference</h1>
                            <div className=' w-[35%] h-1 bg-[#19575b] rounded-2xl'></div>
                            <p className=' w-[70%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi id dicta veniam blanditiis, eum labore pariatur. Ut consectetur iusto ea excepturi, velit laboriosam veritatis odit, vel numquam quaerat repellendus sunt!</p>
                            <button className=' rounded-3xl text-white pt-3 pb-3 pl-10 pr-10 w-[20%] bg-[#1d656a] text-sm font-medium'>View More</button>
                        </div>
                        <div>
                            <img src="./images/aboutusImg1-removebg-preview.png" alt="" />
                        </div>
                    </div>

                    <div ref={boxRef4} className=' flex mt-[3%] items-center w-full justify-between'>
                        <div className='w-[50%]'>
                            <img src="./images/aboutusLastImage.jpg" alt="img" className=' ' />
                        </div>
                        <div className=' flex flex-col pl-54 text-left text-white gap-3 w-[90%] '>
                            <h1 className=' font-bold text-3xl w-[95%] '>Over 10 Years in Distant learning for Skill Development</h1>
                            <p className=' w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi id dicta veniam blanditiis, eum labore pariatur. Ut consectetur iusto ea excepturi, velit laboriosam veritatis odit, vel numquam quaerat repellendus sunt!</p>
                            <button className=' rounded-3xl text-white pt-3 pb-3 pl-10 pr-10 w-[20%] bg-[#1d656a] text-sm font-medium'>View More</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default AboutUs