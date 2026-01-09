import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experience } from '../../dataset/experience';

gsap.registerPlugin(ScrollTrigger);

const ExperienceItem = ({ role, company, period, description, skills }) => (
    <div className="experience-item relative pl-8 md:pl-12 py-6 border-l w-full border-zinc-800 hover:border-cyan-500/50 transition-colors duration-300 group">
        <div className="absolute left-[-5px] top-8 w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-cyan-400 transition-colors duration-300 shadow-[0_0_0_4px_rgba(0,0,0,1)]"></div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{role}</h3>
            <span className="text-sm text-zinc-500 font-mono mt-1 sm:mt-0">{period}</span>
        </div>

        <h4 className="text-lg text-zinc-400 font-medium mb-4">{company}</h4>

        <p className="text-zinc-400 leading-relaxed mb-4 max-w-3xl">
            {description}
        </p>

        <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
                <span key={idx} className="text-xs px-2 py-1 bg-zinc-900 text-zinc-500 rounded border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Experience = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".experience-item", {
                x: -30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" ref={containerRef} className="py-24 px-6 bg-zinc-950/30">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 font-['Poppins'] text-center">
                    Professional <span className="text-cyan-400">Journey</span>
                </h2>

                <div className="flex flex-col relative">
                    {experience.map((exp) => (
                        <ExperienceItem key={exp.id} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
