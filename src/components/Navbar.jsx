import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();

  if (user) {
    return (
      <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7 ">
        <div className="flex justify-start items-center w-full px-2 rounded-full bg-white border-8 border-t-cyan-200 border-r-indigo-200 border-b-purple-200 border-l-fuchsia-200 outline-none focus-within:shadow-sm">
          <IoMdSearch fontSize={21} className="ml-1 fill-fuchsia-300" />
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            value={searchTerm}
            onFocus={() => navigate('/search')}
            className="p-2 w-full mr-3 bg-white caret-fuchsia-300 outline-none text-gray-600"
          />
        </div>
        <div className="flex gap-2 ">
          <Link to={`user-profile/${user?._id}`} className="hidden md:block">
            <img src={user.image} alt="user-pic" className="w-14 h-12   rounded-full" />
          </Link>
          <Link to="/create-pin" className="bg-gradient-to-r from-cyan-300 via-indigo-300 via-purple-400 to-fuchsia-300 text-white rounded-full w-12 h-12 md:w-14 md:h-12 flex justify-center items-center">
            <IoMdAdd />
          </Link>
        </div>
      </div>
    );
  }

  return null;
};

export default Navbar;