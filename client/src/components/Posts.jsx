import React from 'react'
import { HiDotsHorizontal } from "react-icons/hi";

const Posts = () => {
    return (
        <div className=' flex flex-col gap-3 mb-[7%]'>
            <div className=' flex items-center justify-between'>
                <div className=' flex items-center gap-4'>
                    <div className=' w-12 h-12 rounded-[50%] bg-white'></div>
                    <h1 className=' text-white font-bold'>Rahul Roy</h1>
                </div>
                <HiDotsHorizontal className=' text-[#13686C] text-2xl ' />
            </div>
            <p className=' text-white text-sm font-thin'>Lorem ipsum dolor sit amet consectetur. Aliquam vel proin vitae lacus. Tristique.Uurna diam pulvinar egestas. Mollis pellentesque aliquam orci fames. Blandit volutpat </p>
            <img src="./public/images/posts.png" alt="" />
        </div>
    )
}

export default Posts