import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { Loader2, Calendar, Briefcase, ChevronDown } from 'lucide-react';


// 1. Proof-First Skill Card
export const ProofFirstCard = ({ skill }) => {
    const cardRef = useRef(null);

    const handleMouseEnter = () => {
        gsap.to(cardRef.current, { y: -5, duration: 0.3, ease: "power2.out" });
        gsap.to(cardRef.current.querySelector('.icon-glow'), { opacity: 1, scale: 1.2, duration: 0.3 });
    };

    const handleMouseLeave = () => {
        gsap.to(cardRef.current, { y: 0, duration: 0.3, ease: "power2.out" });
        gsap.to(cardRef.current.querySelector('.icon-glow'), { opacity: 0, scale: 1, duration: 0.3 });
    };

    const Icon = skill.icon;

    return (
        <div
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 overflow-hidden transition-colors hover:border-zinc-700 group w-full h-full flex flex-col justify-between"
        >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <Icon size={120} className={skill.color} />
            </div>

            <div className="relative z-10 flex flex-col gap-3">
                <div className="flex items-center gap-3 mb-2">
                    <div className="relative">
                        <div className={`icon-glow absolute inset-0 blur-md opacity-0 ${skill.color} bg-current rounded-full transition-all`}></div>
                        <Icon size={32} className={`${skill.color} relative z-10`} />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100">{skill.name}</h3>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed">{skill.desc}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/50 relative z-10">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">Used In</span>
                <div className="flex flex-wrap gap-2 mt-2">
                    {skill.usedIn.map((project, idx) => (
                        <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 hover:bg-zinc-700 transition-colors cursor-default">
                            {project}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

// 2. Skill Depth Indicator Card
export const DepthIndicatorCard = ({ skill, depth }) => {
    // depth: "Core", "Advanced", "Working", "Learning"
    const colors = {
        Core: "border-l-purple-500 bg-purple-500/5",
        Advanced: "border-l-cyan-500 bg-cyan-500/5",
        Working: "border-l-green-500 bg-green-500/5",
        Learning: "border-l-yellow-500 bg-yellow-500/5"
    };

    return (
        <div className={`bg-zinc-900 border-zinc-800 border rounded-r-xl border-l-4 p-4 ${colors[depth] || 'border-l-gray-500'}`}>
            <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-zinc-200">{skill.name}</h4>
                <span className="text-xs font-mono opacity-60 uppercase tracking-wider">{depth}</span>
            </div>
            <p className="text-sm text-zinc-400">{skill.desc}</p>
        </div>
    );
};

// 3. Stack Cards
export const StackCard = ({ stack }) => {
    const cardRef = useRef(null);

    const handleMouseEnter = () => {
        gsap.to(cardRef.current, { scale: 1.02, duration: 0.3, ease: "back.out(1.7)" });
    };

    const handleMouseLeave = () => {
        gsap.to(cardRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    return (
        <div
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col hover:bg-zinc-800/30 transition-colors h-full"
        >
            <h3 className="text-lg font-semibold text-zinc-200 mb-6 border-b border-zinc-800 pb-2 w-full">{stack.category}</h3>
            <div className="grid grid-cols-2 gap-4 w-full">
                {stack.skills.map((s, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 group p-2 rounded-lg hover:bg-zinc-800/50 transition-colors">
                        <s.icon size={24} className="text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                        <span className="text-xs text-zinc-500 group-hover:text-zinc-300 font-medium">{s.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 4. Timeline Skill Card
export const TimelineCard = ({ experience }) => {
    return (
        <div className="relative pl-6 py-2 border-l border-zinc-800 hover:border-zinc-700 transition-colors group">
            <div className="absolute -left-[5px] top-3 w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-cyan-500 transition-colors"></div>
            <span className="text-xs text-zinc-500 font-mono mb-1 block">{experience.year}</span>
            <h4 className="text-zinc-200 font-bold text-lg">{experience.role}</h4>
            <div className="flex gap-2 mt-2 flex-wrap">
                {experience.skills.map((s, i) => (
                    <span key={i} className="text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                        {s}
                    </span>
                ))}
            </div>
        </div>
    );
};

// 5. Learning-in-Progress Card
export const LearningCard = ({ learning }) => {
    return (
        <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-5 flex flex-col gap-3 hover:bg-zinc-900/60 transition-colors">
            <div className="flex justify-between items-center">
                <h4 className="font-semibold text-zinc-300 flex items-center gap-2">
                    {learning.name}
                </h4>
                <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
                    <Loader2 size={10} className="animate-spin" /> Learning
                </span>
            </div>
            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div
                    className="h-full bg-cyan-500/50 rounded-full"
                    style={{ width: `${learning.progress}%` }}
                ></div>
            </div>
        </div>
    );
};

// 6. Project-Anchored Skill Card (Expandable)
export const ProjectAnchorCard = ({ skill, project, description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const Icon = skill.icon;

    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden cursor-pointer hover:border-zinc-600 transition-colors"
        >
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Icon size={20} className="text-cyan-400" />
                    <span className="font-bold text-zinc-200">{skill.name}</span>
                    <span className="text-zinc-600">→</span>
                    <span className="text-zinc-400">{project}</span>
                </div>
                <ChevronDown size={16} className={`text-zinc-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>

            {isOpen && (
                <div className="px-4 pb-4 pt-0 text-sm text-zinc-400 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="pl-8 border-l-2 border-zinc-800 ml-2 py-2">
                        {description}
                    </p>
                </div>
            )}
        </div>
    );
};


