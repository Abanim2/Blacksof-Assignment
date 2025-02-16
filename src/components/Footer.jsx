import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <div className='text-black bg-footer bg-no-repeat bg-cover bg-right-bottom blade-top-padding blade-bottom-padding border-t border-opacity-10 border-gray'>
            <div className='w-container max-w-screen-lg p-14'>
                <div>
                    <div>
                        <a href="/">
                            <img src="https://supreme-group.vercel.app/static/media/logo.68f5b8493efb88f7cd65756bf67a1f5b.svg" className='h-10 md:h-12 xlg:h-12' alt="Supreme logo" />
                        </a>
                    </div>
                    <div className='md:flex hidden md:flex-row flex-col items-start justify-between md:pr-10 lg:gap-20 sm:gap-10 gap-4 2xl:mt-10 mt-8'>
                        <ul className='grid sm:gap-5 gap-3 text-black list-none'>
                            <li class="mb-2 sg-translate font-semibold uppercase text-opacity-90">APPLICATION</li>
                            <li>
                                <a className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100' href="/">
                                    <span class="sg-translate">Apparel</span>
                                </a>
                            </li>
                            <li>
                                <a className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100' href="/">
                                    <span class="sg-translate">Automotive</span>
                                </a>
                            </li>
                            <li>
                                <a className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100' href="/">
                                    <span class="sg-translate">Filtration</span>
                                </a>
                            </li>
                            <li>
                                <a className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100' href="/">
                                    <span class="sg-translate">Customised Solutions</span>
                                </a>
                            </li>
                        </ul>
                        <ul className='grid sm:gap-5 gap-3 text-black list-none'>
                            <li class="mb-2 sg-translate font-semibold uppercase text-opacity-90">COMPANY</li>
                            <li>
                                <a className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100' href="/">
                                    <span class="sg-translate">Innovations</span>
                                </a>
                            </li>
                            <li>
                                <a className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100' href="/">
                                    <span class="sg-translate">Global Compentency</span>
                                </a>
                            </li>
                            <li>
                                <a className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100' href="/">
                                    <span class="sg-translate">About Us</span>
                                </a>
                            </li>
                            <li>
                                <a className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100' href="/">
                                    <span class="sg-translate">Contact Us</span>
                                </a>
                            </li>
                        </ul>
                        <ul className='grid sm:gap-5 gap-3 text-black list-none'>
                            <li class="mb-2 sg-translate font-semibold uppercase text-opacity-90">MORE</li>
                            <li>
                                <a className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100' href="/">
                                    <span class="sg-translate">Careers</span>
                                </a>
                            </li>
                            <li>
                                <a className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100' href="/">
                                    <span class="sg-translate">Privacy Policy</span>
                                </a>
                            </li>
                            <li>
                                <a className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100' href="/">
                                    <span class="sg-translate">Terms and Conditions</span>
                                </a>
                            </li>
                        </ul>
                        <ul className='grid sm:gap-5 gap-3 text-black list-none'>
                            <li class="mb-2 sg-translate font-semibold uppercase text-opacity-90">FOLLOW US</li>
                            <li>
                                <a className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100' href="/">
                                    <span class="sg-translate">Twitter</span>
                                </a>
                            </li>
                            <li>
                                <a className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100' href="/">
                                    <span class="sg-translate">LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100' href="/">
                                    <span class="sg-translate">Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a className='xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none decoration-from-font underline-offset-4 focus:text-opacity-100' href="/">
                                    <span class="sg-translate">Medium</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-between py-10'>
                    <p>@2023.All Rights Reserved.</p>
                    <p>Supreme house: 110, 16th Road, Chembur, Mumbai - 400071.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer