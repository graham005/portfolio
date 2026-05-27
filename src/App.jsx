import { useEffect, useState } from 'react'
import {
  FaBars,
  FaBriefcase,
  FaEnvelope,
  FaFileAlt,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaRegUser,
  FaTimes,
} from 'react-icons/fa';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import PageTransition from './components/PageTransition';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [accent] = useState('#2e6bff');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobileNavOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileNavOpen]);
  

  return(
    <div className="min-h-screen bg-[var(--bg)] text-white" style={{ ['--theme-accent']: accent }}>
      <PageTransition>
        <main className="mx-auto flex min-h-screen w-full max-w-[1680px] flex-col gap-4 p-3 sm:p-5 lg:flex-row lg:gap-8 lg:p-8">
          <button
            type="button"
            onClick={() => setIsMobileNavOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMobileNavOpen}
            aria-controls="mobile-sidebar"
            className="fixed left-4 top-4 z-40 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-[var(--panel)] text-[var(--light)] shadow-lg transition hover:bg-[var(--muted)] lg:hidden"
          >
            <FaBars className="text-base" />
          </button>

          {isMobileNavOpen && (
            <button
              type="button"
              onClick={() => setIsMobileNavOpen(false)}
              aria-label="Close navigation menu overlay"
              className="fixed inset-0 z-40 bg-black/70 lg:hidden"
            />
          )}

          <aside
            id="mobile-sidebar"
            className={`fixed inset-y-0 left-0 z-50 h-screen w-[260px] max-w-[86vw] shrink-0 transform transition-transform duration-300 lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] lg:w-[240px] lg:translate-x-0 ${
              isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="h-full overflow-hidden rounded-2xl border border-white/10 bg-[var(--panel)] shadow-[0_30px_80px_rgba(0,0,0,0.45)] lg:rounded-none">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-white/8 px-4 py-3 sm:hidden">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--light)]">
                    Enoch Graham
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsMobileNavOpen(false)}
                    aria-label="Close navigation menu"
                    className="inline-flex h-8 w-8 items-center justify-center rounded border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10"
                  >
                    <FaTimes className="text-sm" />
                  </button>
                </div>

                <div className="relative hidden h-[150px] overflow-hidden bg-[#0f1812] sm:block sm:h-[150px] lg:h-[150px]">
                  <img
                    src="/static/images/profile.png"
                    alt="Enoch Graham profile"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_30%,rgba(2,9,6,0.7)_70%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-center sm:p-5">
                    <h3 className="text-[1.05rem] font-semibold tracking-[0.06em] text-[var(--light)] drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)] sm:text-[1.25rem] lg:text-[1.4rem]">
                      Enoch Graham
                    </h3>
                  </div>
                </div>

                <nav className="max-h-[340px] border-t border-white/8 bg-[#101814] lg:max-h-none lg:flex-1">
                  {[
                    { label: 'Home', icon: FaHome, to: '/' },
                    { label: 'About Me', icon: FaRegUser, to: '/about' },
                    { label: 'Skills', icon: FaFileAlt, to: '/skills' },
                    { label: 'Projects', icon: FaBriefcase, to: '/projects' },
                    { label: 'Contact', icon: FaEnvelope, to: '/contact' },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.to === '/'}
                        onClick={() => setIsMobileNavOpen(false)}
                        className={({ isActive }) => `flex items-center gap-3 border-b border-white/6 px-4 py-3 text-[0.72rem] uppercase tracking-[0.2em] transition sm:gap-4 sm:px-6 sm:py-4 sm:text-[0.9rem] ${
                          isActive
                            ? 'bg-[rgba(85,140,3,0.12)] text-[var(--light)]'
                            : 'text-white/45 hover:bg-white/5 hover:text-[var(--light)]'
                        }`}
                      >
                        {({ isActive }) => (
                          <>
                            <Icon className={`text-xl ${isActive ? 'text-[var(--accent)]' : 'text-white/55'}`} />
                            <span>{item.label}</span>
                          </>
                        )}
                      </NavLink>
                    )
                  })}
                </nav>

                <div className="border-t border-white/8 bg-[#101814] px-4 py-4 sm:px-6 sm:py-5">
                  <div className="flex justify-center items-center gap-3 text-sm text-white/55">
                    <a href="https://github.com/graham005" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-8 w-8 items-center justify-center border border-white/10 bg-white/5 transition hover:bg-white/10">
                      <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/enoch-graham" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center border border-white/10 bg-white/5 transition hover:bg-white/10">
                      <FaLinkedin />
                    </a>
                  </div>
                  <p className="mt-5 text-center text-xs leading-5 text-white/45">
                    2026 © Enoch Graham.
                    <br />
                    All Right Reserved.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          <section className="flex-1">
            <AnimatePresence mode="sync">
              <PageTransition key={location.pathname}>
                <div className="grid gap-4 pt-14 sm:gap-6 sm:pt-16 lg:pt-0">
                  <Routes location={location}>
                    <Route path="/" element={<Hero />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </div>
              </PageTransition>
            </AnimatePresence>
          </section>
        </main>
      </PageTransition>
    </div>
  )
}

export default App
