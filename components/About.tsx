import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center justify-evenly items-center md:px-10  md:text-left md:flex-row"
    >
      <h3
        className={
          'absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl -mr-[20px] mb-10'
        }
      >
        About
      </h3>
      <div className="mt-20 w-full flex flex-col items-center overflow-y-hidden">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          src={'/images/leander-background.jpg'}
          className={
            'mt-20 flex-shrink-0 w-32 h-32 rounded-full object-cover md:mb-0 md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
          }
        />
        <div
          className={
            'flex flex-col mt-[2rem] px-5 md:px-10 md:space-y-10 mb-20 mx-5 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 '
          }
        >
          <h4 className={'hidden md:flex md:text-2xl font-semibold'}>
            Here is a{' '}
            <span className={'underline decoration-[#F7AB0A]/50'}>little</span>{' '}
            background
          </h4>
          <p className="text-base mt-[1rem]">
            <span
              className={'hidden md:flex'}
            >{`Hi I'm Leander - a UX designer with a passion for the craft of good functional design. 
I’ve worked with design and engineering for 25+ years and have experience both from global companies such as Axis and IKEA as well as running my own design agency with big and small clients.
I love UX design because it allows you to “fix” obvious wrongs and make the users life easier, simply by adhering to the rules of functional design. Good design is like good carpentry: be meticulous, be precise and make sure that it works well. There is so much bad design out there and I enjoy cleaning up the world one interaction and one screen at a time.
`}</span>
            <span
              className={'md:hidden'}
            >{`Hi I'm Leander - a UX designer with a passion for the craft of good functional design. 
I’ve worked with design and engineering for 25+ years and have experience both from global companies as well as running my own design agency.
I love UX design because it allows you make the users life easier. Good design is like good carpentry: be meticulous, be precise and make sure that it works well. There is so much bad design out there and I enjoy cleaning up the world one interaction and one screen at a time.
`}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
