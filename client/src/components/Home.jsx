import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";



export const Home = () => {
  return (
    <>
      {/* First Page */}
      <div className="relative w-full min-h-screen">
        

        {/* Background Images */}
        <div className="absolute inset-0 flex opacity-100">
          <img
            src="/images/image1.png"
            alt=""
            className="w-1/5 h-full object-cover"
          />
          <img
            src="/images/image2.png"
            alt=""
            className="w-1/5 h-full object-cover"
          />
          <img
            src="/images/image3.png"
            alt=""
            className="w-1/5 h-full object-cover"
          />
          <img
            src="/images/image4.png"
            alt=""
            className="w-1/5 h-full object-cover"
          />
          <img
            src="/images/image5.png"
            alt=""
            className="w-1/5 h-full object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-black/40"></div>

        {/* Heading Animation */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white font-medium">
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center space-y-4"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl">Welcome To our</h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl">COLLEGE</h1>
          </motion.div>
        </div>
      </div>

      {/* Second Page */}
      <div
        className="relative w-full px-[90px] py-[30px] flex bg-black bg-cover bg-center bg-no-repeat h-[980px]"
        style={{ backgroundImage: "url('/images/page2.avif')" }}
      >   

        {/* Main Content Overlay */}
        <div className="absolute inset-0 w-full flex border-2 bg-  z-10">
          <div className="absolute inset-0 flex gap-25 border-2  m-20 justify-between ">
            {/* Left Column */}
            <div className="text-center text-white  w-2/5 flex flex-col justify-between">
              <div className="mt-25">
                <h1 className="text-4xl md:text-6xl font-normal">Events</h1>
                <p className="mt-8  leading-normal max-w-sm font-light mx-auto text-3xl">
                  simply random text. It has roots in a piece of classical Latin
                  literature from 45 BC.
                </p>
              </div>
              <div className="">
                <button className="mt-6 px-6 w-[70%] py-3  rounded-4xl border border-[rgba(255,255,255,0.2)] ">
                  Explore More
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-8 w-4/5">
              {/* Open-mics Card 1 */}

              <div className="flex flex-wrap gap-6">
                <Card
                  title="Open-mics"
                  description="Shine a spotlight on all the raw talent in your student body with an open mic night! It's the perfect platform to invite students to share their ..."
                />
                <Card
                  title="Open-mics"
                  description="Shine a spotlight on all the raw talent in your student body with an open mic night! It's the perfect platform to invite students to share their ..."
                />
                <Card
                  title="Open-mics"
                  description="Shine a spotlight on all the raw talent in your student body with an open mic night! It's the perfect platform to invite students to share their ..."
                />
              </div>

              {/* Additional Open-mics cards can be added here */}
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};


export default Home;