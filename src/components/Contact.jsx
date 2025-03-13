import React from 'react';

const Contact = () => {
return (
    <section id="contact" className="py-12 bg-gray-100 text-white" style={{ backgroundColor: '#030014' }}>
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
            <div className="mb-8 text-center">
                <p>Get in touch or shoot me an email directly on <a href="mailto:enochgraham003@gmail.com" className="text-blue-500">enochgraham003@gmail.com</a></p>
            </div>

            <form className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Name</label>
                    <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
                    <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Email" />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Message</label>
                    <textarea id="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Message" rows="4"></textarea>
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    </section>
);
};

export default Contact;