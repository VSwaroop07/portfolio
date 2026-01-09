import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from '../SplitText'; // Assuming SplitText is in components root or I need to check where it is

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-text", {
                opacity: 0,
                y: 30,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
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
        <section id="about" ref={containerRef} className="min-h-[80vh] flex flex-col justify-center items-center py-20 px-6 relative">
            <div className="max-w-4xl mx-auto text-center z-10">
                <h2 className="about-text text-xl md:text-2xl font-semibold text-cyan-400 mb-6 tracking-wide uppercase">
                    About Me
                </h2>

                <h3 className="about-text text-4xl md:text-5xl font-bold text-white mb-8 leading-tight font-['Poppins']">
                    Building Scalable <br />
                    <span className="text-zinc-500">Digital Experiences.</span>
                </h3>

                <p className="about-text text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-10">
                    I am a Computer Engineering student and Full-Stack Developer passionate about
                    creating intuitive, performance-driven web applications. With a strong foundation
                    in the <span className="text-white">MERN stack</span> and a curiosity for <span className="text-white">DevOps</span> and <span className="text-white">Cloud Engineering</span>,
                    I bridge the gap between elegant design and robust backend logic.
                </p>

                <div className="about-text flex justify-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-3xl font-bold text-white">2+</span>
                        <span className="text-sm text-zinc-500 uppercase tracking-widest">Years Exp.</span>
                    </div>
                    <div className="w-px h-12 bg-zinc-800"></div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-3xl font-bold text-white">10+</span>
                        <span className="text-sm text-zinc-500 uppercase tracking-widest">Projects</span>
                    </div>
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-10 w-64 h-64 bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
        </section>
    );
};

export default About;
