import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isSticky, setIsSticky] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsSticky(false);
            } else {
                setIsSticky(true);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full px-10 py-4 bg-white shadow-md z-50 transition-transform duration-300 ${isSticky ? 'transform translate-y-0' : 'transform -translate-y-full'
                }`}
        >
            <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                <div className="flex items-center">
                    <img src="https://supreme-group.vercel.app/static/media/logo.68f5b8493efb88f7cd65756bf67a1f5b.svg" alt="Logo" className="h-10" />
                </div>
                <div className="flex items-center space-x-4">
                    <button className="text-sm bg-blue-400 p-2 rounded-lg text-black hover:text-white">Contact Us</button>
                    <div className="flex space-x-2">
                        <button className="text-sm text-gray-600">IN</button>
                        <button className="text-sm text-gray-600">ENG</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
