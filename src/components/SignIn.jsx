import React from 'react'

const SignIn = () => {
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

      <form action="#" className=''>
        <input type="email" name="" className='sign-in-inputs'  placeholder='Email'/>
        <input type="password" name="" id="" className='sign-in-inputs' placeholder='Password'/>
        <div className='flex items-center justify-between pb-3'>
          <div className='flex justify-center items-center gap-2'>
            <input type="checkbox" name="" id="sign-in-chachbox" />
            <label htmlFor="sing-in-chachbox" className='text-sm'>Remember me</label>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <figure>
              <img src=".\img\svg\lock_black_24dp 1.svg" alt="" />
            </figure>
            <span className='text-sm' >Forgot password?</span>
          </div>
        </div>
        <div>
          <button className='btn-primary w-full' style={{fontSize: '14px'}}>Continue</button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
