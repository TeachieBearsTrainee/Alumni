import React from "react";
import { MdLogout } from "react-icons/md";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Posts from "./Posts";
import Chats from "../Chats";
import Connection from "./Connection";
import Events from "./Events";

const AluminiConnection = () => {
  return (
    <Tabs className="flex pt-[8%] pb-[6%] px-[6%] h-230 w-screen gap-4">
      {/* Sidebar */}
      <div className="relative w-[27%] h-full bg-[#1A1A1A] rounded-3xl">
        <div className="py-[10%] flex flex-col items-center relative h-[35%] text-white">
          <div className="w-[40%] h-[100%] bg-white rounded-[50%]"></div>
          <h1 className="font-medium text-xl mt-3">Rajnish Manda</h1>
          <p className="text-sm">I Love Alumini</p>
          <div className="absolute w-full h-[2px] bg-[#3C3C3C] bottom-0"></div>
        </div>

        <TabList className="flex flex-col text-xl font-light py-[10%] h-[40%] text-white items-center gap-7 cursor-pointer">
          <Tab className="cursor-pointer">Post</Tab>
          <Tab className="cursor-pointer">Chats</Tab>
          <Tab className="cursor-pointer">Connections</Tab>
          <Tab className="cursor-pointer">Events</Tab>
        </TabList>

        <div className="flex items-center absolute bottom-0 w-full h-[15%]">
          <div className="absolute w-full h-[2px] bg-[#3C3C3C] top-0"></div>
          <div className="flex w-full px-[10%] text-white justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-[50%]"></div>
              <h1>Raj Singh</h1>
            </div>
            <button className="border border-gray-700 cursor-pointer text-red-500 px-3.5 py-1 rounded-md flex gap-2 items-center">
              <p className="text-xs font-medium">SIGN OUT</p>
              <MdLogout />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[73%] h-full bg-[#1A1A1A] rounded-3xl p-10 overflow-auto">
        <TabPanel><Posts /><Posts /><Posts /></TabPanel>
        <TabPanel><Chats /></TabPanel>
        <TabPanel><Connection /></TabPanel>
        <TabPanel><Events /></TabPanel>
      </div>
    </Tabs>
  );
};

export default AluminiConnection;
