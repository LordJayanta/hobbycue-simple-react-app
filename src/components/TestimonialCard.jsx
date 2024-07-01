import React from 'react'

const TestimonialCard = ({ title, iconPath, decription, btnTxt }) => {
  return (
    <div className='border border-[#CED4DA] rounded-lg p-8 bg-[#F7F5F9] md:block flex items-center md:flex-row flex-col'>
      <div className='flex gap-3 items-center'>
        <figure >
          <img src={iconPath} alt="" />
        </figure>
        <h3 className='font-bold md:text-[24px] text-[18px]'>{title}</h3>
      </div>
      <p className='md:text-[18px] text-xs my-5 font-light text-[#6D747A] leading-[30px]'>
        {decription}
      </p>
      <div className="flex items-center justify-between lg:flex-row flex-col-reverse">

        <div className="Testimonial-Audio md:mt-0 mt-5 md:w-[65%] w-[100%] h-[100px] bg-[#CCC1DA] p-3 rounded-md flex items-center justify-between md:px-5 px-1">
          <figure className='icon md:h-[40px] md:w-[40px]'>
            <img src="./img/svg/Vector.svg" alt="" />
          </figure>
          <div className='flex items-center justify-center md:gap-4 gap-2 md:basis-[70%] basis-[60%]'>
            <input type="range" name="" id="" className='w-[100%]' />
            <span className='md:text-xs text-[8px] text-[#8064A2]'>0:00</span>
          </div>
          <div className='relative'>
            <figure className='w-[40px] md:w-[60px] z-30'>
              <img  src="./img/png/Ellipse 12.png" alt="" />
            </figure>
            <figure className='w-[16px] md:w-[32px] z-20 absolute bottom-0 -left-3'>
              <img  src="./img/svg/mic_black_24dp 1.svg" alt="" />
            </figure>
          </div>
        </div>


        <div className="Testimonial-Character basis-[32%] flex items-center justify-center gap-5">
          <figure>
            <img className='w-[60px] md:w-[100px]' src="./img/png/Ellipse 12.png" alt="" />
          </figure>
          <div className='Testimonial-Character'>
            <h4 className='text-[#8064A2] font-semibold md:text-[18px] text-[16px]'>Shubha Nagarajan</h4>
            <div className='text-[#0096C8] font-normal md:text-sm text-xs  leading-[21px]'>Classical Dancer</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
