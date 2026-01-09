import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/Logo.png';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const containerRef = useRef(null);
    const linksRef = useRef([]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
            const scrollPosition = window.scrollY + 200; // Offset for better detection

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section.charAt(0).toUpperCase() + section.slice(1));
                        return;
                    }
                }
            }
            setActiveSection('');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useGSAP(() => {
        // Scroll Animation
        gsap.to(containerRef.current, {
            y: -20, // Move up slightly
            scale: 0.9, // Make it slightly smaller
            duration: 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "100px top",
                scrub: true,
            }
        });

        if (isOpen) {
            gsap.to(containerRef.current, {
                height: 'auto',
                duration: 0.5,
                ease: 'power2.out',
            });
            gsap.fromTo(
                linksRef.current,
                { opacity: 0, y: -10 },
                { opacity: 1, y: 0, duration: 0.3, stagger: 0.1, delay: 0.2 }
            );
        } else {
            gsap.to(containerRef.current, {
                height: '70px',
                duration: 0.4,
                ease: 'power2.in',
            });
        }
    }, [isOpen]);

    return (
        <nav
            ref={containerRef}
            className="fixed top-12 left-1/2 -translate-x-1/2 z-[100] w-[95%] sm:w-[90%] max-w-[600px] rounded-3xl border border-white/10 bg-black/20 backdrop-blur-md px-6 py-3 shadow-lg overflow-hidden h-[70px]"
        >
            <div className="flex items-center justify-between h-[46px]"> {/* Fixed height for header part */}
                {/* Logo Section */}
                <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
                    <div className="text-white">
                        <img src={logo} alt="React Bits Logo" className="h-6 w-auto object-contain select-none" />
                    </div>
                </div>

                {/* Desktop Links Section */}
                <div className="hidden md:flex items-center gap-6">
                    {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={`text-sm font-medium transition-colors hover:text-white ${activeSection === item ? 'text-white' : 'text-gray-300'
                                }`}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Links Section */}
            <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => (
                    <a
                        key={item}
                        ref={(el) => (linksRef.current[index] = el)}
                        href={`#${item.toLowerCase()}`}
                        className={`text-sm font-medium transition-colors hover:text-white opacity-0 ${activeSection === item ? 'text-white' : 'text-gray-300'}`}
                        onClick={toggleMenu}
                    >
                        {item}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
