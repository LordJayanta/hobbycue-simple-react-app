import React, { useState } from 'react'
import DropDownOption from './DropDownOption'
import AccountForms from './AccountForms';


const exploreMenu = [
    { name: 'item1', path: '/' },
    { name: 'item2', path: '/' }
];
const hobbiesMenu = [
    { name: 'item1', path: '/' },
    { name: 'item2', path: '/' },
    { name: 'item3', path: '/' }
];


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <div className='md:main-container w-[80vw] mx-auto'>
                <nav className='flex items-center justify-between md:h-[80px] h-[48px] relative'>
                    <div className='flex items-center gap-9'>
                        <figure className='md:w-1/2 w-2/3'>
                            {/* <figure className='md:h-full h-[40px]'> */}
                            <img className='' src="./img/svg/HobbyCue Logo.svg" alt="HobbyCue_Logo" />
                            {/* <img src="./img/png/HobbyCue Logo.png" alt="" /> */}
                        </figure>

                        <form action="#"
                            className='outline outline-1 h-[40px] outline-gray-300 hidden md:flex justify-center rounded-md overflow-hidden w-[300px]'>
                            <input type="text"
                                placeholder='Search here...'
                                className='px-3 w-full outline-none ' />
                            <button type="submit">
                                <figure className='bg-[#8064A2] p-2 h-[40px] w-[40px]'>
                                    <img className='w-6' src=".\img\svg\icons8_search 1.svg" alt="" />
                                </figure>
                            </button>
                        </form>

                    </div>


                    {/* For mobile */}
                    <div>
                        {isMenuOpen
                            ? <div onClick={() => { setIsMenuOpen(false) }}>
                                <figure className='text-[#8064A2] block md:hidden w-[24px] h-[24px]'>
                                    <img src=".\img\svg\close_black_24dp (2) 1.svg" alt="" />
                                </figure>
                            </div>

                            : <div className='flex items-center justify-center gap-4'>
                                <div>
                                    <figure className='text-[#8064A2] block md:hidden'>
                                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.83333 2C4.17185 2 2 4.17185 2 6.83333C2 9.49481 4.17185 11.6667 6.83333 11.6667C7.92439 11.6667 8.92964 11.2977 9.74023 10.6836L12.862 13.8047C12.9234 13.8687 12.997 13.9198 13.0784 13.9549C13.1598 13.9901 13.2474 14.0087 13.3361 14.0096C13.4248 14.0105 13.5128 13.9937 13.5949 13.9602C13.6771 13.9267 13.7517 13.8771 13.8144 13.8144C13.8771 13.7517 13.9267 13.6771 13.9602 13.5949C13.9937 13.5128 14.0105 13.4248 14.0096 13.3361C14.0087 13.2474 13.9901 13.1598 13.9549 13.0784C13.9198 12.997 13.8687 12.9234 13.8047 12.862L10.6836 9.74023C11.2977 8.92964 11.6667 7.92439 11.6667 6.83333C11.6667 4.17185 9.49481 2 6.83333 2ZM6.83333 3.33333C8.77423 3.33333 10.3333 4.89244 10.3333 6.83333C10.3333 7.76524 9.97135 8.60687 9.38281 9.23242C9.32552 9.2739 9.2752 9.32422 9.23372 9.38151C8.60803 9.9708 7.7659 10.3333 6.83333 10.3333C4.89244 10.3333 3.33333 8.77423 3.33333 6.83333C3.33333 4.89244 4.89244 3.33333 6.83333 3.33333Z" fill="currentColor" />
                                        </svg>
                                    </figure>
                                </div>
                                <div>
                                    <figure className='text-[#8064A2] block md:hidden  w-[24px] h-[24px]'>
                                        <img src=".\img\svg\notifications_black_24dp 1.svg" alt="" />
                                    </figure>
                                </div>
                                <div onClick={() => { setIsMenuOpen(true) }}>
                                    <figure className='text-[#8064A2] block md:hidden w-[24px] h-[24px]'>
                                        <img src=".\img\svg\menu_black_24dp 1.svg" alt="" />
                                    </figure>
                                </div>
                            </div>}
                    </div>

                    {isMenuOpen && <div className='absolute top-16 py-10 left-0 h-[100vh] w-full bg-[#F7F5F9] z-10'>
                        <AccountForms />
                    </div>}



                    {/* For Desktop */}
                    <div className='md:flex items-center justify-center gap-4 hidden'>
                        <DropDownOption
                            title='Explore'
                            iconPath=".\img\png\Layer_2.png"
                            dropdownMenu={exploreMenu} />
                        <DropDownOption
                            title='Hobbies'
                            iconPath=".\img\png\Hobbies.png"
                            dropdownMenu={hobbiesMenu} />

                        <div>
                            <figure>
                                <img src=".\img\png\bookmark_black_24dp 1.png" alt="" />
                            </figure>
                        </div>
                        <div>
                            <figure>
                                <img src=".\img\png\Product 3.png" alt="" />
                            </figure>
                        </div>
                        <div>
                            <button className='btn-primary'>Sign In</button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
