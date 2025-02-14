"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { assets, blog_data } from '../../../public/assets/assets'
import Link from 'next/link'
import axios from 'axios'

const page = ({ params }) => {
    const [data, setData] = useState(null)

    const fetchBlogData = async () => {
        const response = await axios.get('/api/blog',{
            params: {
                id:params.id
            }
        });
        setData(response.data)
    }

    useEffect(() => {
        fetchBlogData();
    }, []);

    return (data ? <>
        <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <Link href='/'>
                <Image src={assets.logo} width={80} className='w-[130px] sm:w-auto' />
                </Link>
                <button className='flex items-center gap-2 py-1 px-3 font-medium
                 sm:py-3 sm:px-6 border border-black shadow-[-3px_3px_0px_#000]'>Get Started <Image src={assets.arrow} /></button>
            </div>
            <div className='text-center my-6'>
                <h1 className='text-2xl sm:text-4xl max-w-[700px] font-semibold mx-auto'>{data.title}</h1>
                <Image src={data.authorImg} width={60} height={60} alt=''
                    className='mx-auto mt-6 border border-white rounded-full' />
                <p className=' pb-2 max-w-[700px] text-lg mx-auto'>{data.author}</p>
            </div>
            </div>
            <div>
            <div className='mx-5 max-w-[800px] md:mx-auto  mb-10'>
                <Image className='border-4 border-white' src={data.image} width={1280} height={600} alt='' />
                <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
                <p>{data.description}</p>
                <h3 className='my-5 text-[18px] font-semibold'>Step:1 Self Reflection and Goal</h3>
                <p className='my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius unde similique eum dolores mollitia voluptatum consectetur perferendis libero autem consequatur reprehenderit adipisci, magni rem recusandae impedit in, quos laudantium vitae.</p>
                <p className='my-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius unde similique eum dolores mollitia voluptatum consectetur perferendis libero autem consequatur reprehenderit adipisci, magni rem recusandae impedit in, quos laudantium vitae.</p>
            </div>
        </div>
        <Footer />
    </> : <>
    </>
    )
}

export default page