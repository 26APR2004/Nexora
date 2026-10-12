import React from 'react'
import assets from '../assets/assets'
import Title from './Title'

const Service = () => {
    const servicesData =[
        {
           title:'Advertising',
           description:'we turn bold ideas into powerful digital solution that connect, engage...',
           icon: assets.ads_icon
        },
         {
           title:'Content marketing',
           description:'we help you execute your plan and deliver results',
           icon: assets.marketing_icon

        },
         {
           title:'Content writing',
           description:'we help you create a marketing strategy that drives result.',
           icon: assets.content_icon

        },
         {
           title:'Social media',
           description:'we help you build a strong social media presence and engage with your audiance.',
           icon: assets.social_icon

        }
    ]
  return (
    <div id='services' className='relative flex flex-col items-center gap-10 px-4 sm:px-12 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <img src={assets.bgImage2} alt='Background img' className='absolute -top-110  -left-70 sm:-top-100 sm:-left-70 -z-1 dark:hidden'/>
     
     <Title title='How can we help?' desc='We provide a wide range of services to help you achieve your business goals. Our team of experts are here to help you every step of the way.'/>
    </div>
  )
}

export default Service
