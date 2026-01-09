import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../../dataset/skills';

gsap.registerPlugin(ScrollTrigger);

const SkillCategory = ({ title, items }) => (
    <div className="skill-category min-w-[280px] flex-1 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-700/50 transition-colors duration-300">
        <h3 className="text-lg font-semibold text-zinc-300 mb-6 flex items-center gap-2">
            {title}
        </h3>
        <div className="grid grid-cols-2 gap-4">
            {items.map((skill, idx) => (
                <div key={idx} className="flex flex-col gap-2 p-3 rounded-xl bg-black/20 hover:bg-zinc-800/30 transition-all duration-300 group">
                    <skill.icon size={28} className={`${skill.color} mb-1 transition-transform group-hover:scale-110 duration-300`} />
                    <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors font-medium">
                        {skill.name}
                    </span>
                </div>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".skill-category", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="skills" ref={containerRef} className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Poppins']">
                        Technical <span className="text-cyan-400">Stack</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        A curated set of tools and technologies I use to build scalable, high-performance applications.
                    </p>
                </div>

                <div className="flex flex-wrap gap-6 justify-center">
                    <SkillCategory title="Languages" items={skills.languages} />
                    <SkillCategory title="Frontend" items={skills.frontend} />
                    <SkillCategory title="Backend" items={skills.backend} />
                    <SkillCategory title="Database" items={skills.database} />
                    <SkillCategory title="Tools & Cloud" items={skills.tools} />
                </div>
            </div>
        </section>
    );
};

export default Skills;
