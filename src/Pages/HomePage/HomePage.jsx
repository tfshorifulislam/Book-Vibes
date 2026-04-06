import React from 'react';
import bannerImg from '../../assets/pngwing 1.png'
const HomePage = () => {
    return (
        <div className='mt-12 w-11/12 mx-auto'>
            <div className='flex justify-between items-center py-20 px-28'>
                <div className='space-y-12'>
                    <h1 className='text-[#131313] font-bold leading-20 text-6xl'>
                        Books to freshen up <br /> your bookshelf
                    </h1>
                    <button className='text-xl font-bold bg-[#23BE0A] rounded-lg text-white py-2 px-5 cursor-pointer'>View The List</button>
                </div>
                <div>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;