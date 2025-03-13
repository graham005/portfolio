import React from 'react';
import backgroundImage from '../assets/images.jpg';

function Hero() {
  return (
    <section id='hero' className='flex text-white justify-center items-center h-screen' style={{ 
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), #030014), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
        <div className='container mx-auto text-center'>
            <h1 className='font-bold mb-5 text-[100px] leading-[120px]' style={{ fontFamily: 'Poppins, sans-serif' }}>ENOCH GRAHAM</h1>
            <p className='text-3xl' style={{ fontFamily: 'Roboto Mono, monospace' }}>SOFTWARE ENGINEER, BACKEND & APP DEVELOPER.</p>
            {/* <p className="mt-4">Diligent and detail-oriented software engineer with strong expertise in identifying and resolving software discrepancies through rigorous testing and debugging.</p> */}
        </div>
    </section>
  )
}

export default Hero