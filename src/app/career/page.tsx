"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, GitFork, Lightbulb, Car, ScrollText, Gamepad2, Orbit } from 'lucide-react';

const projects = [
  {
    title: "Repo X (Pirate Social Deduction)",
    description: "Multiplayer prototype focused on spatial voice chat, proximity tuning, and social presence systems for group play.",
    tags: ["Photon Voice", "Multiplayer Systems", "Spatial Audio"],
    icon: <GitFork className="w-6 h-6" />
  },
  {
    title: "VR Interaction Lab",
    description: "Focused XR interactions exploring hand tracking, precision tasks, and training-grade interaction affordances.",
    tags: ["XR Interaction", "Hand Tracking", "Human Factors"],
    icon: <Lightbulb className="w-6 h-6" />
  },
  {
    title: "Fallout Team Level Design",
    description: "Collaborative level design sprint emphasizing spatial flow, environmental storytelling, and player guidance.",
    tags: ["Level Design", "Team Production", "Environment"],
    icon: <ScrollText className="w-6 h-6" />
  },
  {
    title: "VR Microgames",
    description: "Two compact VR prototypes focused on interaction feel, comfort tuning, and spatial UI feedback.",
    tags: ["Spatial UX", "Rapid Prototyping", "Comfort Design"],
    icon: <Orbit className="w-6 h-6" />
  },
  {
    title: "Trash Been",
    description: "Rapidly shipped prototype that demonstrates scope control, gameplay loops, and production discipline.",
    tags: ["Rapid Prototyping", "Gameplay Systems", "Production"],
    icon: <Gamepad2 className="w-6 h-6" />
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
    <main className="min-h-screen bg-[#f7f6f3] text-black p-8 md:p-24 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <Link href="/" className="group flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-black transition-colors duration-200">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>RETURN</span>
          </Link>
          <div className="mt-8">
            <h1 className="text-4xl font-bold tracking-tight">THE LAB</h1>
            <p className="text-gray-500 mt-3 font-medium tracking-[0.2em] text-xs uppercase">Spatial Prototyping & XR Systems</p>
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
              className="group relative border border-transparent p-8 rounded-2xl transition-all duration-500 bg-white/70 hover:bg-white shadow-[0_20px_60px_rgba(15,15,15,0.06)] hover:shadow-[0_24px_70px_rgba(15,15,15,0.12)] flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-500 shadow-sm">
                  {project.icon}
                </div>
                <h2 className="text-xl font-semibold mb-3 tracking-tight">{project.title}</h2>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-500">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] font-semibold tracking-[0.2em] border border-gray-200 px-3 py-1 rounded-full uppercase text-gray-400 group-hover:border-black group-hover:text-black transition-colors duration-500">
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