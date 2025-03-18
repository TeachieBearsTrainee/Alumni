import React from "react";
import { IoIosSearch } from "react-icons/io";

const Connection = () => {
  return (
    <div className="h-screen w-full">
      <div className="h-[90%] m-9">
        <div className="relative w-full bg-[#303030] flex h-12 mt-3 rounded-[0.3rem]">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl text-white">
          <IoIosSearch />
          </span>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Name"
            required
            className="pl-12 bg-transparent text-white w-full py-2 px-3"
          />
        </div>
        <div className="mt-7">
        <h4 className="text-white ">Requests come</h4>
        <div className="w-full bg-[#303030] flex h-15 mt-3 rounded-[0.3rem] items-center justify-between  p-5 relative " >
            <div className="flex items-center gap-3">
            <img src="/images/Avatar.png" alt="profile" className="aboslute h-10 w-10" />
            <div className="flex flex-col">
            <h1 className="text-white">Arlene McCoy</h1>
            <h2 className="text-[#ACACAC] text-sm">@msmccoy</h2>
            </div>
            </div>
            <div>
                <button className="text-white border border-[#13686c] px-4 py-1 font-thin ">ACCEPT</button>
            </div>
        </div>
        <div className="w-full bg-[#303030] flex h-15 mt-3 rounded-[0.3rem] items-center justify-between  p-5 relative " >
            <div className="flex items-center gap-3">
            <img src="/images/Avatar.png" alt="profile" className="aboslute h-10 w-10" />
            <div className="flex flex-col">
            <h1 className="text-white">Arlene McCoy</h1>
            <h2 className="text-[#ACACAC] text-sm">@msmccoy</h2>
            </div>
            </div>
            <div>
                <button className="text-white border border-[#13686c] px-4 py-1 font-thin ">ACCEPT</button>
            </div>
        </div>
        <div className="w-full bg-[#303030] flex h-15 mt-3 rounded-[0.3rem] items-center justify-between  p-5 relative " >
            <div className="flex items-center gap-3">
            <img src="/images/Avatar.png" alt="profile" className="aboslute h-10 w-10" />
            <div className="flex flex-col">
            <h1 className="text-white">Arlene McCoy</h1>
            <h2 className="text-[#ACACAC] text-sm">@msmccoy</h2>
            </div>
            </div>
            <div>
                <button className="text-white border border-[#13686c] px-4 py-1 font-thin ">ACCEPT</button>
            </div>
        </div>
        <div className="w-full bg-[#303030] flex h-15 mt-3 rounded-[0.3rem] items-center justify-between  p-5 relative " >
            <div className="flex items-center gap-3">
            <img src="/images/Avatar.png" alt="profile" className="aboslute h-10 w-10" />
            <div className="flex flex-col">
            <h1 className="text-white">Arlene McCoy</h1>
            <h2 className="text-[#ACACAC] text-sm">@msmccoy</h2>
            </div>
            </div>
            <div>
                <button className="text-white border border-[#13686c] px-4 py-1 font-thin ">ACCEPT</button>
            </div>
        </div>
        <div className="w-full bg-[#303030] flex h-15 mt-3 rounded-[0.3rem] items-center justify-between  p-5 relative " >
            <div className="flex items-center gap-3">
            <img src="/images/Avatar.png" alt="profile" className="aboslute h-10 w-10" />
            <div className="flex flex-col">
            <h1 className="text-white">Arlene McCoy</h1>
            <h2 className="text-[#ACACAC] text-sm">@msmccoy</h2>
            </div>
            </div>
            <div>
                <button className="text-white border border-[#13686c] px-4 py-1 font-thin ">ACCEPT</button>
            </div>
        </div>
        <div className="w-full bg-[#303030] flex h-15 mt-3 rounded-[0.3rem] items-center justify-between  p-5 relative " >
            <div className="flex items-center gap-3">
            <img src="/images/Avatar.png" alt="profile" className="aboslute h-10 w-10" />
            <div className="flex flex-col">
            <h1 className="text-white">Arlene McCoy</h1>
            <h2 className="text-[#ACACAC] text-sm">@msmccoy</h2>
            </div>
            </div>
            <div>
                <button className="text-white border border-[#13686c] px-4 py-1 font-thin ">ACCEPT</button>
            </div>
        </div>
        
        </div>
      </div>

      
    </div>
  );
};

export default Connection;
