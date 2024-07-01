import React from 'react'

const CommunitySection = () => {
  return (
    <div className='bg-[#F7FDFF]  pt-14'>
      <div className="main-container">
        <h2 className="hero-heading font-medium md:text-4xl text-[18px] italic">
          Your <span className='text-[#8064A2]'>Hobby</span>, Your<span className='text-[#0096C8]'>Community...</span>
        </h2>
        <button className='btn-primary-fill my-10'>Get started</button>
        <figure>
          <img src="./img/svg/Group 99.svg" alt="" />
        </figure>
      </div>
    </div>
  )
}

export default CommunitySection
