import { MapPin, Phone, ShoppingCart } from 'lucide-react';

export const projects = [
    {
        id: 1,
        title: "Uber Clone",
        description: "A full-featured ride booking application with real-time tracking.",
        tech: ["MERN Stack", "Socket.io", "Mapbox", "Tailwind"],
        icon: MapPin,
        color: "text-green-400",
        link: "#", // Placeholder
        featured: true
    },
    {
        id: 2,
        title: "Contacts App",
        description: "Smart contact management system with Firebase authentication and real-time database updates.",
        tech: ["React.js", "Firebase", "Context API"],
        icon: Phone,
        color: "text-blue-400",
        link: "#",
        featured: false
    },
    {
        id: 3,
        title: "CarsWorld",
        description: "Comprehensive e-commerce platform for automotive parts and accessories.",
        tech: ["React.js", "Node.js", "MongoDB", "Redux"],
        icon: ShoppingCart,
        color: "text-red-400",
        link: "#",
        featured: false
    }
];
