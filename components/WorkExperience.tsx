import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const experienceItems = [
  {
    jobtitle: 'Senior Software Engineer',
    organisation: 'IKEA Digital (Ingka)',
    timespan: '2019-present',
    image: '/images/ikea-logo.png',
    summarypoints: [['lorem', 'ipsum', 'dolor']],
  },
  {
    jobtitle: 'Tech Lead Drupal',
    organisation: 'Axis Communications',
    timespan: '2017-2018',
    image: '/images/axis-logo.png',
    summarypoints: [['lorem', 'ipsum', 'dolor']],
  },
  {
    jobtitle: 'Designer',
    organisation: 'Popolo',
    timespan: '2010-2016',
    image: '/images/slicksten.png',
    summarypoints: [['lorem', 'ipsum', 'dolor']],
  },
  {
    jobtitle: 'Designer',
    organisation: '2LK',
    timespan: '2001-2010',
    image: '/images/survival.png',
    summarypoints: [['lorem', 'ipsum', 'dolor']],
  },
];

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
        {experienceItems.map((item, index) => (
          <ExperienceCard
            jobtitle={item.jobtitle}
            organisation={item.organisation}
            timespan={item.timespan}
            summarypoints={item.summarypoints}
            image={item.image}
            key={index}
          />
        ))}
      </div>
    </motion.div>
  );
}
