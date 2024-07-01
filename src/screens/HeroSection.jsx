import React from 'react'
import AccountForms from '../components/AccountForms'

const HeroSection = () => {
  return (
    <div className="bg-[#F7F5F9]">
      <div className='w-[80vw] mx-auto md:pt-4 pt-1'>

        <div className='md:mt-16 mt-5 flex justify-between md:flex-row flex-col'>

          <div className="hero-section-details md:w-3/5 w-full">
            <h1 className="hero-heading font-bold md:text-4xl text-[18px] md:leading-[54PX] leading-[27PX]">
              Explore your <span className='text-[#0096C8]'>hobby</span> or <span className='text-[#8064A2]'>passion</span>
            </h1>
            <div className='my-7 md:text-sm text-xs md:leading-[30px] leading-[22px]'>
              <p className=''>
                Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
              </p>
              <p>
                If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride
              </p>
            </div>
            <div className='mt-20 md:block hidden'>
              <figure>
                <img src=".\img\png\Group 27.png" alt="" />
              </figure>
            </div>
          </div>


          <AccountForms/>

          <div className='mt-20 md:hidden block'>
              <figure>
                <img src=".\img\png\Group 27.png" alt="" />
              </figure>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
