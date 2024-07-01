import React from 'react'
import TestimonialCard from '../components/TestimonialCard'

const TestimonialSection = () => {
  return (
    <div className='py-14'>
      <div className="main-container md:px-20">
        <TestimonialCard
          title='Testimonial'
          iconPath=".img/svg/notifications_black_24dp 1.svg"
          btnTxt='Add new'
          decription='In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.'
        />
      </div>
    </div>
  )
}

export default TestimonialSection
