import React from 'react';
import Image from 'next/image';
import { assets } from '../../../public/assets/assets';

const BlogTableItem = ({ authorImg, title, author, date, deleteBlog, mongoId }) => {
    const blogDate = new Date(date);

    return (
        <tr className="bg-white border-b">
            <th scope="row" className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <Image
                    src={authorImg ? authorImg : assets.profile_icon}
                    alt={author ? author : 'No Author'}
                    width={40}
                    height={40}
                />
                <p>{author ? author : "No Author"}</p>
            </th>
            <td className="px-6 py-4">{title ? title : "No Title"}</td>
            <td className="px-6 py-4">{blogDate.toDateString()}</td>
            <td onClick={() => deleteBlog(mongoId)} className="px-6 py-4 cursor-pointer text-red-600">X</td>
        </tr>
    );
};

export default BlogTableItem;
