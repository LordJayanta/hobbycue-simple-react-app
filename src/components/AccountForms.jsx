import React, { useState } from 'react'
import SignIn from './SignIn'
import JoinIn from './JoinIn';

const AccountForms = () => {
    const [signIn, setsignIn] = useState(true)
    const [joinIn, setJoinIn] = useState(false)


    return (
        <div>
            {/* Sign In and Join section */}
            <div className="hero-sign-join md:px-3 w-full">
                <div className='flex gap-5 text-[20px] mb-4'>

                    <div className={signIn
                        ? 'hero-sign-join-link font-bold text-[#8064A2] cursor-pointer'
                        : 'hero-sign-join-link font-bold text-[#939CA3] hover:text-[#8064A2] cursor-pointer'}
                        onClick={() => { setJoinIn(false); setsignIn(true) }}>
                        <span>Sign In</span>
                        <div className={signIn
                            ? 'hero-sign-join-line w-full h-[2px] bg-[#8064A2]'
                            : 'hero-sign-join-line w-0 h-[2px] bg-[#8064A2]'}></div>
                    </div>

                    <div className={joinIn
                        ? 'hero-sign-join-link font-bold text-[#8064A2] cursor-pointer'
                        : 'hero-sign-join-link font-bold text-[#939CA3] hover:text-[#8064A2] cursor-pointer'}
                        onClick={() => { setJoinIn(true); setsignIn(false) }}>
                        <span>Join In</span>
                        <div className={joinIn
                            ? 'hero-sign-join-line w-full h-[2px] bg-[#8064A2]'
                            : 'hero-sign-join-line w-0 h-[2px] bg-[#8064A2]'}></div>
                    </div>
                </div>
                {signIn && <SignIn />}
                {joinIn && <JoinIn />}
            </div>
        </div>
    )
}

export default AccountForms
