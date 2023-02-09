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
            '-mb-10 mt-20 flex-shrink-0 w-56 h-56 rounded-full object-cover md:mb-0 md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
          }
        />
        <div
          className={
            'flex flex-col mt-[4rem] px-5 md:px-10 md:space-y-10 mb-20 mx-5 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 '
          }
        >
          <h4 className={'text-4xl font-semibold'}>
            Here is a{' '}
            <span className={'underline decoration-[#F7AB0A]/50'}>little</span>{' '}
            background
          </h4>
          <p className="text-base mt-[1rem]">
            {`I'm Leander and I'm about to write some actual content in this spot. In the mean time it will be lorem ipsum: `}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            consequuntur facere quaerat placeat exercitationem! Quod hic in
            distinctio id nemo nobis eveniet nisi, impedit, magni veritatis
            maiores architecto porro nostrum. Iusto incidunt nesciunt nam neque!
            Non atque modi eius id laboriosam quasi ipsam autem consequuntur
            natus obcaecati dolorum voluptate provident voluptatem maxime
            facilis quam fuga, et impedit cupiditate. Molestias, non. Delectus
            dolorem architecto totam rerum nemo tenetur sed, voluptate inventore
            in veniam obcaecati velit accusamus aperiam dolor, provident, cumque
            minus magnam aliquid placeat repudiandae laborum. Cum quisquam sunt
            eaque provident! Perspiciatis nemo omnis, officia!
          </p>
        </div>
      </div>
    </motion.div>
  );
}
