import React from 'react'
import Image from 'next/image'
import { assets } from '../../../public/assets/assets'
import Link from 'next/link'

const SideBar = () => {
    return (
        <div className='flex flex-col bg-slate-100'>
            <div className='px-2 sm:pl-14 py-3 border border-black'>
                <Image src={assets.logo} width={100} alt='' />
            </div>
            <div className='w-26 sm:w-80 h-[100vh] relative py-12 border border-black'>
                <div className='w-[80%] sm:w[80%] absolute right-0'>
                    <Link href="/admin/addProduct" className='flex items-center border border-black gap-3
                    font-medium px-3 py-2 bg-white shadow-[-2px_2px_0px_#000]'>
                        <Image src={assets.add_icon} alt='add_icon' width={28} /> <p>Add Blogs</p>
                    </Link>
                    <Link href="/admin/blogList" className='mt-3 mb-3 flex items-center border border-black gap-3
                    font-medium px-3 py-2 bg-white shadow-[-2px_2px_0px_#000]'>
                        <Image src={assets.blog_icon} alt='add_icon' width={28} /> <p>Blog List</p>
                    </Link>
                    <Link href="/admin/subscription" className='flex items-center border border-black gap-3
                    font-medium px-3 py-2 bg-white shadow-[-2px_2px_0px_#000]'>
                        <Image src={assets.email_icon} alt='add_icon' width={28} /> <p>Subscription</p>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default SideBar