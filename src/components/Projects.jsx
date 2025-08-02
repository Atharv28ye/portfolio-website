import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  { name:"MOODIFY – AI Song Recommender", description:"Mood-based song suggestions using emojis & Spotify API.", github:"https://github.com/Atharv28ye/moodify-song-recommender" },
  { name:"AI Tokenizer Tool", description:"Estimate token usage & cost for GPT models in real-time.", github:"https://github.com/Atharv28ye/ai-tokenizer" },
  { name:"SmartStudy AI", description:"Full-stack GPT-powered study assistant for students.", github:"https://github.com/Atharv28ye/Smartstudyai" },
  { name:"Custom LLM: GPT Genius", description:"Built a custom LLM from scratch—tokenizer & math engine.", github:"https://github.com/Atharv28ye/llm-core-full" },
  { name:"Portfolio Website", description:"React + Tailwind portfolio showcasing my projects.", github:"https://github.com/Atharv28ye/portfolio-website" },
];

const variantsCard = {
  hidden:{ opacity:0, scale:0.9 },
  visible: i=>({ opacity:1, scale:1, transition:{ delay:i*0.2, type:"spring", stiffness:140 } })
};

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-24 px-6 md:px-12">
      <motion.h2 initial={{opacity:0,y:-30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}}
        className="mb-16 text-center text-4xl md:text-5xl font-extrabold text-gray-800"
      >Projects</motion.h2>

      <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p,i)=>(
          <motion.div key={p.name} custom={i} variants={variantsCard}
            whileHover={{ rotateX:-5, rotateY:5, translateZ:20 }} className="relative flex flex-col justify-between bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300"
          >
            <motion.div className="absolute top-0 left-0 h-1 w-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-br-lg"
              initial={{width:0}} animate={{width:"4rem"}} transition={{ delay: i*0.2+0.3, duration:0.6 }}
            />
            <h3 className="mt-4 text-2xl font-semibold text-indigo-600">{p.name}</h3>
            <p className="mt-2 text-gray-600 flex-grow">{p.description}</p>
            <motion.a href={p.github} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
              className="mt-6 inline-flex items-center gap-2 text-indigo-700 hover:text-indigo-900 font-medium"
            ><Github size={20}/> View on GitHub</motion.a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
