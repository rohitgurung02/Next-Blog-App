import React from 'react'
import { blog_data } from '../../public/assets/assets'
import BlogItem from './BlogItem'

const BlogList = () => {
    return (
        <div>
            <div className='flex justify-center gap-6'>
                <button className='bg-black text-white py-1 px-4 rounded-sm'>All</button>
                <button>Technology</button>
                <button>Startup</button>
                <button>Life Style</button>
            </div>
            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                {
                    blog_data.map((items, index) => {
                        return <BlogItem key={index} title={items.title} description={items.description} category={items.category} image={items.image} />
                    })
                }
            </div>
        </div>
    )
}

export default BlogList