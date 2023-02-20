import React, { useState, useRef, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi';
import { IoIosClose } from 'react-icons/io';
import {Link, Route, Routes} from 'react-router-dom';
import logo from '../assets/logo.png'

import Sidebar from '../components/Sidebar';
import UserProfile from '../components/UserProfile';
import { client } from '../client';
import Pins from './Pins';
import {userQuery} from '../utils/data'

const Home = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [user, setUser] = useState();
    const scrollRef = useRef(null);
    const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();
      useEffect(() => {
        
      const query = userQuery(userInfo?.sub);

      client.fetch(query).then((data) => {
        setUser(data[0]);
      });
    }, []);
      useEffect(() => {
        scrollRef.current.scrollTo(0, 0)
      });

    return (
        <div className='flex bg-gradient-to-r from-cyan-50 via-indigo-50 via-purple-100 to-fuchsia-50 md:flex-row flex-col h-screen  transaction-height duration-75 ease-out'>
            <div className='hidden md:flex h-screen flex-initial'><Sidebar/></div>
        <div className='flex md:hidden flex-row'>
          <div className='p-2 w-full flex flex-row justify-between items-center shadow-md '>
            <HiMenu frontsize={40} className="cursor-pointer fill-fuchsia-300 w-8 h-8" onClick={()=> setToggleSidebar(true)}/>
        <Link to="/">
            <img src={logo} alt='logo' className='w-28'/>
        </Link>
        
        <h1 >{user?.name}</h1>
        <Link to={`user-profile/${user?._id}`}>
          <div className='w-13 border-4 border-pink-300  rounded-full'>
          <div className='w-13 border-4 border-purple-300  rounded-full'>
        <img src={user?.image} alt="logo" className='w-12 border-2 border-cyan-300  rounded-full'/></div></div>
        </Link>
        </div>
        {toggleSidebar && (
        <div className="fixed w-4/5 bg-gray-100 h-screen   bg-opacity-80 overflow-y-auto shadow-md z-10 animate-slide-in">
          <div className="absolute w-full flex justify-end items-center p-2">
            <IoIosClose fontSize={50} className="cursor-pointer fill-fuchsia-300" onClick={() => setToggleSidebar(false)} />
          </div>
          <Sidebar closeToggle={setToggleSidebar} user={user && user} />
        </div>
        )}
        </div>
        
        <div className='pb-2 flex-1 h-screen overflow-y-scroll ' ref={scrollRef}>
        <Routes>
        <Route path='/user-profile/:userId' element={<UserProfile></UserProfile>}></Route>
        <Route path='/*' element={<Pins user={user && user}/>}></Route>
        </Routes>
        </div>
      
        </div>
        
    )
}

export default Home;
