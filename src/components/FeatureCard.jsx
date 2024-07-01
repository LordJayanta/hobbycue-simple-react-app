import React from 'react'

const FeatureCard = ({title, iconPath, decription, btnTxt}) => {
  return (
    <div className='border border-[#CED4DA] rounded-lg p-8 bg-white md:block flex items-center md:flex-row flex-col'>
      <div className='flex gap-3 items-center '>
        <figure>
            <img src={iconPath} alt="" />
        </figure>
        <h3 className='font-bold md:text-[24px] text-[18px]'>{title}</h3>
      </div>
      <p className='md:text-[18px] text-xs my-5 font-light leading-[30px]'>
      {decription}
      </p>
      <button className='btn-primary md:w-auto w-full'>{btnTxt}</button>
    </div>
  )
}

export default FeatureCard
