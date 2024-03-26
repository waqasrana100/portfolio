'use client';

import Title from '@/app/(home)/components/Title';
import { Meteors } from '@/components/ui/meteors';
import { MovingBorderBtn } from '@/components/ui/moving-border';
import Link from 'next/link';
import Image from 'next/image';

import { SiPostgresql, SiReact, SiTemporal, SiTypescript } from 'react-icons/si';

const Hero = () => {
  const currentStack = [
    { icon: SiTypescript },
    { icon: SiPostgresql },
    { icon: SiTemporal },
    { icon: SiReact },
  ];
  return (
    <div className='min-h-[60vh] flex flex-col gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up'>
      <div className='space-y-10 text-center lg:text-left'>
        <h1 className='text-4xl lg:text-7xl font-bold'>
          Nice to meet you! 👋
          <br />
          <span className='underline underline-offset-8 decoration-green-500'>{"I'm Rana Waqas."}</span>
        </h1>

        <p className='md:w-96 text-lg text-gray-300'>
          {
            "Based in Lahore Pakistan, I'm a software engineer passionate about building a modern web application that users love."
          }
        </p>

        <Link href={'mailto:mashchenko1@icloud.com'} className='inline-block group'>
          <Title text='Contact Me 📭' />
        </Link>
      </div>
      <div className='relative'>
        <div className=''>
          <div className=' w-full relative max-w-xs'>
            <div className='absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl' />
            <div className='relative shadow-xl bg-[#09090B] border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start'>
              <div className='flex items-center justify-center mb-4 gap-3'>
                {currentStack.map((current, index) => {
                  const Icon = current.icon;
                  return <Icon key={index} className='w-7 h-7' />;
                })}
              </div>

              <div className='flex items-end mb-4 gap-1 '>
                <h1 className='font-bold text-xl text-white relative z-50'>I Train@</h1>
                <h1 contentEditable role='textbox' aria-multiline='true'>Code With Edraak</h1>
                <Image src="/images/yt.svg" alt="ytsvg" width={27} height={27} />
              </div>

              <p className='font-normal text-base text-slate-500 mb-4 relative z-50'>
                With over five years of experience, I specialize in training individuals in JavaScript, React, Next.js, and Node.js. My goal is to make a meaningful change in people&apos;s lives. I teach on YouTube, focusing on the world&apos;s most advanced digital skills for prevention, performance, and longevity in the tech industry.
              </p>
              <MovingBorderBtn borderRadius='0.5rem' className='p-4 font-semibold'>
                <p>Dive into my YouTube channel</p>
              </MovingBorderBtn>

              <Meteors number={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
