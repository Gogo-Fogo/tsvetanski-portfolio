"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, GitFork, Lightbulb, Car, ScrollText, Gamepad2, Orbit } from 'lucide-react';

const projects = [
  {
    title: "Guilty As Arrr",
    description: "Real-time spatial audio attenuation for multi-user social deduction.",
    tags: ["Networked Multiplayer", "Photon Fusion", "Spatial Audio"],
    icon: <GitFork className="w-6 h-6" />
  },
  {
    title: "VR Dirt Bike Game",
    description: "Immersive training for smart and safe driving practices.",
    tags: ["VR Safety Sim", "Educational VR", "HCI"],
    icon: <Lightbulb className="w-6 h-6" />
  },
  {
    title: "VR Car Drift/Driving Simulator",
    description: "High-fidelity spatial interaction and vehicle dynamics in a night city environment.",
    tags: ["VR Driving Sim", "Vehicle Physics", "Spatial Input"],
    icon: <Car className="w-6 h-6" />
  },
  {
    title: "Fallout Mod",
    description: "Overhauled game level demonstrating world-building and existing IP adaptation.",
    tags: ["Level Design", "Environmental Storytelling", "Team Collaboration"],
    icon: <ScrollText className="w-6 h-6" />
  },
  {
    title: "Shonen TCG Game",
    description: "Developing a robust 3D multiplayer trading card game prototype.",
    tags: ["Multiplayer Gamedev", "3D Card Mechanics", "Game Systems"],
    icon: <Gamepad2 className="w-6 h-6" />
  },
  {
    title: "VR Patapon Game (GDD)",
    description: "Conceptualizing an innovative VR rhythm-strategy game.",
    tags: ["VR Game Design", "GDD", "Rhythm-based"],
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