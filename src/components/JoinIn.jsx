import React from 'react'

const JoinIn = () => {
  return (
    <div className='overflow-hidden flex md:flex-col flex-col-reverse gap-5'>
      <div className='flex flex-col gap-4'>
        <div className="sign-in-with sign-in-with-google">
          <figure className='sign-in-with-logo'>
            <img src="./img/png/_x31__stroke.png" alt="" />
          </figure>
          <div>Continue with Google</div>
        </div>
        <div className="sign-in-with sign-in-with-google">
          <figure className='sign-in-with-logo'>
            <img src="./img/png/Facebook.png" alt="" />
          </figure>
          <div>Continue with Facbook</div>
        </div>
      </div>

      <div className='flex items-center justify-center gap-2'>
        <div className='sing-in-saparetors'></div>
        <div className='min-w-fit font-bold text-xs'>Or connect with</div>
        <div className='sing-in-saparetors'></div>
      </div>

      <form action="#" className='text-xs md:text-md'>
        <input type="email" name="" className='sign-in-inputs'  placeholder='Email'/>
        <input type="password" name="" id="" className='sign-in-inputs' placeholder='Password'/>
        <input type="password" name="" id="" className='sign-in-inputs' placeholder='Confirm Password'/>
        <div className='pb-3 md:text-xs text-[8px]'>
        By continuing, you agree to our <b>Terms of Service</b> and <b>Privacy Policy</b>.
        </div>
        <div>
          <button className='btn-primary w-full'>Agree and Continue</button>
        </div>
      </form>
    </div>
  )
}

export default JoinIn
