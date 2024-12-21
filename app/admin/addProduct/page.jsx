"use client"
import React, { useState, useEffect } from 'react'
import { assets } from '../../../public/assets/assets'
import Image from 'next/image'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';  // <-- Import toast
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState(
    {
      title: "",
      description: "",
      category: "Startup",
      author: "John Doe",
      authorImg: "/author_img.png"
    }
  )

  const [isClient, setIsClient] = useState(false); // State to check if we are on the client side

  useEffect(() => {
    // This will run only once on the client side
    setIsClient(true);
  }, []);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  // Handle image selection
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  //Submit data logic with error handling
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('category', data.category);
      formData.append('author', data.author);
      formData.append('authorImg', data.authorImg);
      formData.append('image', image);

      const response = await axios.post('/api/blog', formData);

      if (response.data.success) {
        toast.success(response.data.msg);
        // this code will reset (title, description, category, author, authorImg etc)
        setImage(false);
        setData({
          title: "",
          description: "",
          category: "Startup",
          author: "John Doe",
          authorImg: "/author_img.png"
        });
      } else {
        toast.error("Error: " + response.data.msg);
      }
    } catch (error) {
      console.error("Error during submission:", error);
      toast.error("Error: " + error.response?.data?.message || error.message);
    }
  }

  return (
    <>
      <form onSubmit={onSubmitHandler} className='px-5 sm:pt-2 sm:pl-8'>
        <p>Upload thumbnail</p>
        <label htmlFor="image" className='mt-3 cursor-pointer sm:w-[50px]'>
          {/* Conditionally render the image only on the client-side */}
          {isClient && (
            <Image
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              width={140}
              height={90}
              className='mt-2'
              alt="upload_image"
            />
          )}
        </label>
        <input onChange={handleImageChange} type="file" id='image' hidden required />
        <p className='text-base mt-4'>Blog title</p>
        <input type="text" name='title' onChange={onChangeHandler} value={data.title} placeholder='Enter text here'
          className='w-full sm:w-[500px] mt-3 px-4 py-1 border' />
        <p className='text-base mt-4'>Blog Description</p>
        <textarea name='description' onChange={onChangeHandler} value={data.description} type="text" rows={3} placeholder='Enter the description here'
          className='w-full sm:w-[500px] mt-3 px-4 py-2 border' />

        <p className='text-base mt-3'>Blog Category</p>
        <select name="category" onChange={onChangeHandler} value={data.category} id="" className='w-40 mt-3 px-4 py-2 border text-gray-500'>
          <option value="start up">Start up</option>
          <option value="technology">Technology</option>
          <option value="lifestyle">Life Style</option>
        </select>
        <br />
        <button type='submit' className='mt-6 w-36 h-10 border-radius bg-black text-white'>Add</button>
      </form>
    </>
  )
}

export default AddProduct;
