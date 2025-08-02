import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const contacts = [
  { icon:<Phone className="w-6 h-6 text-white"/>, label:"+91 9136114728", link:null },
  { icon:<Mail className="w-6 h-6 text-white"/>, label:"puranikatharv18@gmail.com", link:"mailto:puranikatharv18@gmail.com" },
  { icon:<Linkedin className="w-6 h-6 text-white"/>, label:"linkedin.com/in/atharv-puranik-6627842b5", link:"https://www.linkedin.com/in/atharv-puranik-6627842b5/" },
  { icon:<Github className="w-6 h-6 text-white"/>, label:"github.com/Atharv28ye", link:"https://github.com/Atharv28ye" },
];

const itemVariants = { hidden:{ opacity:0, x:-20 }, visible:i=>({ opacity:1, x:0, transition:{ delay:i*0.2, type:"spring", stiffness:140 } }) };

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gradient-to-br from-purple-800 to-pink-600 py-24 px-6 md:px-12 overflow-hidden">
      <motion.div className="absolute -left-20 -top-20 w-48 h-48 bg-pink-500 rounded-full opacity-20 animate-pulse"
        animate={{ scale:[1,1.2,1] }} transition={{ repeat:Infinity, duration:6 }} />
      <motion.div className="absolute -right-20 bottom-10 w-64 h-64 bg-purple-500 rounded-full opacity-20 animate-pulse delay-200"
        animate={{ scale:[1,1.2,1] }} transition={{ repeat:Infinity, duration:7 }} />

      <motion.h2 initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}}
        className="mb-8 text-center text-4xl md:text-5xl font-extrabold text-white"
      >Get In Touch</motion.h2>
      <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.3}}
        className="mb-12 text-center text-gray-200 max-w-2xl mx-auto"
      >Whether you have a project idea, collaboration proposal, or just want to say hello, I’m always open to connecting!</motion.p>

      <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} className="max-w-md mx-auto grid gap-6">
        {contacts.map((c,i)=>(
          <motion.a key={i} custom={i} variants={itemVariants} href={c.link||"#"} target={c.link?"_blank":undefined} rel={c.link?"noopener noreferrer":undefined}
            whileHover={{ scale:1.03 }} className="flex items-center gap-4 p-4 bg-white/10 rounded-xl shadow-lg backdrop-blur-md transition"
          >
            <div className="p-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full">{c.icon}</div>
            <span className="text-white font-medium">{c.label}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
