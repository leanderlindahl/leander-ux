import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

export default function Header({}: Props) {
  return (
    <header
      className={
        'sticky top-0 p-5 flex flex-items-start justify-between max-w-7xl mx-auto z-20 xl-items-center'
      }
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className={'flex flex-row items-center'}
      >
        <SocialIcon
          url={'https://www.linkedin.com/in/leanderlindahl/'}
          label={'Leander on LinkedIn'}
          fgColor={'grey'}
          bgColor={'transparent'}
        />
        <SocialIcon
          url={'https://github.com/leanderlindahl'}
          label={'Leander on LinkedIn'}
          fgColor={'grey'}
          bgColor={'transparent'}
        />
      </motion.div>
      <Link href={'#contact'}>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className={'flex flex-row items-center text-gray-300 cursor-pointer'}
        >
          <SocialIcon
            className={'cursor-pointer'}
            network={'email'}
            fgColor={'grey'}
            bgColor={'transparent'}
          />
          <p
            className={'uppercase hidden md:inline-flex text-sm text-gray-400'}
          >
            Get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
