import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      name: 'Jummy takeaway food',
      description: 'A UX Case Study of Jummy Takeaway Food',
      image: 'case-studies/jummy-cover.png',
      pdf: 'case-studies/jummy-ux-case-study.pdf',
    },
    {
      name: 'Dogify',
      description: 'A UX Case Study of Dogify',
      image: 'case-studies/dogify-cover.png',
      pdf: 'https://www.behance.net/gallery/177360683/UX-Case-Study-Dogify',
    },
    {
      name: 'Pets in need',
      description: 'A UX Case Study of Pets in need',
      image: 'case-studies/pets-in-need-cover.png',
      pdf: 'case-studies/pets-in-need-ux-case-study.pdf',
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20">
        {projects.map((project, index) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-6 items-center justify-center p-20 md-p-44 h-screen"
            key={index}
          >
            <a
              href={project.pdf}
              title="Case Study PDF"
              target="_blank"
              rel="noreferrer"
            >
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={project.image}
                alt={project.description}
              />
            </a>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                {project.name}
              </h4>

              <p className="text-lg text-center">
                <a
                  href={project.pdf}
                  title="Case Study PDF"
                  target="_blank"
                  rel="noreferrer"
                >
                  UX Case Study Process Deck
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
