import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiHome, HiOutlineHome} from 'react-icons/hi';
import { IoIosArrowForward } from 'react-icons/io';
import logo from '../assets/logo.png';
import { categories } from '../utils/data';
const isNotActiveStyle ='bg-gradient-to-r from-cyan-300 via-indigo-300 via-purple-400 to-fuchsia-300   hover:from-cyan-400  hover:via-indigo-400 hover:via-purple-400 hover:to-fuchsia-400 active:bg-pink-100 focus:outline-none       flex items-center px-5 gap-3 taxt-gray-500 hover:text-white text-gray-100 transition-all duration-200 ease-in-out capitilize rounded-full h-14 '
const isActiveStyle ='text-fuchsia-300 rounded-full h-14 bg-fuchsia-400 bg-opacity-20   flex items-center px-5 gap-5 font-extrabold   transition-all duration-200 ease-in-out capitilize'

const Sidebar = ({ closeToggle, user }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };
    
  return(
  <div className="flex flex-col justify-between   h-full overflow-y-scroll min-w-210 hide-scrollbar">
  <div className="flex flex-col ">
    <Link
      to="/"
      className="flex px-5 gap-2 my-6 pt-1 w-190  items-center"
      onClick={handleCloseSidebar}
    >
      <img src={logo} alt="logo" className="w-full" />
    </Link>
  
        
                <div className='flex flex-col gap-5 px-4'>
                    <NavLink
                    to="/"
                    className={({isActive}) => isActive? isActiveStyle : isNotActiveStyle }>
                      {({isActive}) => isActive? <div className='flex items-center px-5 gap-5'><HiHome/> Home</div > : <div className='flex items-center px-5 gap-5'><HiOutlineHome/> Home</div>}  
                       
                    </NavLink>
                    <h3 className="mt-2 px-5 text-base text-sky-300  2xl:text-xl">Discover cateogries</h3>
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
              onClick={handleCloseSidebar}
              key={category.name}
            >
              <img src={category.image} className="w-8 h-8 rounded-full shadow-sm" />
              {category.name}
            </NavLink>
          ))}
                </div>
                </div>
      {user && (
        <Link
          to={`user-profile/${user._id}`}
          className="flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3"
          onClick={handleCloseSidebar}
        >
          <img src={user.image} className="w-10 h-10 rounded-full" alt="user-profile" />
          <p>{user.userName}</p>
          <IoIosArrowForward/>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;