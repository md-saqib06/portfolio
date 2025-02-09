// import React, { useState } from 'react';
import { ExternalLink, Mail, Github, Linkedin } from 'lucide-react';
import profilePhoto from '../assets/photo.jpg';

const Home = () => {
    const projects = [
        {
            title: "Qubit - The Business Fest Website",
            description: "Fully responsive event website built with React and TypeScript, achieving 1000+ registrations. Features seamless multi-page transitions and Firebase authentication.",
            tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
            github: "#",
            demo: "#"
        },
        {
            title: "Pegion Cloud - File Sharing",
            description: "Efficient file sharing service with 70% faster uploads using Multer and MongoDB. Includes email-based sharing functionality.",
            tech: ["Node.js", "Express.js", "MongoDB", "Multer"],
            github: "#",
            demo: "#"
        },
        {
            title: "Weather App",
            description: "Real-time weather forecast application providing instant updates using OpenWeather API with user-friendly data presentation.",
            tech: ["JavaScript", "OpenWeather API"],
            github: "#",
            demo: "#"
        }
    ];

    const skills = [
        "JavaScript",
        "TypeScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Firebase",
        "AWS",
        "Docker"
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white relative">
            {/* Fixed Background with wider coverage */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-3xl" />
                    <div className="absolute top-3/4 right-1/3 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl" />
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10">
                {/* Navbar */}
                <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
                    <div className="max-w-6xl mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src={profilePhoto}
                                    alt="Mohd Saqib"
                                    className="w-10 h-10 rounded-full object-cover border-2 border-green-400"
                                />
                                <span className="text-xl font-bold text-green-400">Mohd Saqib</span>
                            </div>
                            <div className="flex items-center gap-8">
                                <a href="#about" className="hover:text-green-400 transition-colors">About</a>
                                <a href="#projects" className="hover:text-green-400 transition-colors">Projects</a>
                                <a href="#experience" className="hover:text-green-400 transition-colors">Experience</a>
                                <a href="#resume" className="hover:text-green-400 transition-colors">Resume</a>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="min-h-screen flex items-center justify-center">
                    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
                        <div className="mb-8 flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-400/20 blur-xl rounded-full" />
                                <img
                                    src={profilePhoto}
                                    alt="Mohd Saqib"
                                    className="w-40 h-40 rounded-full object-cover border-4 border-green-400 relative z-10"
                                />
                            </div>
                        </div>
                        <h1 className="text-6xl font-bold mb-6">
                            <span className="text-green-400">Mohd</span> Saqib
                        </h1>
                        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                            Full Stack Developer specializing in modern web technologies. Currently pursuing BCA with a focus on creating impactful digital experiences.
                        </p>

                        {/* Social Links */}
                        <div className="flex justify-center gap-6 mb-12">
                            <a href="https://github.com/yourusername" className="text-gray-400 hover:text-green-400 transition-colors">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-green-400 transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="mailto:mohdsaqib.rx@gmail.com" className="text-gray-400 hover:text-green-400 transition-colors">
                                <Mail className="w-6 h-6" />
                            </a>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex justify-center gap-4">
                            <button className="px-8 py-3 bg-green-400 text-gray-900 rounded-full hover:bg-green-300 transition-colors font-medium">
                                Download Resume
                            </button>
                            <button className="px-8 py-3 border border-green-400 text-green-400 rounded-full hover:bg-green-400/10 transition-colors font-medium">
                                Contact Me
                            </button>
                        </div>
                    </div>
                </section>

                {/* Skills Marquee */}
                <div className="py-4 bg-gray-800/50 overflow-hidden">
                    <div className="flex gap-8 animate-marquee whitespace-nowrap">
                        <span className="text-gray-500">FULL STACK DEVELOPMENT</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-500">FRONTEND DEVELOPMENT</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-500">BACKEND DEVELOPMENT</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-500">API DEVELOPMENT</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-500">CLOUD DEPLOYMENT</span>
                    </div>
                </div>

                {/* About Section */}
                <section id="about" className="py-20">
                    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-green-400/20 blur-2xl rounded-full" />
                            <img
                                src={profilePhoto}
                                alt="Mohd Saqib"
                                className="rounded-2xl relative z-10 w-full object-cover shadow-xl"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold mb-6">
                                <span className="text-green-400">About</span> Me
                            </h2>
                            <p className="text-gray-400 mb-6">
                                Currently pursuing my Bachelor's in Computer Application at Guru Gobind Singh Indraprastha University,
                                I'm passionate about creating efficient and scalable web applications. With experience in both frontend
                                and backend development, I specialize in building modern web solutions using cutting-edge technologies.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-gray-800 text-green-400 rounded-full text-sm hover:bg-gray-700 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-20 bg-gray-800/50">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-12">
                            Featured <span className="text-green-400">Projects</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project) => (
                                <div key={project.title} className="bg-gray-900 rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-400 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="text-sm text-green-400 bg-gray-800 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.github} className="text-green-400 hover:text-green-300">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href={project.demo} className="text-green-400 hover:text-green-300">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-20">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-12">
                            Work <span className="text-green-400">Experience</span>
                        </h2>
                        <div className="space-y-8">
                            <div className="bg-gray-800/50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-green-400">Full Stack Developer</h3>
                                <p className="text-gray-400">Internware – The Internship Cell of IITM</p>
                                <p className="text-sm text-gray-500 mb-4">Nov 2023 - Present</p>
                                <ul className="list-disc list-inside text-gray-400 space-y-2">
                                    <li>Developed and deployed event websites for IITM-hosted fests using React, TypeScript, and Firebase</li>
                                    <li>Collaborated with cross-functional teams, ensuring on-time project delivery</li>
                                    <li>Implemented backend API integrations to enhance data processing and user interactions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold mb-6">
                            Let's Work <span className="text-green-400">Together</span>
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Currently seeking internship opportunities and open to collaboration on interesting projects.
                            Feel free to reach out!
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="mailto:mohdsaqib.rx@gmail.com" className="px-8 py-3 bg-green-400 text-gray-900 rounded-full hover:bg-green-300 transition-colors font-medium">
                                Email Me
                            </a>
                            <a href="tel:+917753949917" className="px-8 py-3 border border-green-400 text-green-400 rounded-full hover:bg-green-400/10 transition-colors font-medium">
                                Call Me
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;