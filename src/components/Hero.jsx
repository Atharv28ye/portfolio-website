import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const social = [Github, Linkedin, Mail];
  return (
    <section id="hero" className="min-h-screen relative flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 overflow-hidden">
      {/* background grid */}
      <div className="absolute inset-0 opacity-15 grid grid-cols-20 grid-rows-12">
        {Array.from({ length: 240 }).map((_, i) => (
          <motion.div key={i}
            className="border border-purple-500/20 hover:bg-purple-500/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.005, duration: 0.5 }}
          />
        ))}
      </div>

      {/* content */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } }
      }} className="relative z-10 text-center">
        <motion.span variants={{ hidden:{opacity:0,y:10},visible:{opacity:1,y:0}}}
          className="inline-block mb-4 px-4 py-2 border border-pink-500/30 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-600/20 text-sm font-medium"
        >🚀 Available for opportunities</motion.span>
        <motion.h1 variants={{ hidden:{opacity:0,y:-30},visible:{opacity:1,y:0}}}
          transition={{ duration:0.8 }} className="mb-4 text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-600 drop-shadow-md"
        >Atharv Puranik</motion.h1>
        <motion.p variants={{ hidden:{opacity:0,y:20},visible:{opacity:1,y:0}}}
          transition={{ delay:0.2 }} className="mb-2 text-xl md:text-2xl text-gray-200"
        >AI-focused full-stack developer skilled in React, Python, cloud, and generative AI</motion.p>
        <motion.p variants={{ hidden:{opacity:0,y:20},visible:{opacity:1,y:0}}}
          transition={{ delay:0.4 }} className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto"
        >Building intelligent solutions • AWS Certified • Open to innovative opportunities</motion.p>

        {/* socials */}
        <div className="flex justify-center gap-4 mb-8">
          {social.map((Icon, i) => (
            <motion.a key={i} href={i<2?["https://github.com/Atharv28ye","https://linkedin.com/in/atharv-puranik-6627842b5"][i]: "#contact"} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale:1.2, rotate:360 }} transition={{ type:"spring", stiffness:300 }}
              className="p-3 bg-white/10 rounded-full"
            ><Icon size={24} /></motion.a>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {["#projects","#contact"].map((href,i)=>(
            <motion.a key={i} href={href}
              className={`py-3 px-8 font-semibold rounded-full shadow-lg ${i===0?"bg-gradient-to-r from-pink-500 to-purple-600 text-white":"border-2 border-white text-white"}`}
              whileHover={{ scale:1.05 }} transition={{ ease:"easeInOut" }}
            >{i===0?"View Projects":"Let's Connect"}</motion.a>
          ))}
        </div>
      </motion.div>

      {/* scroll */}
      <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div animate={{ y:[0,10,0] }} transition={{ duration:2, repeat:Infinity }}>
          <ChevronDown size={32} className="text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
