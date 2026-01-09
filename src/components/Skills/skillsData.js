
import {
    Code2, Server, Database, Cloud, Terminal,
    Cpu, Globe, Layout, Smartphone, Layers,
    GitBranch, Box, Shield, Zap, CircleDashed
} from 'lucide-react';

export const skillsData = {
    core: [
        {
            id: 1,
            name: "React.js",
            desc: "Component-based UI architecture",
            usedIn: ["Portfolio", "E-commerce Dashboard", "Social App"],
            icon: Code2,
            color: "text-cyan-400"
        },
        {
            id: 2,
            name: "Node.js",
            desc: "Scalable backend services & APIs",
            usedIn: ["Chat App", "Auth Service", "REST API"],
            icon: Server,
            color: "text-green-400"
        },
        {
            id: 3,
            name: "MongoDB",
            desc: "NoSQL schema design & aggregation",
            usedIn: ["User Data Store", "Inventory Mgmt"],
            icon: Database,
            color: "text-green-500"
        },
        {
            id: 4,
            name: "Tailwind CSS",
            desc: "Rapid utility-first styling",
            usedIn: ["Landing Pages", "Design Systems"],
            icon: Layout,
            color: "text-sky-400"
        }
    ],
    stacks: [
        {
            category: "Frontend",
            skills: [
                { name: "React", icon: Code2 },
                { name: "Three.js", icon: Box },
                { name: "GSAP", icon: Zap },
                { name: "Next.js", icon: Globe }
            ]
        },
        {
            category: "Backend",
            skills: [
                { name: "Node.js", icon: Server },
                { name: "Express", icon: Terminal },
                { name: "PostgreSQL", icon: Database },
                { name: "Redis", icon: Layers }
            ]
        },
        {
            category: "DevOps",
            skills: [
                { name: "Docker", icon: Box },
                { name: "AWS", icon: Cloud },
                { name: "CI/CD", icon: GitBranch },
                { name: "Nginx", icon: Shield }
            ]
        }
    ],
    learning: [
        { name: "Kubernetes", progress: 60 },
        { name: "GraphQL", progress: 40 },
        { name: "Rust", progress: 25 }
    ],
    experience: [
        {
            year: "2023-Present",
            role: "Full Stack Developer",
            skills: ["React", "Node.js", "AWS"]
        },
        {
            year: "2022-2023",
            role: "Frontend Intern",
            skills: ["HTML/CSS", "JavaScript", "Figma"]
        }
    ]
};
