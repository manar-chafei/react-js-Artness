import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Feed from '../components/Feed';
import PinDetails from '../components/PinDetails';
import CreatePin from '../components/CreatePin';
import Search from '../components/Search';
const Pins = ({user}) => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className='px-2 md:px-5'>
           <div >
            <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} user={user && user} />
           </div>
           <div className='h-full'>
            <Routes>
                <Route path='/' element={<Feed/>} />
                <Route path='/category/:categoryId' element={<Feed/>} />
                <Route path='/pin-detail/:pinId' element={<PinDetails user={user && user}/>} />
                <Route path='/create-pin' element={<CreatePin user={user && user} />} />
                <Route path='/search' element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>} />
            </Routes>
           </div>
        </div>
    );
} 

export default Pins;
