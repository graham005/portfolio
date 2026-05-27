import React, { useEffect, useRef } from 'react';
import { motion as Motion } from 'framer-motion';
import Typed from 'typed.js';

function Hero() {
  const typedRef = useRef(null);
  
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['SOFTWARE ENGINEER.', 'BACK-END DEVELOPER.', 'MOBILE DEVELOPER.'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    });
    
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Motion.section
      id="hero"
      className="lg:mt-10 relative overflow-hidden rounded-2xl border border-white/10 bg-[var(--panel)]/95 text-white shadow-[0_30px_80px_rgba(0,0,0,0.4)] sm:rounded-[2rem]"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_35%)]" />
      <div className="relative grid gap-6 p-5 sm:gap-8 sm:p-8 xl:grid-cols-[1.2fr_0.8fr] xl:items-center">
        <Motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05, duration: 0.5 }}>
          <p className="mb-3 text-[0.58rem] uppercase tracking-[0.4em] text-white/45 sm:mb-4 sm:text-[0.65rem] sm:tracking-[0.45em]">Home</p>
          <h2 className="text-3xl font-bold tracking-tight uppercase sm:text-5xl">ENOCH GRAHAM</h2>
          <div className="mt-4 text-lg font-medium text-[var(--theme-accent)] sm:mt-5 sm:text-2xl" style={{ fontFamily: 'Roboto Mono, monospace' }}>
            I'M A <span ref={typedRef}></span>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:mt-5 sm:leading-7 sm:text-base">
            I design and build practical software across web, mobile, and backend systems. This portfolio showcases selected work, skill highlights, and a direct way to get in touch.
          </p>
        </Motion.div>

        <Motion.div className="relative mx-auto w-full max-w-xs sm:max-w-sm" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08, duration: 0.55 }}>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 p-3">
            <img className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" src="/static/images/profile.png" alt="Enoch Graham profile" />
          </div>
        </Motion.div>
      </div>
    </Motion.section>
  );
}

export default Hero;