import React from "react";
import { motion } from "framer-motion";

const skills = ["React.js","Tailwind CSS","JavaScript","TypeScript","Python","Streamlit","Flask","Node.js","Express","MongoDB","HTML5","CSS3","Postman","Git & GitHub","Framer Motion","Vite","OpenAI API","Deep Learning","Transformers","LLM Ops & Fine-Tuning","AI & ML","NLP","Data Analytics","AWS Cloud","Problem Solving","UI/UX Design","REST APIs","Collaborative Dev"];

const container = { hidden:{}, visible:{ transition:{ staggerChildren:0.1 } } };
const item = { hidden:{ opacity:0, scale:0.8, y:20 }, visible:{ opacity:1, scale:1, y:0, transition:{ type:"spring", stiffness:140 } } };

export default function Skills() {
  return (
    <section id="skills" className="relative bg-gradient-to-br from-purple-700 to-pink-600 py-24 px-6 md:px-12 overflow-hidden">
      <motion.div className="absolute -left-10 -top-10 w-40 h-40 bg-pink-500 rounded-full opacity-20 animate-pulse"
        animate={{ scale:[1,1.2,1] }} transition={{ repeat:Infinity, duration:4 }} />
      <motion.div className="absolute right-0 bottom-0 w-60 h-60 bg-purple-500 rounded-full opacity-20 animate-pulse delay-200"
        animate={{ scale:[1,1.2,1] }} transition={{ repeat:Infinity, duration:5 }} />

      <motion.h2 initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}}
        className="mb-12 text-center text-4xl md:text-5xl font-extrabold text-white"
      >Tech Stack & Tools</motion.h2>

      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{once:true}} className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((s,i)=>(
          <motion.div key={s} variants={item} whileHover={{ scale:1.1, y:-5 }} className="relative bg-white/20 backdrop-blur-md rounded-lg py-3 px-4 text-center text-white font-medium shadow-lg transition"
          >
            <motion.span initial={{}} animate={{ color:["#FFE4E1","#FFD1DC","#FFC0CB","#FFE4E1"] }} transition={{ repeat:Infinity, duration:4, delay:i*0.1 }}
              className="text-sm"
            >{s}</motion.span>
            <motion.div className="absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full" animate={{ x:[0,4,0], y:[0,-4,0] }} transition={{ repeat:Infinity, duration:2, delay:i*0.2 }} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
