import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='w-480 mx-auto'>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default MainLayout;