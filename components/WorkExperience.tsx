import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

export default function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className={
          'absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl text-center -mr-[20px]'
        }
      >
        Experience
      </h3>
      <div className="mt-10 w-full md:w-1/2 flex flex-row space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 md-p10">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}
