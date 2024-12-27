"use client"
import BlogTableItem from '@/components/AdminComponents/BlogTableItem';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // Make sure you have this installed and set up

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch the blogs from the API
  const fetchBlogs = async () => {
    try {
      const response = await axios.get('/api/blog');
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // Delete blog by id
  const deleteBlog = async (mongoId) => {
    try {
      const response = await axios.delete('/api/blog', {
        params: {
          id: mongoId
        }
      });
      toast.success(response.data.msg);  // Assuming the response contains a success message

      // Remove the deleted blog from the UI by updating the state
      setBlogs((prevBlogs) => prevBlogs.filter(blog => blog._id !== mongoId));
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Failed to delete blog");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 pt-2 px-2 sm:pt-12 sm:pl-10">
      <h1>All Blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-2 border border-gray-400 scrollbar-hide">
        {blogs.length === 0 ? (
          <p>No blogs found</p>
        ) : (
          <table className="w-full text-sm text-gray-500">
            <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
              <tr>
                <th scope="col" className="hidden sm:block px-6 py-3">Author Name</th>
                <th scope="col" className="px-6 py-3">Blog Title</th>
                <th scope="col" className="px-6 py-3">Date</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((item) => (
                <BlogTableItem
                  key={item._id}
                  mongoId={item._id}
                  title={item.title}
                  author={item.author}
                  authorImg={item.authorImg}
                  date={item.date}
                  deleteBlog={deleteBlog}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default BlogList;
