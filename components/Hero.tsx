import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Hello, I'm Leander",
      'Guy-who-loves-usability.tsx',
      '<AndFunctionalDesign />',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className={
        'h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'
      }
    >
      <BackgroundCircles />
      <img
        className={'relative rounded-full h-32 w-31 mx-auto object-cover'}
        src={'/images/leander-norway-400px.jpg'}
        alt={'Leander Lindahl'}
      />
      <div className={'z-20'}>
        <h2 className={'text-sm uppercase text-gray-500 pb-2 tracking-[15px]'}>
          UX Designer
        </h2>
        <h1 className={'text-5xl lg:text-6xl font-semibold px-10'}>
          <span className={'mr-3'}>{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className={'pt-5'}>
          <Link href="#about">
            <button className={'heroButton'}>About</button>
          </Link>
          <Link href="#experience">
            <button className={'heroButton'}>Experience</button>
          </Link>
          <Link href="#skills">
            <button className={'heroButton'}>Skills</button>
          </Link>
          <Link href="#projects">
            <button className={'heroButton'}>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
