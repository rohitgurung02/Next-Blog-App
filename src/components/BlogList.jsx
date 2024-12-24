"use client"
import React, { useEffect, useState } from 'react';
import { blog_data } from '../../public/assets/assets'; // If you need fallback data
import BlogItem from './BlogItem';
import axios from 'axios';

const BlogList = () => {
    const [menu, setMenu] = useState("All");
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);  // Add a loading state

    const fetchBlogs = async () => {
        const response = await axios.get('/api/blog');
        setBlogs(response.data.blogs);
        console.log(response.data.blogs);
        setLoading(false);  // Stop loading once data is fetched
    };

    useEffect(() => {
        fetchBlogs();
    }, []);  // Run once after the component mounts (client-side only)

    if (loading) {
        return <div>Loading...</div>;  // Display loading state until the data is fetched
    }

    return (
        <div>
            <div className='flex justify-center gap-6'>
                <button onClick={() => setMenu('All')} className={menu === "All" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>All</button>
                <button onClick={() => setMenu('Technology')} className={menu === "Technology" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Technology</button>
                <button onClick={() => setMenu('Startup')} className={menu === "Startup" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Startup</button>
                <button onClick={() => setMenu('Lifestyle')} className={menu === "Lifestyle" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Life Style</button>
            </div>
            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                {
                    blogs.filter((item) => menu === "All" ? true : item.category === menu).map((item, index) => {
                        return <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description}
                         category={item.category} />;
                    })
                }
            </div>
        </div>
    );
}

export default BlogList;
