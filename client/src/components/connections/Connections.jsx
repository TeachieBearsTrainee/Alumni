import React from 'react'
import { MdLogout } from "react-icons/md";
import Posts from '../Posts';
import Chats from './Chats';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Events from './Events';

const Connections = () => {
    return (
        <Tabs className='  flex pt-[3%] pb-[6%] px-[6%] h-230 w-screen gap-4'>

            <div className=' relative w-[27%] h-full bg-[#1A1A1A] rounded-3xl'>
                <div className=' py-[10%] flex flex-col items-center relative h-[35%] text-white'>
                    <div className=' w-40 h-40 bg-white rounded-[50%] '></div>
                    <h1 className=' font-medium text-xl mt-3'> Tarun Alle</h1>
                    <p className=' text-sm'>I Love Alumini</p>
                    <div className=' absolute w-full h-[2px] bg-[#3C3C3C] bottom-0'></div>
                </div>
                <TabList className=' flex flex-col text-xl font-light py-[10%] h-[40%] text-white items-center gap-7 cursor-pointer'>
                    <Tab>Post</Tab>
                    <Tab>Chats</Tab>
                    <Tab>Connections</Tab>
                    <Tab>Events</Tab>
                </TabList>
                <div className='flex items-center absolute bottom-0 w-full h-[15%]'>
                    <div className=' absolute w-full h-[2px] bg-[#3C3C3C] top-0'></div>
                    <div className=' flex w-full px-[10%] text-white justify-between items-center '>
                        <div className=' flex items-center gap-2'>
                            <div className='w-10 h-10 bg-white rounded-[50%]'></div>
                            <h1>Raj Singh</h1>
                        </div>
                        <button className=' border-1 border-gray-700 cursor-pointer text-red-500  px-3.5 py-1 rounded-md flex gap-2 items-center'><p className='  text-xs font-medium'>SIGN OUT</p><MdLogout /></button>
                    </div>
                </div>
            </div>
            <div className=' w-[73%] px-[4%] py-[4%] h-full bg-[#1A1A1A] rounded-3xl overflow-auto'>
                <TabPanel><Posts /><Posts /><Posts /></TabPanel>
                <TabPanel><Chats /></TabPanel>
                <TabPanel><Chats /></TabPanel>
                <TabPanel><Events /></TabPanel>

            </div>
        </Tabs>
    )
}

export default Connections