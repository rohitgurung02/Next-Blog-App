import React from 'react'
import Image from 'next/image'
import { assets, blog_data } from '../../public/assets/assets'
import Link from 'next/link'

const BlogItem = ({ title, description, category, image, id }) => {
    return (
        <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000]'>
            <Link href={`/blogs/${id}`}>
                <Image src={image} alt='blog-image' width={400} height={400} className='border-b border-black' />
            </Link>
            <p className='mt-5 p-2 px-1 bg-black flex justify-center text-white text-sm'>{category}</p>
            <div className='p-2'>
                <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
                <p className='mb-3 text-sm tracking-tight text-gray-700'>{description}</p>
                <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
                    Read more <Image src={assets.arrow} width={15} className='ml-1' />
                </Link>
            </div>
        </div>
    )
}

export default BlogItem