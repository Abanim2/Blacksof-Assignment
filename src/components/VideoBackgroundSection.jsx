import React from 'react';

const VideoBackgroundSection = () => {
    return (
        <section className="relative w-full h-screen">
            <div className="absolute top-0 left-0 w-full h-full">

                <video autoPlay muted loop playsInline className="h-full w-full object-cover object-center">
                    <source src="https://supreme-group.vercel.app/static/media/automotive.224e7418884105595114.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                <h6 className="text-white text-2xl md:text-4xl font-bold text-center">
                    Soft Trims and <span className='text-cyan-400'>NVH Solutions</span>
                    <div>
                        for seamless rides
                    </div>
                </h6>
            </div>
        </section>
    );
};

export default VideoBackgroundSection;
