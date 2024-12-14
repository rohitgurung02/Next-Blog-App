import React from 'react'
import { assets } from '../../public/assets/assets';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center '>
        <Image src={assets.logo_light} width={120}/>
        <p className='text-white text-sm'>All Rights Reserved. Copyright @blogger</p>
        <div className='flex'>
            <Image src={assets.facebook_icon} width={40} alt='facebook_icon' />
            <Image src={assets.twitter_icon} width={40} alt='twitter_icon' />
            <Image src={assets.googleplus_icon} width={40} alt='googlePlus_icon' />
        </div>
    </div>
  )
}

export default Footer