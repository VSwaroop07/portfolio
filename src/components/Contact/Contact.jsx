import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-content", {
                y: 30,
                opacity: 0,
                duration: 1,
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
        <section id="contact" ref={containerRef} className="py-32 px-6 flex flex-col items-center justify-center bg-black relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-black to-black pointer-events-none"></div>

            <div className="contact-content max-w-3xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-['Poppins'] tracking-tight">
                    Let's Build Something <br />
                    <span className="text-cyan-400">Extraordinary.</span>
                </h2>

                <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <a
                    href="mailto:dev.swaroop.2004@gmail.com"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-cyan-400 transition-colors duration-300 group"
                >
                    Say Hello
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="mt-16 flex justify-center gap-8">
                    <a href="https://github.com/vswaroop07" className="text-zinc-500 hover:text-white transition-colors duration-300">
                        <Github size={24} />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/swaroop-vyawahare/" className="text-zinc-500 hover:text-white transition-colors duration-300">
                        <Linkedin size={24} />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="mailto:dev.swaroop.2004@gmail.com" className="text-zinc-500 hover:text-white transition-colors duration-300">
                        <Mail size={24} />
                        <span className="sr-only">Email</span>
                    </a>
                </div>

                <div className="mt-24 text-sm text-zinc-600">
                    <p>© 2026 Swaroop Vyawahare. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
