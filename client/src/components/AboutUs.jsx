import React from 'react'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutUs = () => {

    gsap.registerPlugin(ScrollTrigger);

    const boxRef1 = useRef([]);
    const boxRef2 = useRef([]);

    useGSAP(() => {

        gsap.from(boxRef1.current, {
            scrollTrigger: boxRef1.current,
            x: -1400,
            delay: 1.5,
            duration: 1,
            stagger: 1.5,
            ease: "expo",
        })

        gsap.from(boxRef2.current, {
            scrollTrigger: boxRef2.current,
            x: 1400,
            delay: 1.5,
            duration: 1,
            stagger: 1.5,
            ease: "expo"
        })

    }, [])


    return (
        <div>
            < div className='  pb-[10%] w-[100%] h-[100%] overflow-hidden' >
                <div className=' flex flex-col items-center justify-center bg-[url(../public/images/aboutImage.jpg)] 
                                w-[100%] min-h-150  bg-no-repeat bg-contain mb-[5%]'>
                    <div className=' w-[45%] flex flex-col justify-center items-center  gap-5'>
                        <h1 className=' text-white xl:text-[500%] font-bold md:text-lg' >About Us</h1>
                        <p className=' text-white text-center xl:text-xl xl:font-bold pl-[8%] pr-[8%] sm:text-xs sm:font-extralight'>From preschool to pre-tertiary, our students enjoy fun,
                            interactive and relevant lessons and are empowered to think beyond the
                            confines of the classroom.</p>
                        <button className=' text-white bg-[#19575b] pt-1 pb-1 pl-5 pr-5 rounded-md font-medium'>See More</button>
                    </div>
                </div>
                <div className=' flex flex-col pl-[6%] pr-[6%]'>
                    <div className=' flex flex-col items-center gap-3'>
                        <h1 id='h1' className=' text-white text-4xl font-bold'>
                            Preparing Students to Achieve Success
                        </h1>
                        <img src=" ../images/Frame.png" alt='underline' />
                    </div>
                    <div className=' flex mt-[3%] items-center '>
                        <div ref={(el) => boxRef1.current[0] = el} className=' flex flex-col text-white gap-3 w-[72%]'>
                            <h1 className=' font-bold text-3xl  '>Developing Confident and Successful Learners</h1>
                            <div className=' w-[35%] h-1 bg-[#19575b] rounded-2xl'></div>
                            <p className=' w-[70%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi id dicta veniam blanditiis, eum labore pariatur. Ut consectetur iusto ea excepturi, velit laboriosam veritatis odit, vel numquam quaerat repellendus sunt!</p>
                            <button className=' rounded-3xl text-white pt-3 pb-3 pl-10 pr-10 w-[20%] bg-[#1d656a] text-sm font-medium'>View More</button>
                        </div>
                        <div ref={(el) => boxRef2.current[0] = el}>
                            <img src="./images/aboutUsimg1Final.png" alt="" />
                        </div>
                    </div>

                    <div className=' flex mt-[3%] items-center'>
                        <div ref={(el) => boxRef1.current[1] = el}>
                            <img src="./images/aboutusImg2.jpg" alt="" />
                        </div>
                        <div ref={(el) => boxRef2.current[1] = el} className=' flex flex-col text-white gap-3 w-[72%] text-right justify-end items-end'>
                            <h1 className=' font-bold text-3xl  '>Enjoy Learning with a Unique Classroom Experience</h1>
                            <div className=' w-[35%] h-1 bg-[#19575b] rounded-2xl'></div>
                            <p className=' w-[70%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi id dicta veniam blanditiis, eum labore pariatur. Ut consectetur iusto ea excepturi, velit laboriosam veritatis odit, vel numquam quaerat repellendus sunt!</p>
                            <button className=' rounded-3xl text-white pt-3 pb-3 pl-10 pr-10 w-[20%] bg-[#1d656a] text-sm font-medium'>View More</button>
                        </div>

                    </div>

                    <div className=' flex mt-[3%] items-center'>
                        <div ref={(el) => boxRef1.current[2] = el} className=' flex flex-col text-white gap-3 w-[72%]'>
                            <h1 className=' font-bold text-3xl  '>Passionate Teachers That Make a Difference</h1>
                            <div className=' w-[35%] h-1 bg-[#19575b] rounded-2xl'></div>
                            <p className=' w-[70%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi id dicta veniam blanditiis, eum labore pariatur. Ut consectetur iusto ea excepturi, velit laboriosam veritatis odit, vel numquam quaerat repellendus sunt!</p>
                            <button className=' rounded-3xl text-white pt-3 pb-3 pl-10 pr-10 w-[20%] bg-[#1d656a] text-sm font-medium'>View More</button>
                        </div>
                        <div ref={(el) => boxRef2.current[2] = el}>
                            <img src="./images/aboutUsimg1Final.png" alt="" />
                        </div>
                    </div>

                    <div className=' flex mt-[3%] items-center w-full justify-between'>
                        <div ref={(el) => boxRef1.current[3] = el} className='w-[50%]'>
                            <img src="./images/aboutusLastImage.jpg" alt="img" className=' ' />
                        </div>
                        <div ref={(el) => boxRef2.current[3] = el} className=' flex flex-col pl-54 text-left text-white gap-3 w-[90%] '>
                            <h1 className=' font-bold text-3xl w-[95%] '>Over 10 Years in Distant learning for Skill Development</h1>
                            <p className=' w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi id dicta veniam blanditiis, eum labore pariatur. Ut consectetur iusto ea excepturi, velit laboriosam veritatis odit, vel numquam quaerat repellendus sunt!</p>
                            <button className=' rounded-3xl text-white pt-3 pb-3 pl-10 pr-10 w-[20%] bg-[#1d656a] text-sm font-medium'>View More</button>
                        </div>
                    </div>
                </div>
            </div >

        </div >

    )
}

export default AboutUs