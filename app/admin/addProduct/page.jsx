"use client"
import React, { useState } from 'react'
import { assets } from '../../../public/assets/assets'
import Image from 'next/image'

const AddProduct = () => {
  const [image, setImage] = useState(null);

  // Handle image selection
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <>
      <form className='mt-3 px-5 sm:pt-2 sm:pl-8'>
        <p className='text-base'>Upload thumbnail</p>

        <label htmlFor="image" className='mt-4  cursor-pointer sm:w-[50px]'>
          {/* If no image is uploaded, show the default upload area */}
          {image ? (
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              width={140}
              height={90}
              className='w-full'
              alt="upload_image"
            />
          ) : (
            <Image
              src={assets.upload_area}
              width={140}
              height={90}
              className='mt-2'
              alt="upload_area"
            />
          )}
        </label>

        {/* File input */}
        <input
          onChange={handleImageChange}
          type='file'
          id='image'
          hidden
          required
        />
        <p className='text-base mt-4'>Blog required</p>
        <input type="text" placeholder='Enter text here'
          className='w-full sm:w-[500px] mt-3 px-4 py-1 border' />
        <p className='text-base mt-4'>Blog Description required</p>
        <textarea type="text" rows={3} placeholder='Enter the description here'
          className='w-full sm:w-[500px] mt-3 px-4 py-2 border' />

        <p className='text-base mt-3'>Blog Category</p>
        <select name="category" id="" className='w-40 mt-3 px-4 py-2 border text-gray-500'>
          <option value="start up">Start up</option>
          <option value="technology">Technology</option>
          <option value="lifestyle">Life Style</option>
        </select>
        <br />
        <button type='submit' className='mt-6 w-36 h-10 border-radius bg-black text-white'>Submit</button>
      </form>
    </>
  )
}

export default AddProduct;
