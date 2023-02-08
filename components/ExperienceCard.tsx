import React from 'react';
import { motion } from 'framer-motion';

export default function ExperienceCard() {
  {
    /* 
    Software Engineer, IKEA Digital, 2019-2023
    Tech Lead, Web/Usability team, Axis Communications – 2017-2018
    Designer, Art Director Popolo-L12, Malmö – 2008-2016
    Designer, Art Director 2LK AB, Malmö – 2001-2007
  */
  }
  return (
    <article className="snap-center overflow-hidden flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full md:w-[600px] xl:w-[980px]  bg-[#292929] py-10 p-0 hover:opacity-100 opacity-90 cursor-pointer transition-opacity duration-200 max-h-[100%] md:max-h-[80%]">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-32 w-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={'/images/survival.png'}
        alt={'2LK'}
      />
      <div className="px-5 md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">Designer</h4>
        <p className="font-bold text-xl md:text-2xl mt-1">2LK</p>
        <div className="flex space-x-2 m-y-2 mt-5">
          <img
            className="h-10 w-10 rounded-full"
            src="/images/UXlogo.png"
            alt="UX Design"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/images/graphic-designer.png"
            alt="Graphic Design"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">2001 - 2007</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points</li>
        </ul>
      </div>
    </article>
  );
}
