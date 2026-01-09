import {
    Code2, Server, Database, Cloud, Terminal,
    Layout, Globe, Box, Shield, Zap, CircleDashed,
    Cpu, Layers, GitBranch
} from 'lucide-react';

export const skills = {
    languages: [
        { name: "JavaScript (ES6+)", icon: Code2, color: "text-yellow-400" },
        { name: "Rust", icon: Box, color: "text-orange-500" },
        { name: "HTML5/CSS3", icon: Layout, color: "text-blue-400" },
    ],
    frontend: [
        { name: "React.js", icon: Code2, color: "text-cyan-400" },
        { name: "Next.js", icon: Globe, color: "text-white" },
        { name: "Tailwind CSS", icon: Layout, color: "text-sky-400" },
        { name: "Three.js", icon: Box, color: "text-gray-300" },
        { name: "GSAP", icon: Zap, color: "text-green-400" },
    ],
    backend: [
        { name: "Node.js", icon: Server, color: "text-green-500" },
        { name: "Express", icon: Terminal, color: "text-gray-400" },
        { name: "Socket.io", icon: Zap, color: "text-white" },
    ],
    database: [
        { name: "MongoDB", icon: Database, color: "text-green-500" },
        { name: "PostgreSQL", icon: Database, color: "text-blue-400" },
        { name: "Redis", icon: Layers, color: "text-red-500" },
    ],
    tools: [
        { name: "Docker", icon: Box, color: "text-blue-500" },
        { name: "AWS", icon: Cloud, color: "text-orange-400" },
        { name: "Git & GitHub", icon: GitBranch, color: "text-white" },
        { name: "Nginx", icon: Shield, color: "text-green-600" },
        { name: "Kubernetes", icon: CircleDashed, color: "text-blue-400" },
    ]
};
