import React from 'react';
import SideBar from '@/components/AdminComponents/SideBar';
import Image from 'next/image';
import { assets } from '../../public/assets/assets';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const layout = ({ children }) => {
    return (
        <>
            <div className='flex'>
                <ToastContainer />
                <SideBar />
                <div className='flex flex-col w-full'>
                    <div className='flex items-center justify-between w-full py-2
                     border-b border-black'>
                        <h3 className='font-medium ps-8 text-base'>Admin Panel</h3>
                        <Image src={assets.profile_icon} width={40} alt='profile_icon' />
                    </div>
                    {children}
                </div>
                
            </div>
        </>
    )
}

export default layout