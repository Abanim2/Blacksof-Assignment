import React, { useState } from 'react';

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic goes here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="flex bg-blue-600 text-white p-10 space-x-10">
            {/* Address Section */}
            <div className="flex-1 space-y-8 p-6">
                <h2 className="text-4xl font-bold">Contact Us</h2>
                <hr className='w-14'/>
                <p>For general enquiries</p>
                <p><b>Address :</b><div>110, 16th Road, Chembur, Mumbai - 400071</div></p>
                <p><b>Phone :</b><div>+91 22 25208822</div></p>
                <p><b>Email :</b><div>info@supremegroup.co.in</div></p>
            </div>

            {/* Form Section */}
            <div className="flex-1 text-black p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="FullName"
                            className="w-full p-3 focus:outline-none bg-inherit text-white placeholder-white border-b-2 focus:border-white border-blue-500"
                            required
                        />

                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full p-3 focus:outline-none bg-inherit text-white placeholder-white border-b-2 focus:border-white border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="w-full p-3 focus:outline-none bg-inherit text-white placeholder-white border-b-2 focus:border-white border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            className="w-full p-3 focus:outline-none bg-inherit text-white placeholder-white border-b-2 focus:border-white border-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="px-10 py-4 bg-blue-600 text-white hover:text-black font-semibold rounded-full hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 border-2"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GetInTouch;
