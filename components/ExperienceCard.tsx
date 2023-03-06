import React from 'react';
import { motion } from 'framer-motion';

export default function ExperienceCard(props: any) {
  const {
    image = '',
    jobtitle = '',
    organisation = '',
    timespan = '',
    summarypoints = [],
  } = props;

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
        src={image}
        alt={'company'}
      />
      <div className="px-5 md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">{jobtitle}</h4>
        <p className="font-bold text-xl md:text-2xl mt-1">{organisation}</p>
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
        <p className="uppercase py-5 text-gray-300">{timespan}</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {summarypoints.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
