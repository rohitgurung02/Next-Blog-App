import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '../../public/assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

const Header = () => {
    const [email, setEmail] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);

        try {
            const response = await axios.post('api/email', formData);

            if (response.data.success) {
                toast.success(response.data.msg);
                setEmail("");  // Clear the input after success
            } else {
                toast.error("Error");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        }
    }

    return (
        <div className='py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <Image src={assets.logo} width={60} alt='Header_Logo'
                    className='w-[60px] h-[40px] sm:w-auto' />
                <button className='flex items-center gap-2 font-medium py-1 px-3
                 sm:py-3 sm:px-6 border border-solid border-black
                 shadow-[-7px_7px_0px_#000]'>Get Started <Image src={assets.arrow} alt="Arrow" /></button>
            </div>
            <div className='text-center my-8'>
                <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
                <p className='mt-4 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <form onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] mx-auto mt-6 border border-black shadow-[-3px_3px_0px_#000]'>
                    <input
                        type="email"
                        placeholder='Enter your email'
                        value={email}  // Bind the input field value to the email state
                        onChange={(e) => setEmail(e.target.value)}  // Update the state when the user types
                        className='pl-4 outline-none'
                    />
                    <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>
                        Click here
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Header;
