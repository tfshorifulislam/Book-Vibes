import React, { useState } from 'react';
import { NavLink } from 'react-router';
import BooksPage from '../../Pages/BooksPage/BooksPage';
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const NavBar = () => {
    const [isTrue, setIsTrue] = useState(false)
    const links = <div className='flex flex-col space-y-4 lg:flex-row lg:space-x-4'>
        <li>
            <NavLink to={'/'}
                className={({ isActive }) => isActive ? 'border border-[#23BE0A] rounded-lg text-lg font-semibold text-[#23BE0A]' : 'text-[#13131380] text-lg'}>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to={'BookPage'}
                className={({ isActive }) => isActive ? 'border border-[#23BE0A] rounded-lg text-lg font-semibold text-[#23BE0A]' : 'text-[#13131380] text-lg'}>
                Listed Books
            </NavLink>
        </li>
        <li>
            <NavLink to={'pages-to-read'}
                className={({ isActive }) => isActive ? 'border border-[#23BE0A] rounded-lg text-lg font-semibold text-[#23BE0A]' : 'text-[#13131380] text-lg'}>
                Pages to Read
            </NavLink>
        </li>
    </div>
    return (
        <div className=" mt-12 w-11/12 mx-auto">

            <div className='flex justify-between items-center' >
                <div className='flex gap-4 items-center text-3xl cursor-pointer'>
                    <HiOutlineMenuAlt2 className='flex lg:hidden' onClick={() => setIsTrue(!isTrue)} />

                    <div
                        className={`absolute bg-amber-700 h-screen w-[50%] top-30 duration-1000 rounded-r-xl p-5 ${isTrue ? 'left-0' : '-left-450'}`}>
                            {links}
                        
                    </div>

                    <NavLink to={'/'}
                        className="text-xl lg:text-3xl font-bold text-[#131313] text-center">
                        Book Vibe
                    </NavLink>
                </div>
                <div className='hidden lg:flex'>
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="flex gap-5">
                    <a className="btn bg-[#23BE0A] font-semibold text-white rounded-lg shadow-none">Sign In</a>
                    <a className="btn bg-[#59C6D2] font-semibold text-white rounded-lg shadow-none">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;