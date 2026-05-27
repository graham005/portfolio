import React from 'react';
import { motion as Motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import cvFile from '../assets/Enoch Graham CV.pdf';

export default function About() {
  const personal = {
    name: 'Enoch Graham',
    title: 'Software Engineer',
    location: 'Nairobi, Kenya',
    email: 'enochgraham003@outlook.com',
    phone: '+254 790 482 014'
  };

  const skills = ['Node.js', 'Express', 'C# / .NET', 'TypeScript', 'React', 'Flutter', 'PostgreSQL', 'MongoDB', 'Docker', 'CI/CD'];

  const experience = [
    {
      role: 'Freelance Developer (Upwork & Fiverr)',
      company: 'Freelance',
      period: '2022 - Present',
      bullets: [
        'Delivered 20+ freelance projects across web, mobile and backend platforms.',
        'Worked directly with startups and small businesses to scope and ship MVPs and production apps.',
        'Maintained 5-star client ratings through clear communication and timely delivery.'
      ]
    },
    {
      role: 'Backend Engineer',
      company: 'Elderman  Labs',
      period: '2022 - Present',
      bullets: [
        'Designed and implemented microservices for payments and user management.',
        'Improved API throughput by 40% through query optimization and caching.'
      ]
    },
    {
      role: 'Mobile Engineer',
      company: 'Blue Apps',
      period: '2019 - 2022',
      bullets: [
        'Built cross-platform Flutter apps used by 50k+ users.',
        'Integrated analytics and CI pipeline for automated releases.'
      ]
    }
  ];

  return (
    <Motion.section
      id="about"
      className="relative rounded-2xl border border-white/10 bg-[var(--panel)]/95 p-5 text-white shadow-[0_20px_40px_rgba(0,0,0,0.35)] sm:rounded-[1.25rem] sm:p-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl">
        <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.02, duration: 0.38 }}>
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/45 sm:text-sm sm:tracking-[0.45em]">About Me</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">{personal.name}</h2>
          <p className="mt-2 text-base font-medium text-[var(--light)] sm:text-lg">{personal.title} — building reliable backend systems and delightful user experiences.</p>
        </Motion.div>

        <div className="mt-6 space-y-6">
          <div className="prose max-w-none text-white/75">
            <Motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
              I'm a pragmatic software engineer with experience across backend services, mobile applications, and web
              frontends. I enjoy turning complex problems into elegant, maintainable solutions. My day-to-day work
              involves designing APIs, optimizing data models, and collaborating closely with product and design teams
              to deliver user-centered features.
            </Motion.p>

            <Motion.p className="mt-4" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.08 }}>
              Outside of work I mentor junior engineers, contribute to open-source projects, and keep up with modern
              infrastructure patterns like containerization and observability.
            </Motion.p>
          </div>

          <Motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.48 }}>
            <h3 className="text-xl font-semibold">Key Skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <Motion.span key={s} className="rounded-full border border-white/8 bg-white/3 px-3 py-1 text-sm text-white/90" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.38, delay: i * 0.04 }}>
                  {s}
                </Motion.span>
              ))}
            </div>
          </Motion.div>

          <div>
            <h3 className="text-lg font-semibold sm:text-xl">Selected Experience</h3>
            <div className="mt-3 space-y-4">
              {experience.map((exp, idx) => (
                <Motion.div
                  key={exp.role}
                  className="rounded-lg border border-white/6 bg-black/20 p-4"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="text-base font-medium sm:text-lg">{exp.role}</div>
                      <div className="text-sm text-white/70">{exp.company}</div>
                    </div>
                    <div className="text-sm text-white/60">{exp.period}</div>
                  </div>
                  <ul className="mt-3 list-disc list-inside text-white/70">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </Motion.div>
              ))}
            </div>
          </div>

          <Motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.45 }}>
            <h3 className="text-xl font-semibold">Education</h3>
            <p className="mt-2 text-white/75">B.Sc. Computer Science - Kirinyaga University</p>
            <p className="mt-2 text-white/75">Software Development - Teach2Give</p>
            <p className="mt-2 text-white/75">Mobile Development - Power Learn Project</p>
          </Motion.div>

          <Motion.div className="mt-4" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.45 }}>
            <a href={cvFile} download="Enoch Graham CV.pdf" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-black transition hover:opacity-95">
              <FaDownload />
              Download Resume
            </a>
          </Motion.div>
        </div>
      </div>
    </Motion.section>
  );
}
