import React from 'react';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-[#ef060f] to-[#b60cf2]">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-4"
          >
            Discover, Create, Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg lg:text-xl text-white mb-8"
          >
            Welcome to Storyverse, where stories unfold and storytellers unite. Immerse yourself in captivating narratives across genres, or craft your own tales. Join a global community passionate about storytelling.
          </motion.p>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            href="#"
            className="bg-white-600 text-white py-2 px-4  text-sm lg:text-base font-semibold hover:bg-[#081A42] transition duration-300 ease-in-out"
          >
            Join Us
          </motion.a>
        </div>
        
        {/* Image */}
        <div className="lg:w-1/2 h-1/8">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="src/assets/newbg-.png"
            alt="Storyteller"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
