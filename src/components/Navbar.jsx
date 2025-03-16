import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.getElementById('hero').offsetHeight;
            setIsScrolled(window.scrollY > heroHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`p-4 w-full ${isScrolled ? 'text-white backdrop-blur-lg fixed top-0' : 'text-white bg-transparent absolute top-0'}`}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {!isScrolled && (
                        <>
                            <a href="/" className="text-sky-400 font-bold text-xl hover:opacity-60 transition-opacity duration-200" style={{ fontFamily: 'Roboto Mono, monospace' }}>Enoch Graham._</a>
                            <div className="flex-1 flex justify-start md:justify-center">
                                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-7">
                                    <li><a href="/" className="hover:text-sky-500 text-lg hover:opacity-75 transition-opacity duration-200" style={{ fontFamily: 'Roboto Mono, monospace' }}>Home</a></li>
                                    <li><a href="#expertise" className="hover:text-sky-500 text-lg hover:opacity-75 transition-opacity duration-200" style={{ fontFamily: 'Roboto Mono, monospace' }}>Expertise</a></li>
                                    <li><a href="#projects" className="hover:text-sky-500 text-lg hover:opacity-75 transition-opacity duration-200" style={{ fontFamily: 'Roboto Mono, monospace' }}>Projects</a></li>
                                    <li><a href="#contact" className="hover:text-sky-500 text-lg hover:opacity-75 transition-opacity duration-200" style={{ fontFamily: 'Roboto Mono, monospace' }}>Contact</a></li>
                                </ul>
                            </div>
                        </>
                    )}
                    {isScrolled && (
                        <div className="flex-1 flex justify-start md:justify-center">
                        <ul className="flex space-x-7">
                            <li><a href="/" className="text-sky-500 hover:opacity-75 transition-opacity duration-200" style={{ fontFamily: 'Roboto Mono, monospace' }}>Home</a></li>
                            <li><a href="#expertise" className="text-sky-500 hover:opacity-75 transition-opacity duration-200" style={{ fontFamily: 'Roboto Mono, monospace' }}>Expertise</a></li>
                            <li><a href="#projects" className="text-sky-500 hover:opacity-75 transition-opacity duration-200" style={{ fontFamily: 'Roboto Mono, monospace' }}>Projects</a></li>
                            <li><a href="#contact" className="text-sky-500 hover:opacity-75 transition-opacity duration-200" style={{ fontFamily: 'Roboto Mono, monospace' }}>Contact</a></li>
                        </ul>
                    </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;