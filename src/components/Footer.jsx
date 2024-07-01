import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className=''>
                <div className='footer-link main-container flex justify-between text-sm my-14 md:px-20 md:flex-row flex-col'>
                    {/* <div className='footer-link-list  flex justify-between w-3/5'> */}
                    <ul>
                        <li className='foter-link-heading'>Hobbycue</li>
                        <li>About Us</li>
                        <li>Our Services</li>
                        <li>Work with Us</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul>
                        <li className='foter-link-heading'>How Do I</li>
                        <li>Sign Up</li>
                        <li>Add a Listing</li>
                        <li>Claim Listing</li>
                        <li>Post a Query</li>
                        <li>Add a Blog Post</li>
                        <li>Other Queries</li>
                    </ul>
                    <ul>
                        <li className='foter-link-heading'>Quick Links</li>
                        <li>Listings</li>
                        <li>Blog Posts</li>
                        <li>Shop / Store</li>
                        <li>Community</li>
                    </ul>
                    {/* </div> */}
                    <div className='footer-link-social md:w-2/5 w-full flex flex-col justify-between'>
                        <div>
                            <div className='foter-link-heading'>Social Media</div>
                            <div className='social-icons flex items-center justify-between'>
                                <figure className='icon'>
                                    <img src="./img/svg/104498_facebook_icon 1.svg" alt="" />
                                </figure>
                                <figure  className='icon'>
                                    <img src="./img/svg/5296514_bird_tweet_twitter_twitter logo_icon 3.svg" alt="" />
                                </figure>
                                <figure  className='icon'>
                                    <img src="./img/svg/5335781_camera_instagram_social media_instagram logo_icon 1.svg" alt="" />
                                </figure>
                                <figure  className='icon'>
                                    <img src="./img/svg/5279116_pin_pinterest_inspiration_pinterest logo_icon 1.svg" alt="" />
                                </figure>
                                <figure  className='icon'>
                                    <img src="./img/svg/843777_google_google+_plus_icon 1.svg" alt="" />
                                </figure>
                                <figure  className='icon'>
                                    <img src="./img/svg/4375133_logo_youtube_icon 1.svg" alt="" />
                                </figure>
                                <figure  className='icon'>
                                    <img src="./img/svg/4375108_logo_telegram_icon 1.svg" alt="" />
                                </figure>
                                <figure  className='icon'>
                                    <img src="./img/svg/1564504_email_letter_mail_message_icon 1.svg" alt="" />
                                </figure>
                            </div>
                        </div>
                        <div>
                            <div className='foter-link-heading'>Invite Friends</div>
                            <form action="#"
                                className='outline outline-1 outline-gray-300 flex justify-center rounded-md overflow-hidden'>
                                <input type="text"
                                    placeholder='Search here...'
                                    className='px-3 w-full outline-none' />
                                <button type="submit">
                                    <div className='bg-[#8064A2] py-2 px-3 text-white'>
                                        <span>Invite</span>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer-creadit bg-[#F7F5F9] h-[78px] flex justify-center items-center">
                    <span>&copy;LordJayanta</span>
                </div>
            </footer>
        </div>
    )
}

export default Footer
