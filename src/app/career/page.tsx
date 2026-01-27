"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, GitFork, Lightbulb, Car, ScrollText, Gamepad2, Orbit } from 'lucide-react';

const projects = [
  {
    title: "Repo X (Multiplayer Voice)",
    description: "Real-time spatial audio attenuation for multi-user environments. A social deduction prototype focused on networked voice latency and proximity chat.",
    tags: ["Networked Systems", "Photon Voice 2", "Unity"],
    icon: <GitFork className="w-6 h-6" />
  },
  {
    title: "VR Interaction Lab",
    description: "Precision interaction mechanics for hazardous material handling and assembly. A defense & safety protocol simulation.",
    tags: ["Human Factors", "XR Interaction Toolkit", "Hand Tracking"],
    icon: <Lightbulb className="w-6 h-6" />
  },
  {
    title: "Trash Been",
    description: "Rapid prototyping showcase. Built in 1 week (Winner of Breda Application). Demonstrates tight scope management and visual scripting systems.",
    tags: ["Technical Design", "Visual Scripting", "Rapid Prototyping"],
    icon: <Car className="w-6 h-6" />
  },
  // Add 3 more empty placeholders for the remaining projects to maintain grid structure for now
  {
    title: "Project Alpha",
    description: "Placeholder for future simulation or XR project.",
    tags: ["Simulation", "XR", "Future Project"],
    icon: <Gamepad2 className="w-6 h-6" />
  },
  {
    title: "Project Beta",
    description: "Placeholder for future simulation or XR project.",
    tags: ["Simulation", "XR", "Future Project"],
    icon: <ScrollText className="w-6 h-6" />
  },
  {
    title: "Project Gamma",
    description: "Placeholder for future simulation or XR project.",
    tags: ["Simulation", "XR", "Future Project"],
    icon: <Orbit className="w-6 h-6" />
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Career() {
  return (
    <main className="min-h-screen bg-white text-black p-8 md:p-24 font-sans selection:bg-black selection:text-white">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <Link href="/" className="group flex items-center space-x-2 text-sm font-medium text-gray-400 hover:text-black transition-colors duration-200">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>RETURN</span>
          </Link>
          <div className="mt-8">
            <h1 className="text-4xl font-bold tracking-tight">THE LAB</h1>
            <p className="text-gray-400 mt-2 font-medium">SIMULATION ENGINEERING & SPATIAL PROTOTYPING</p>
          </div>
        </header>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="group relative border border-gray-100 p-8 rounded-2xl hover:border-black transition-all duration-500 bg-[#fbfbfb] hover:bg-white flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-500">
                  {project.icon}
                </div>
                <h2 className="text-xl font-semibold mb-3 tracking-tight">{project.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-900 transition-colors duration-500">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] font-bold tracking-wider border border-gray-200 px-2 py-1 rounded-md uppercase text-gray-400 group-hover:border-black group-hover:text-black transition-colors duration-500">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}