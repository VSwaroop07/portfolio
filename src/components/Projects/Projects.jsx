import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../../dataset/projects';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors duration-300 flex flex-col h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="p-8 flex flex-col h-full relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-xl bg-zinc-800/50 ${project.color} bg-opacity-10`}>
                        <project.icon size={28} className={project.color} />
                    </div>
                    <div className="flex gap-3">
                        <a href="#" className="p-2 text-zinc-500 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href={project.link} className="p-2 text-zinc-500 hover:text-white transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                </h3>

                <p className="text-zinc-400 mb-6 leading-relaxed flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 text-xs font-medium text-zinc-400 bg-zinc-800/50 rounded-full border border-zinc-700/50">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".project-card", {
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
        <section id="projects" ref={containerRef} className="py-24 px-6 relative bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Poppins']">
                        Featured <span className="text-purple-400">Projects</span>
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        A selection of projects that showcase my ability to solve problems and build end-to-end solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
