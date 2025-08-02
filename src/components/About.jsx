import React from "react";
import { motion } from "framer-motion";
import { Star, ChevronRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 px-6 md:px-12 overflow-hidden">
      <motion.div className="absolute top-10 left-1/4 opacity-20 animate-pulse" animate={{ rotate:360 }} transition={{ repeat:Infinity, duration:8 }}>
        <Star size={48} className="text-pink-400" />
      </motion.div>
      <motion.div className="absolute bottom-12 right-1/3 opacity-20 animate-pulse" animate={{ rotate:-360 }} transition={{ repeat:Infinity, duration:10 }}>
        <Star size={64} className="text-purple-400" />
      </motion.div>

      <motion.h2 initial={{opacity:0,y:-30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}}
        className="mb-8 text-center text-4xl md:text-5xl font-extrabold text-gray-900"
      >About Me</motion.h2>

      <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={{
        hidden:{}, visible:{transition:{ staggerChildren:0.2 }}
      }} className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div variants={{hidden:{x:-50},visible:{x:0}}} className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            I’m <span className="font-semibold text-pink-600">Atharv Puranik</span>, an AI/ML innovator who built a custom LLM from scratch—mastering tokenizer design & math engines for cutting-edge language solutions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            My full-stack playground includes <span className="text-purple-600 font-medium">React.js</span>, <span className="text-purple-600 font-medium">Tailwind CSS</span>, <span className="text-purple-600 font-medium">TypeScript</span>, <span className="text-purple-600 font-medium">Node.js</span>, and <span className="text-purple-600 font-medium">Express</span>. I deploy AI pipelines with <span className="text-pink-600 font-medium">TensorFlow</span>, <span className="text-pink-600 font-medium">PyTorch</span>, and AWS services.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Beyond code, I craft intuitive UIs, write technical blogs, and optimize team workflows—pushing the boundary between creativity and technology.
          </p>
        </motion.div>
        <motion.div variants={{hidden:{x:50},visible:{x:0}}} className="space-y-8">
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">Core Expertise</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["React.js","Tailwind CSS","TypeScript","Python","Flask & Streamlit","Node.js & Express","MongoDB","AWS Cloud","TensorFlow","PyTorch","NLP & Generative AI","Git & GitHub"].map(skill=>(
                <li key={skill} className="flex items-center gap-2 bg-gray-100 hover:bg-pink-50 px-3 py-2 rounded-lg transition">
                  <ChevronRight className="text-pink-500" size={16}/> {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">AWS Academy Certifications</h3>
            <ul className="space-y-2 text-gray-700">
              {["Cloud Foundations","Cloud Architecting","Intro to Generative AI","ML Foundations"].map(cert=>(
                <li key={cert} className="flex items-center gap-2"><ChevronRight className="text-purple-500" size={16}/>{cert}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pink-500 to-purple-600 opacity-60"></div>
    </section>
  );
}
