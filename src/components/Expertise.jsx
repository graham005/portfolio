import React from 'react'
import { FaCode, FaReact, FaMobileAlt } from 'react-icons/fa';
import { MdMonitor } from "react-icons/md";

function Expertise() {
return (
    <section id='expertise' className='h-screen py-12 text-white' style={{ backgroundColor: '#030014' }}>
        <div className='container mx-auto px-4'>
            <h1 className='text-5xl font-bold mb-8 text-center p-4'>My Expertise</h1>
            <div className='flex flex-col md:flex-row gap-10 border border-white rounded-md p-4 shadow-md h-80 w-270 mx-auto'>
                <div className='md:w-1/3 p-5'>
                    <div className='flex justify-center mb-4'>
                        <FaCode className="h-12 w-12 text-blue-500" />
                    </div>
                    <h3 className='text-xl font-semibold text-center mb-2'>Software Development</h3>
                    <p className="text-center ">Experienced in both functional and OOP: Dart, Python, C#, JavaScript, C.</p>
                </div>
                <div className="md:w-1/3 p-5 border-l border-white">
                    <div className="flex justify-center mb-4">
                    <MdMonitor className="h-12 w-12 text-green-500"/>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">Web Dev</h3>
                    <p className="text-center">.NET WEB MVC, .NET WEB API</p>
                    <p className="text-center">Over 3 years of development experience in HTML, CSS, JS and .NET frameworks.</p>
                </div>
                <div className="md:w-1/3 p-5 border-l border-white">
                    <div className="flex justify-center mb-4">
                        <FaMobileAlt className="h-12 w-12 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">Flutter Dev</h3>
                    <p className="text-center">Android, iOS</p>
                    <p className="text-center">Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.</p>
                </div>
            </div>
        </div>
    </section>
)
}

export default Expertise